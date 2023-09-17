import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div class="logo-acceuil">
          <img
            src="/pastelGradient.svg"
            alt="the background of the gaskam logo"
          />
          {/* <span>Gaskam</span> */}
        </div>
        <div className="citations">
            <span className="content">“Le débogage est deux fois plus difficile que la programmation. Si vous écrivez le code aussi intelligemment que possible, vous êtes, par définition, trop stupide pour déboguer.”</span>
            <span className="author">Brian W. Kernighan</span>
        </div>
		<div className="downArrow">
			<div className="downArrowHoverEffect">
				<img
					src="/downArrow.svg"
					alt="the background of the gaskam logo"
				/>
			</div>
		</div>
      </div>
    </>
  );
}
