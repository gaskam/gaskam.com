import Header from "../components/Header.tsx";
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
            <Card
                className="big-card"
                title="Gaskam.com"
                content="Ce magnifique site est probablement la démo la plus efficace pour vous montrer nos tallents de développeur front-end. Nous avons fait “gaskam.com” grâce à Fresh de Deno, pour la meilleure expérience utilisateur !"
                linkHref="#"
                linkText="J'adore !"
            >
            </Card>
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
            <Card
                title="DevChrono"
                content="Sur la même base que DevTimer, DevChrono est votre ami pour mesurer le temps facilement !"
                linkHref="/hello.txt"
                linkText="En voir plus"
            >
            </Card>
            <div className="specialCard mouseAnimated">
                <span className="title">
                    C'est pour bientôt! En attendant, venez sur le Discord !
                </span>
                <a href="http://discord.gaskam.com/">
                    <p>Y aller !</p>
                </a>
            </div>
        </>
    );
}
