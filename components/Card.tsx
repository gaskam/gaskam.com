import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import IconArrowRight from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/arrow-right.tsx";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {
    title?: string;
    content?: string;
    linkText?: string;
    linkHref?: string;
}

export default function Card(props: props) {
    const {
        title,
        content,
        linkText,
        linkHref,
        class: _class,
        className,
        ...otherProps
    } = props;
    let classes;
    if (_class ?? className) {
        classes = "card mouseAnimated " + (_class ?? "") as string +
            (className ?? "");
    } else classes = "card mouseAnimated";
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="/css/card.css"
                    key="card-css-injection"
                />
                <script
                    src="/js/card-hover-effect.js"
                    key="card-js-injection"
                    defer
                >
                </script>
            </Head>
            <div {...otherProps} className={classes}>
                <div className="alignstart">
                    <span className="title">{props.title}</span>
                    <span className="content">{props.content}</span>
                </div>
                <a href={props.linkHref} className="linkcontainer">
                    <span className="link">{props.linkText}</span>
                    <IconArrowRight class="rightlinkarrow" />
                </a>
            </div>
        </>
    );
}
