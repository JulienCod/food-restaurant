import gsap, { Linear } from "gsap";
import { useEffect, useRef } from "react";
import useScrollPosition from "./assets/components/hook/useScrollPosition";
import HeroBanner from "./assets/components/hero-banner/heroBanner";
import MenuCard from "./assets/components/menu-card/menuCard";
import IconDelivery from "./assets/components/icon-delivery/iconDelivery";
import IconIceScreamCone from "./assets/svg/conet-glace.svg";
import Iconsorbet from "./assets/svg/fruit-sorbets.svg";
import IconVariantIce from "./assets/svg/corner-penché.svg";
import IconCupIce from "./assets/svg/coupe-glace.svg";
import IconSmoothies from "./assets/svg/smoothies.svg";
import IconDrink from "./assets/svg/boissons.svg";
import ArticleBlog from "./assets/components/article-blog/articleBlog";
import ImageArticleBlog1 from "./assets/images/article-histoire.webp";
import ImageArticleBlog2 from "./assets/images/article-communauté.webp";
import ImageArticleBlog3 from "./assets/images/article-philosophie.webp";
import LearnToCook from "./assets/components/learn-to-cook/LearnToCook";


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
      svg: IconIceScreamCone,
      text: "top glace",
    },
    {
      svg: Iconsorbet,
      text: "Fruit Sorbets",
    },
    {
      svg: IconVariantIce,
      text: "variété de glace",
    },
    {
      svg: IconCupIce,
      text: "Coupes glacées",
    },
    {
      svg: IconSmoothies,
      text: "Smoothies",
    },
    {
      svg: IconDrink,
      text: "Boissons & Plus",
    },
  ];

  const articles = [
    {
      img: ImageArticleBlog1,
      titleH2: "Histoire",
      titleH3: "Étrange histoire de l'émergence de la cuisine saine",
      altImage: "Image représentant des brownies avec des framboises",
      content:
        "Explorez l'émergence étonnante de la cuisine saine dans cette histoire captivante de saveurs et de bien-être. Un voyage culinaire à ne pas manquer !",
    },
    {
      img: ImageArticleBlog2,
      titleH2: "Communauté",
      titleH3: "Alimentation saine sur les réseaux sociaux.",
      altImage: "Images représentant un bol de nourriture",
      content:
        "Découvrez l'alimentation saine sur les réseaux sociaux et inspirez-vous pour un mode de vie équilibré. Explorez la révolution des médias sociaux et la santé.",
    },
    {
      img: ImageArticleBlog3,
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

      <IconDelivery animateElementsRef={ animateElementsRef } icons={icons}/>

      <ArticleBlog animateElementsRef={animateElementsRef} articles={articles} />

      <LearnToCook animateElementsRef={animateElementsRef} />
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
