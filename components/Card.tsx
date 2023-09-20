import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";

interface props extends JSX.HTMLAttributes {
    title: string;
    content: string;
    linkText: string;
    linkHref: string;
};

export default function Card(props: props) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/card.css" key="card-css-injection" />
            </Head>
            <div className="card">
                <span className="title">{props.title}</span>
                <span className="content">{props.content}</span>
                <a href={props.linkHref} className="link">{props.linkText}</a>
            </div>
        </>
    );
}