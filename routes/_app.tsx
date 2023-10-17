import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
return (
<html lang="fr">
<head>
    <meta charSet="utf-8" />
    <meta name="keywords" content="
                Gaskam,
                Dev-Timer,
                Dev-Chrono,
                BeamRadio,
                CFG,
                PataLand,
                BeamNG.Drive,
                Portfolio,
                GitHub,
                Fresh,
                Deno,
                Typescript,
                Javascript,
                Développement web,
                Création de sites,
                BeamNG server,
                About Gaskam,
                France,
                "/>
    <meta name="description"
        content="Gaskam est un petit groupe composé de BotMaker et Patafix, deux jeunes développeurs français, encore étudiants, avec de grandes ambitions. Nous faisons des projets en tout genre en JavaScript, TypeScript, HTML, CSS, Lua et Python."/>
    <meta name="author" content="Gaskam"/>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gaskam - Official Website</title>
    <link rel="stylesheet" href="/css/styles.css" />
</head>

<body>
    <Component />
</body>

</html>
);
}