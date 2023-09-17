import { Head } from "$fresh/runtime.ts";

export default function Header() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/header.css" />
            </Head>
            <header>
                <h1 class="logo">Gaskam</h1>

                <div class="nav">
                    <div class="Social">
                        <img
                            src="/github.svg"
                            alt="the github logo"
                        />
                        <img
                            src="/discord.svg"
                            alt="the discord logo"
                        />
                    </div>
                    <span class="separator"></span>
                    <img
                        src="/dev.svg"
                        alt="the light theme logo"
                    />
                </div>
            </header>
        </>
    );
}
