import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Error404() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
                <link rel="stylesheet" href="/css/_404.css" />
            </Head>
            <Header />

            <error404>
                <body>
                    <div class="content">
                        <img
                            src="/images/gaskam-logo-min.png"
                            alt="the Gaskam logo: a tagged background with the text 'Gaskam' in the middle"
                        />
                        <h1>404 - Page not found</h1>
                        <p>
                            The page you were looking for doesn't exist.
                        </p>
                        <div className="button">
                            <a href="https://gaskam.com/">Go back home</a>
                        </div>
                    </div>
                </body>
            </error404>
        </>
    );
}
