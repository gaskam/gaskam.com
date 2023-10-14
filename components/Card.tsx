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
        children,
        ...otherProps
    } = props;
    let classes;
    if (_class ?? className) {
        classes = "card mouseAnimated " + (_class ?? "") as string +
            (className ?? "");
    } else classes = "card mouseAnimated";

    let titleComponent = <></>;
    if (props.title) {
        titleComponent = <h3 className="title">{props.title}</h3>;
    }

    let contentComponent = <></>;
    if (props.content) {
        contentComponent = <p className="content">{props.content}</p>;
    }

    let alignStartComponent = <></>;
    if (props.content || props.title) {
        alignStartComponent = (
            <div className="alignstart">
                {titleComponent}
                {contentComponent}
            </div>
        );
    }

    let linkComponent = <></>;
    if (props.linkHref && props.linkText) {
        linkComponent = (
            <a href={props.linkHref} className="linkcontainer">
                <span className="link">{props.linkText}</span>
                <IconArrowRight class="rightlinkarrow" />
            </a>
        );
    }
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
                {alignStartComponent}
                {linkComponent}
                {children}
            </div>
        </>
    );
}
