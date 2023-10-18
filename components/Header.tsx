import { Head } from "$fresh/runtime.ts";

export default function Header() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/header.css" />
            </Head>
            <header>
                <a href="#">
                    <h1 class="page-name">Gaskam</h1>
                </a>

                <div class="nav">
                    <div class="Social">
                        <a href="https://github.com/gaskam-com/">
                            <img
                                src="/header/github.svg"
                                alt="the github logo"
                            />
                        </a>
                        <a href="http://discord.gaskam.com">
                            <img
                                src="/header/discord.svg"
                                alt="the discord logo"
                            />
                        </a>
                    </div>
                    <span class="separator"></span>
                    <a href="https://dev.gaskam.com">
                        <img src="/header/dev.svg" alt="the light theme logo" />
                    </a>
                </div>
            </header>
        </>
    );
}
