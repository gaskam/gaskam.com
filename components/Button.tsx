import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Button(
    { class: _class, className, children, ...props }: JSX.HTMLAttributes<
        HTMLAnchorElement
    >,
) {
    let classes;
    if (_class ?? className) {
        classes = "Button " + (_class ?? "") as string +
            (className ?? "");
    } else classes = "Button";
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/Button.css" key="Button-css-injection" />
            </Head>
            <a {...props} className={classes}>
                {children}
            </a>
        </>
    );
}
