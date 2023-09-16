import { Head } from "$fresh/runtime.ts";

export default function Header() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/header.css" />
            </Head>
            <header>
                <img
                class="my-6"
                src="/logo.svg"
                width="128"
                height="128"
                alt="the Fresh logo: a sliced lemon dripping with juice"
                />

                <img
                class="my-6"
                src="/logo.svg"
                width="128"
                height="128"
                alt="the Fresh logo: a sliced lemon dripping with juice"
                />
            </header>
        </>
    );
}
