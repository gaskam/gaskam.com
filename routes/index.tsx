import Header from "../components/Header.tsx";
import Card from "../components/Card.tsx";
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <div class="homeLogo">
                    <img
                        src="/images/gaskam-logo-min.png"
                        alt="The Gaskam logo: a tagged background with the text 'Gaskam' in the middle"
                    />
                </div>
                <div className="quote">
                    <span className="content">
                        “Le débogage est deux fois plus difficile que la
                        programmation. Si vous écrivez le code aussi
                        intelligemment que possible, vous êtes, par définition,
                        trop stupide pour déboguer.”
                    </span>
                    <span className="author">Brian W. Kernighan</span>
                </div>
                <div className="downArrow">
                    <a href="#pataland">
                        <div className="downArrowHoverEffect">
                            <img
                                src="/images/downArrow.svg"
                                alt="It's an arrow pointing down"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div className="separator"></div>
            <div className="featured">
                <div className="anchor" id="pataland"></div>
                <img
                    src="/images/pataland-hight.jpg"
                    alt="The PataLand section: a background composed of a BeamNG.drive screenshot which is a car in a showroom"
                />
                <div class="overImage">
                    <h2>PataLand</h2>
                    <p>
                        Rejoignez-nous sur notre serveur BeamMP! De nombreux
                        plugins y sont installés et vous pourrez tester de
                        nouveaux mode de jeu exclusifs...
                    </p>
                    <a href="https://pataland.gaskam.com">
                        <Button class="playPataland" id="play-pataland">
                            <h3>Jouer !</h3>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="projectsTitle" id="projects">
                <h2>Nos Projets</h2>
            </div>
            <div className="cardContainer">
                <Card
                    className="bigCard"
                    title="Gaskam.com"
                    hoverFactor={0.5}
                    content="Ce magnifique site est probablement la démo la plus efficace pour vous montrer nos tallents de développeur front-end. Nous avons fait “gaskam.com” grâce à Fresh de Deno, pour la meilleure expérience utilisateur !"
                >
                    <img
                        src="/images/cloud.svg"
                        alt="An illustration of a cloud in the bottom right corner of the card"
                    />
                    <Button href="https://patreon.com/gaskam">
                        <p>J'adore !</p>
                    </Button>
                </Card>
                <div className="toBottom">
                    <div className="toRight">
                        <Card
                            title="DevTimer"
                            content="Cette librairie TypeScript est d’une simplicité... Vous allez adorer !"
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
                        <Card
                            className="specialCard"
                            content="C'est pour bientôt ! En attendant, venez sur le
                                Discord !"
                        >
                            <div className="decoration topLeft"></div>
                            <Button href="http://discord.gaskam.com">
                                <p>Y aller !</p>
                            </Button>
                            <div className="decoration bottomRight"></div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="aboutAnchor" id="about"></div>
            <div class="aboutSection">
                <div class="githubAvatars">
                    <img
                        class="avatarBotMaker"
                        src="https://avatars.githubusercontent.com/u/72702161?v=4"
                        alt="The BotMaker's avatar on GitHub used as a profile picture to represent him"
                    />
                    <img
                        class="avatarPatafix"
                        src="https://avatars.githubusercontent.com/u/87929402?v=4"
                        alt="The Patafix's avatar on GitHub used as a profile picture to represent him"
                    />
                </div>
                <div class="aboutContent">
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
                <div class="aboutTitle">
                    <h2>About</h2>
                </div>
            </div>
            <div className="social">
                <a href="https://github.com/gaskam-com/">
                    <div className="socialButton socialGithub">
                        <img
                            src="/images/github.svg"
                            alt="It's the Github logo used as button"
                        />
                    </div>
                </a>
                <a href="http://discord.gaskam.com">
                    <div className="socialButton socialDiscord">
                        <img
                            src="/images/discord.svg"
                            alt="It's the Discord logo used as button"
                        />
                    </div>
                </a>
                <a href="mailto:contact@gaskam.com">
                    <div className="socialButton socialMail">
                        <img
                            src="/images/email.svg"
                            alt="It's mail image used as button"
                        />
                    </div>
                </a>
                <a href="https://youtube.com/@gaskam/">
                    <div className="socialButton socialYoutube">
                        <img
                            src="/images/youtube.svg"
                            alt="It's the YouTube logo used as button"
                        />
                    </div>
                </a>
            </div>
            <Footer />
        </>
    );
}
