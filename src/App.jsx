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
import Card from "./assets/components/card/card";
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

      <Card animateElementsRef={animateElementsRef} />

      <LearnToCook animateElementsRef={animateElementsRef} />

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
