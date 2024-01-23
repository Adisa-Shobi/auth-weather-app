"use server";
import { signIn } from "../auth";

export async function signInFunc(email: string, password: string) {
    // "use client";
    return await signIn('credentials', {
        redirect: true,
        redirectTo: '/protected',
        email: email,
        password: password,
    })
    // .catch((error) => {
    //     if (error.type === 'CredentialsSignin') {
    //         Response.redirect(new URL('/login'));

    //     }
    //     console.log(error);
    //     return error;
    // });
}