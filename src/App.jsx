import gsap, { Linear } from "gsap";
import { useEffect, useRef } from "react";
import useScrollPosition from "./assets/components/hook/useScrollPosition";
import HeroBanner from "./assets/components/hero-banner/heroBanner";
import MenuCard from "./assets/components/menu-card/menuCard";
function App() {
  const itemsMenu = [
    {
      title: "Salade Quinoa Fraîche",
      price: 12,
      recipe:
        "Quinoa, tomates cerises, concombres, poivrons, vinaigrette à l'huile d'olive et aux herbes.",
    },
    {
      title: "Raviolis Champignons Sauvages",
      price: 15,
      recipe:
        "Champignons sauvages, ricotta, ail, pâte à raviolis, sauce au beurre et aux herbes.",
    },
    {
      title: "Saumon Croûte d'Herbes",
      price: 20,
      recipe:
        "Filet de saumon, herbes aromatiques, chapelure, purée de pommes de terre, julienne de légumes.",
    },
    {
      title: "Risotto Asperges Parmesan",
      price: 18,
      recipe: "Asperges, riz, bouillon, parmesan.",
    },
    {
      title: "Suprême Volaille Forestière",
      price: 17,
      recipe:
        "Suprême de volaille, champignons des bois, pommes de terre rôties, légumes verts.",
    },
    {
      title: "Tarte Fruits Rouges",
      price: 7,
      recipe: "Fruits rouges, crème pâtissière, pâte brisée, menthe fraîche.",
    },
  ];

  const icons = [
    {
      svg: "/src/assets/svg/conet-glace.svg",
      text: "top glace",
    },
    {
      svg: "/src/assets/svg/fruit-sorbets.svg",
      text: "Fruit Sorbets",
    },
    {
      svg: "/src/assets/svg/corner-penché.svg",
      text: "variété de glace",
    },
    {
      svg: "/src/assets/svg/coupe-glace.svg",
      text: "Coupes glacées",
    },
    {
      svg: "/src/assets/svg/smoothies.svg",
      text: "Smoothies",
    },
    {
      svg: "/src/assets/svg/boissons.svg",
      text: "Boissons & Plus",
    },
  ];

  const articles = [
    {
      img: "/src/assets/images/article-histoire.webp",
      titleH2: "Histoire",
      titleH3: "Étrange histoire de l'émergence de la cuisine saine",
      altImage: "Image représentant des brownies avec des framboises",
      content:
        "Explorez l'émergence étonnante de la cuisine saine dans cette histoire captivante de saveurs et de bien-être. Un voyage culinaire à ne pas manquer !",
    },
    {
      img: "/src/assets/images/article-communauté.webp",
      titleH2: "Communauté",
      titleH3: "Alimentation saine sur les réseaux sociaux.",
      altImage: "Images représentant un bol de nourriture",
      content:
        "Découvrez l'alimentation saine sur les réseaux sociaux et inspirez-vous pour un mode de vie équilibré. Explorez la révolution des médias sociaux et la santé.",
    },
    {
      img: "/src/assets/images/article-philosophie.webp",
      titleH2: "Philosophie",
      titleH3: "Rien que la meilleure nourriture, les meilleurs invités.",
      altImage: "Images représentant des avocats farcie aux légumes",
      content:
        "Succombez à l'excellence culinaire, entouré des meilleurs convives. Découvrez comment notre passion pour la gastronomie sublime l'art de recevoir.",
    },
  ];

  const animateElementsRef = useRef([]);
  const animatedElements = useRef(new Set());

  const scrollPosition = useScrollPosition();

  const animateElement = (element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 0.6, ease: Linear }
    );

    animatedElements.current.add(element);
  };

  useEffect(() => {
    const elements = animateElementsRef.current;
    elements.forEach((element) => {
      if (element) {
        const boundingClientRect = element.getBoundingClientRect();
        const isVisible = boundingClientRect.top <= window.innerHeight * 0.8;

        if (isVisible && !animatedElements.current.has(element)) {
          animateElement(element);
        }
      }
    });
  }, [scrollPosition]);
  return (
    <>
      <HeroBanner animateElementsRef= {animateElementsRef}/>
      
      <MenuCard animateElementsRef={animateElementsRef} itemsMenu={itemsMenu}/>

      
      {/* section 3 */}
      <section className="text-gray-100  bg-[url('/src/assets/images/section-2.webp')] bg-center bg-cover">
        <div className=" bg-black h-full w-full bg-opacity-60 z-0 ">
          <div className="max-w-5xl m-auto">
            <div className="px-2 py-5 gap-5 flex flex-wrap items-center justify-center sm:px-10 sm:py-20 sm:ml-auto sm:w-[640px] lg:w-[800px] sm:justify-end">
              {icons.length <= 0
                ? null
                : icons.map((icon, index) => (
                    <article
                      className="bg-black rounded-lg bg-opacity-[60%] h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] flex flex-col items-center gap-[27px] justify-center text-center animate"
                      ref={(el) => animateElementsRef.current.push(el)}
                      key={index}
                    >
                      <img
                        loading="lazy"
                        className="max-w-[48px]"
                        src={icon.svg}
                        alt={`svg ${icon.text}`}
                      />
                      <p className="uppercase text-[16px] lg:text-[22px] ">{icon.text}</p>
                    </article>
                  ))}
            </div>
          </div>
        </div>
      </section>
      {/* fin section 3 */}
      {/* section 4 */}
      <section className="max-w-5xl md:flex px-2 md:py-8 m-auto">
        {articles.length <= 0
          ? null
          : articles.map((article, index) => (
              <article
                ref={(el) => animateElementsRef.current.push(el)}
                className={`text-center flex flex-col md:flex-1 px-2 gap-8 md:gap-0  my-8 md:px-0 animate  ${
                  index === 1 && "md:flex-col-reverse"
                }`}
                key={index}
              >
                <img
                  loading="lazy"
                  className="h-[350px] w-[350px] object-cover m-auto md:m-0 md:w-full"
                  src={article.img}
                  alt={article.altImage}
                />
                <div className="flex flex-col gap-2 pb-3 md:min-h-[350px]">
                  <h2 className="max-w-[362px] m-auto text-[32px] lg:text-[40px]">
                    {article.titleH2}
                  </h2>
                  <h3 className="max-w-[362px] m-auto text-[24px] lg:text-[32px]">
                    {article.titleH3}
                  </h3>
                  <div className="flex flex-col gap-8">
                    <p className="max-w-[362px] m-auto text-[18px]">
                      {article.content}
                    </p>
                  </div>
                  <a
                    className="underline text-[22px] font-bold hover:cursor-pointer"
                    href="#"
                  >
                    En savoir plus
                  </a>
                </div>
              </article>
            ))}
      </section>
      {/* fin section 4 */}
      {/* section 5 */}
      <section className="max-w-5xl flex flex-col gap-[50px] px-2 m-auto">
        <div className="md:flex md:gap-8">
          <div
            className="max-w-[344px] my-[18px] mx-auto md:mr-0 flex flex-col gap-8 md:justify-center md:gap-4 md:h-[500px] md:min-w-[calc(50%-16px)] animate"
            ref={(el) => animateElementsRef.current.push(el)}
          >
            <h2 className="text-[32px] w-[305px] mx-auto text-center lg:text-[40px]">
              La santé est le bien le plus précieux.
            </h2>
            <p className="text-[18px] lg:text-[24px]">
              Bien qu'il soit important d'avoir des sucres naturellement
              présents dans votre alimentation, de nombreux aliments contiennent
              des sucres ajoutés nocifs qui n'apportent aucune valeur nutritive.
              <br />
              <br />
              Selon une étude menée par l'Université de Floride, le cerveau
              libère des substances chimiques similaires à l'héroïne appelées
              opioïdes endogènes lorsque quelqu'un se laisse aller à des
              aliments sucrés, salés ou gras.
            </p>
          </div>
          <img
            loading="lazy"
            className="w-[349px] h-[298px] md:h-[550px] md:min-w-[calc(50%-16px)] object-cover m-auto md:ml-0 animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/image-santé.webp"
            alt="Image représentant une bol de nourriture"
          />
        </div>
        <div className="md:flex md:gap-8">
          <img
            loading="lazy"
            className="w-[349px] h-[298px] md:h-[500px] md:min-w-[calc(50%-16px)] object-cover m-auto md:mr-0 animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/image-santé-2.webp"
            alt="Image représentant un bol de fruit"
          />
          <div
            className="max-w-[344px] my-[18px] mx-auto flex flex-col gap-8 md:ml-0 md:justify-center md:h-[500px] md:min-w-[calc(50%-16px)] animate"
            ref={(el) => animateElementsRef.current.push(el)}
          >
            <p className="text-[18px] lg:text-[24px]">
              Nous vous apportons le meilleur mélange de produits biologiques de
              saison et d'artisanat de ferme directement à votre porte en
              travaillant en partenariat avec des fermes locales et des artisans
              de votre région. Découvrez la fraîcheur et la qualité de nos
              produits, le tout dans le confort de votre foyer.
            </p>
          </div>
        </div>
      </section>
      {/* fin section 5 */}
      {/* section 6 */}
      <section className="max-w-5xl px-2 flex flex-col gap-[50px] m-auto">
        <h2
          className="text-center text-[32px] max-w-[75%] mt-5 mx-auto lg:text-[40px] animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          Apprenez à cuisiner en ligne
        </h2>
        <div
          className="md:max-w-[75%] m-auto animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <p className="text-[18px] lg:text-[24px]">
            Découvrez l'art de la cuisine depuis chez vous avec nos cours en
            ligne ! Plongez dans un monde de saveurs et d'expertise culinaire,
            tout en perfectionnant vos talents de chef.
          </p>
        </div>
        <div className="m-auto flex flex-col gap-2 md:flex-row ">
          <img
            loading="lazy"
            className="md:max-w-[calc(99%/3)] animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/apprendre-1.webp"
            alt="Image représentant des hommes préparant des assiettes"
          />
          <img
            loading="lazy"
            className="md:max-w-[calc(99%/3)] animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/apprendre-2.webp"
            alt="Image représentant un four à bois en cour de chauffe"
          />
          <img
            loading="lazy"
            className="md:max-w-[calc(99%/3)] animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/apprendre-3.webp"
            alt="Image représentant un ustensil de cuisine"
          />
        </div>
        <a
          className="underline font-bold text-center text-[22px] lg:text-[26px] animate"
          ref={(el) => animateElementsRef.current.push(el)}
          href="#"
        >
          En savoir plus
        </a>
      </section>
      {/* fin section 6 */}
      {/* section 7 */}
      <section className="flex flex-col gap-[50px] my-[50px]">
        <div className="md:flex">
          <img
            loading="lazy"
            className="h-[560px] w-full object-cover md:h-[400px] md:w-[33%] animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/image-bottom (1).webp"
            alt="Image représentant de la viande rouge coupée "
          />
          <img
            loading="lazy"
            className="h-[560px] w-full object-cover md:h-[400px] md:w-[33%] animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/image-bottom (2).webp"
            alt="Image représentant un ribs"
          />
          <img
            loading="lazy"
            className="h-[560px] w-full object-cover md:h-[400px] md:w-[33%] animate"
            ref={(el) => animateElementsRef.current.push(el)}
            src="/src/assets/images/image-bottom (3).webp"
            alt="Image représentant un homme en train de couper de la viande"
          />
        </div>
        <div
          className="animate gap-[50px] flex flex-col"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <div className="max-w-[358px] px-2 m-auto md:max-w-[75%]">
            <p className=" font-bold text-center text-[18px] lg:text-[24px]">
              Nous apportons le meilleur mélange de produits biologiques de la
              saison produits fermiers et artisanaux facilement à votre porte en
              cultivant et partenariat avec des fermes et des artisans locaux
              dans votre région.
            </p>
          </div>
          <div className="flex justify-center gap-3 ">
            <img
              loading="lazy"
              src="/src/assets/svg/facebook.svg"
              alt="Icon de facebook"
            />
            <img
              loading="lazy"
              src="/src/assets/svg/twitter.svg"
              alt="Icon de twitter"
            />
            <img
              loading="lazy"
              src="/src/assets/svg/intagram.svg"
              alt="Icon de Instagram"
            />
          </div>
        </div>
      </section>
      {/* fin section 7 */}
      {/* footer */}
      <footer className="bg-gray-300 h-[100px] flex justify-center items-center">
        <p className="text-[20px] lg:text-[26px] font-bold text-center">
          Réalisé par{" "}
          <a className="underline" href="https://julien-webandco.fr">
            Julien Web&Co
          </a>
        </p>
      </footer>
      {/* fin footer */}
    </>
  );
}

export default App;
