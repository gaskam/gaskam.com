import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Card from "../components/Card.tsx";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <div class="logo-acceuil">
                    <img
                        src="/images/pastelGradient.svg"
                        alt="the background of the gaskam logo"
                    />
                    {/* <span>Gaskam</span> */}
                </div>
                <div className="citations">
                    <span className="content">
                        “Le débogage est deux fois plus difficile que la
                        programmation. Si vous écrivez le code aussi
                        intelligemment que possible, vous êtes, par définition,
                        trop stupide pour déboguer.”
                    </span>
                    <span className="author">Brian W. Kernighan</span>
                </div>
                <a href="#">
                    <div className="downArrow">
                        <div className="downArrowHoverEffect">
                            <img
                                src="/images/downArrow.svg"
                                alt="the background of the gaskam logo"
                            />
                        </div>
                    </div>
                </a>
            </div>
            <div className="separator"></div>
            <div className="featured">
                <img
                    src="/images/pataland-hight.jpg"
                    alt="the PataLand presentation poster"
                />
                <div class="over-image">
                    <h2>PataLand</h2>
                    <p>
                        Rejoignez-nous sur notre serveur BeamMP! De nombreux
                        plugins y sont installés et vous pourrez tester de
                        nouveaux mode de jeu exclusifs...
                    </p>
                    <a href="https://pataland.gaskam.com">
                        <div class="play-pataland" id="play-pataland">
                            <h3>Jouer !</h3>
                        </div>
                    </a>
                </div>
            </div>
            <div className="projects-title">
                <h2>Nos Projets</h2>
            </div>
            <div className="cardContainer">
                <Card
                    className="big-card"
                    title="Gaskam.com"
                    content="Ce magnifique site est probablement la démo la plus efficace pour vous montrer nos tallents de développeur front-end. Nous avons fait “gaskam.com” grâce à Fresh de Deno, pour la meilleure expérience utilisateur !"
                >
                </Card>
                <div className="toBottom">
                    <div className="toRight">
                        <Card
                            title="DevTimer"
                            content="Cette librairie TypeScript est d’une simpilcité... Vous allez adorer !"
                            linkHref="/hello.txt"
                            linkText="Tester une démo"
                        >
                        </Card>
                        <Card
                            title="BeamRadio"
                            content='BeamRadio est une radio pour le grand "BeamNG.drive": ce grand jeu de simulation sans égal&nbsp;!'
                            linkHref="/hello.txt"
                            linkText="Télécharger"
                        >
                        </Card>
                    </div>
                    <div className="toRight">
                        <Card
                            title="DevChrono"
                            content="Sur la même base que DevTimer, DevChrono est votre ami pour mesurer le temps facilement !"
                            linkHref="/hello.txt"
                            linkText="En voir plus"
                        >
                        </Card>
                        <div className="specialCard mouseAnimated">
                            <span className="title">
                                C'est pour bientôt! En attendant, venez sur le
                                Discord !
                            </span>
                            <a href="http://discord.gaskam.com/">
                                <p>Y aller !</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-section">
                <div class="github-avatars">
                    <img
                        class="BotMaker-pp"
                        src="https://avatars.githubusercontent.com/u/72702161?v=4"
                        alt="the BotMaker's avatar"
                    />
                    <img
                        class="Patafix-pp"
                        src="https://avatars.githubusercontent.com/u/87929402?v=4"
                        alt="the Patafix's avatar"
                    />
                </div>
                <div class="about-content">
                    <p>
                        Nous nous présentons, BotMaker et Patafix, deux jeunes
                        développeurs français, encore étudiants, avec de grandes
                        ambitions.
                    </p>

                    <p>
                        Nous faisons des projets principalement pour s’amuser et
                        relever de nouveaux défis. On assure maintenant une
                        grande polyvalence avec une maîtrise de divers langages
                        de programmation, tels que : JavaScript, TypeScript,
                        HTML, CSS, Lua et Python.
                    </p>

                    <p>
                        Enfin, on vous invite à jeter un coup d’œil à nos
                        différents réseaux, et n’hésitez pas à nous contacter à
                        l’aide des informations ci-dessous.
                    </p>
                </div>
                <div class="about-title">
                    <h2 class="special-title">About</h2>
                </div>
            </div>
            <div className="social">
                <a href="https://github.com/gaskam-com/">
                    <div className="social-button social-github">
                        <img src="/images/github.svg" alt="GitHub Button" />
                    </div>
                </a>
                <a href="http://discord.gaskam.com">
                    <div className="social-button social-discord">
                        <img src="/images/discord.svg" alt="Discord Button" />
                    </div>
                </a>
                <a href="mailto:contact@gaskam.com">
                    <div className="social-button social-mail">
                        <img src="/images/email.svg" alt="Mail Button" />
                    </div>
                </a>
                <a href="https://youtube.com/@gaskam/">
                    <div className="social-button social-youtube">
                        <img src="/images/youtube.svg" alt="YouTube Button" />
                    </div>
                </a>
            </div>
            <Footer />
        </>
    );
}
