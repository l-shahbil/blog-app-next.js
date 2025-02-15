import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    if (code) {
        const supabase = createRouteHandlerClient({ cookies });

        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
            return NextResponse.redirect(url.origin);
        }
    } else {
        return NextResponse.redirect(url.origin);
    }

    return NextResponse.redirect(url.origin);
}
