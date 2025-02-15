"use server"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";




export async function getBlogs() {
    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.from('Blogs').select()
    if (error) {
        throw new Error("Not Found Blogs")
    }
    return data

}

export async function getBlogsByUser() {
    const supabase = createServerActionClient({ cookies });

    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session) {
        throw new Error("User not authenticated");
    }

    const userEmail = session.user.email;
    const { data, error } = await supabase.from('Blogs')
        .select()
        .eq("user_email", userEmail)

    if (error) {
        throw new Error("Not Found Blogs")
    }
    return data

}



export async function getBlogsByID(id) {
    const supabase = createServerActionClient({ cookies });

    const { data: blog, error } = await supabase
        .from("Blogs")
        .select()
        .eq("id", id)
        .single();

    if (error || !blog) {
        return null
    }

    return blog;
}
export async function addBlog(fromData) {
    const blog = Object.fromEntries(fromData);
    const supabase = createServerActionClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    const { error } = await supabase.from("Blogs")
        .insert({
            title: blog.title,
            content: blog.content,
            user_email: session.user.email,
        })

    if (error) {
        throw new Error("Could not add the new blog")
    }

    revalidatePath("/blogs")
    redirect("/blogs")
}

export async function updateBlog(fromData) {
    const blog = Object.fromEntries(fromData);
    const supabase = createServerActionClient({ cookies });
    const { error } = await supabase.from("Blogs")
        .update({
            title: blog.title,
            content: blog.content,
        })
        .match({ id: blog.id });

    if (error) {
        throw new Error("Could not add the new blog")
    }

    revalidatePath("/blogs")
    redirect("/blogs")
}

export async function deleteBlog(id) {
    const supabase = createServerActionClient({ cookies });

    const { error } = await supabase.from("Blogs")
        .delete()
        .eq("id", id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/blogs")
    redirect("/blogs")
}
