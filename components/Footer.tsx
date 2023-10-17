import { Head } from "$fresh/runtime.ts";

export default function Footer() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/footer.css" />
            </Head>
            <footer>
                <div className="content">
                    <div className="nav">
                        <a href="#">
                            <h2>Gaskam</h2>
                        </a>
                        <div class="page-nav">
                            <div className="home">
                                <h3>Home</h3>
                                <a href="#pataland">PataLand</a>
                                <a href="#projects">Projets</a>
                                <a href="#about">About</a>
                            </div>
                            <div className="projets">
                                <h3>Projets</h3>
                                <a href="https://github.com/gaskam-com/dev-timer">
                                    Dev Timer
                                </a>
                                <a href="https://github.com/gaskam-com/dev-chrono">
                                    Dev Chrono
                                </a>
                                <a href="https://github.com/gaskam-com/BeamRadio">
                                    Beam Radio
                                </a>
                            </div>
                            <div className="about">
                                <h3>About</h3>
                                <a href="https://github.com/gaskam-com">
                                    GitHub
                                </a>
                                <a href="mailto:contact@gaskam.com">Contact</a>
                                <a href="https://patreon.com/gaskam">Soutenir</a>
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <div className="title">
                            <h2>Liens</h2>
                            <img src="/footer/link.svg" alt="Link Logo" />
                        </div>
                        <a target="_blank" href="https://gaskam.com">Gaskam</a>
                        <a target="_blank" href="http://discord.gaskam.com">Discord</a>
                        <a target="_blank" href="https://dev.gaskam.com">Développeur</a>
                        <a target="_blank" href="https://api.gaskam.com">API</a> 
                    </div>
                </div>
                <div className="copyright">
                    <a href="#">Gaskam © 2023</a>
                </div>
            </footer>
        </>
    );
}
