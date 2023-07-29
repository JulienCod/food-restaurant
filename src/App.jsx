import "./App.css";

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
      img: "/src/assets/images/article-histoire.jpg",
      titleH2: "Histoire",
      titleH3: "Étrange histoire de l'émergence de la cuisine saine",
      content:
        "Explorez l'émergence étonnante de la cuisine saine dans cette histoire captivante de saveurs et de bien-être. Un voyage culinaire à ne pas manquer !",
    },
    {
      img: "/src/assets/images/article-communauté.jpg",
      titleH2: "Communauté",
      titleH3: "Alimentation saine sur les réseaux sociaux.",
      content:
        "Découvrez l'alimentation saine sur les réseaux sociaux et inspirez-vous pour un mode de vie équilibré. Explorez la révolution des médias sociaux et la santé.",
    },
    {
      img: "/src/assets/images/article-philosophie.jpg",
      titleH2: "Philosophie",
      titleH3: "Rien que la meilleure nourriture, les meilleurs invités.",
      content:
        "Succombez à l'excellence culinaire, entouré des meilleurs convives. Découvrez comment notre passion pour la gastronomie sublime l'art de recevoir.",
    },
  ];

  return (
    <>
      {/* Section 1 */}
      <div className="h-[934px] text-gray-100  bg-center bg-cover bg-[url('/src/assets/images/image-top.webp')]">
        <div className=" bg-black h-full w-full bg-opacity-75 z-0">
          <header className="relative top-0 min-h-[80px] flex items-center justify-between">
            <img
              className="h-[50px] mx-4"
              src="/src/assets/images/logo-restaurant.webp"
              alt="logo du site food restaurant"
            />
            <div className="mx-4">
              <img
                className="z-10"
                src="/src/assets/svg/menu-burger.svg"
                alt="image menu burger"
              />
            </div>
          </header>
          <section className="z-10 flex flex-col justify-center gap-[65px] mt-[50px]">
            <div className="m-auto">
              <img
                className="w-[250px] "
                src="/src/assets/images/logo-restaurant.webp"
                alt="logo du site food restaurant"
              />
            </div>
            <div className="w-[324px] m-auto ">
              <h1 className="text-center text-[36px]">
                Goûtez l'harmonie des ingrédients frais et locaux.
              </h1>
            </div>
            <div className="w-[363px] m-auto ">
              <p className="text-[18px] text-center">
                Savourez l'harmonie des ingrédients frais et locaux, sublimant
                chaque plat pour une expérience gustative inégalée chez Food
                Restaurant. Une cuisine raffinée, respectueuse de la nature et
                de ses trésors culinaires.
              </p>
            </div>
            <div className="m-auto">
              <img src="/src/assets/svg/fléche.svg" alt="Flèche" />
            </div>
          </section>
        </div>
      </div>
      {/* fin Section 1 */}
      {/* section 2 */}
      <section className="">
        <h2 className="text-[32px] underline text-center py-[35px]">
          Notre menu
        </h2>
        <h3 className="text-[24px] text-center pb-[35px]">Délice du chef</h3>
        {itemsMenu.length <= 0
          ? null
          : itemsMenu.map((item, index) => (
              <article
                key={index}
                className="h-[200px] flex flex-col gap-[28px] border-t border-b border-black text-center"
              >
                <h4 className="w-[378px] text-[20px] mt-[34px] mx-auto">
                  {item.title + " " + item.price + " €"}
                </h4>
                <div className="w-[378] min-h-[83px] mx-auto flex items-center">
                  <p className="text-[18px]">{item.recipe}</p>
                </div>
              </article>
            ))}
      </section>
      {/* fin section 2 */}
      {/* section 3 */}
      <section className="h-[657px]  text-gray-100  bg-[url('/src/assets/images/section-2.jpg')] bg-center bg-cover">
        <div className=" bg-black h-full w-full bg-opacity-60 z-0 gap-[20px] flex flex-wrap items-center justify-center">
          {icons.length <= 0
            ? null
            : icons.map((icon, index) => (
                <article
                  className="bg-black rounded-lg bg-opacity-[60%] h-[170px] w-[170px] flex flex-col items-center gap-[27px] justify-center text-center"
                  key={index}
                >
                  <img className="max-w-[48px]" src={icon.svg} alt="" />
                  <p className="uppercase text-[16px]">{icon.text}</p>
                </article>
              ))}
        </div>
      </section>
      {/* fin section 3 */}
    </>
  );
}

export default App;
