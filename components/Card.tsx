import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";

let css_injected = false;

interface props extends EventTarget {
    title: string;
    content: string;
    linkText: string;
};

export default function Card(props: JSX.HTMLAttributes<props>) {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/card.css" />
            </Head>
            <div></div>
        </>
    );
}