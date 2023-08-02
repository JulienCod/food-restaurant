import logoRestaurannt from "../../images/logo-restaurant.webp";
import logoMenuBurger from "../../svg/menu-burger.svg";
import iconArrow from "../../svg/flèche.svg";
import Images from "../image/images";

const HeroBanner = ({ animateElementsRef }) => {
  return (
    <div className=" text-gray-100 bg-center bg-cover bg-[url('/src/assets/images/image-top.webp')]">
      <div className=" bg-black h-full w-full bg-opacity-75 z-0">
        <header
          className="relative top-0 flex items-center justify-between p-4 max-w-7xl m-auto animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <Images
            src={logoRestaurannt}
            alt={"logo du site food restaurant"}
            className={"h-[50px] md:h-[75px]"}
            isLazy={false}
          />
          <div className="mx-4 ">
            <Images
              src={logoMenuBurger}
              alt={"image menu burger"}
              className={"z-10 md:h-[40px] hover:cursor-pointer "}
              isLazy={false}
            />
          </div>
        </header>
        <section className="px-4 py-8 z-10 flex flex-col gap-4 md:gap-16 md:py-16 h-full max-w-7xl m-auto">
          <div
            ref={(el) => animateElementsRef.current.push(el)}
            className="animate"
          >
            <Images
              src={logoRestaurannt}
              alt={"logo du site food restaurant"}
              className={"w-[70%] m-auto max-w-[400px]"}
              isLazy={false}
            />
          </div>
          <div>
            <h1
              className="text-center text-[36px] max-w-2xl m-auto md:text-[50px] lg:max-w-none lg:text-[75px] animate"
              ref={(el) => animateElementsRef.current.push(el)}
            >
              Goûtez l'harmonie des ingrédients frais et locaux.
            </h1>
          </div>
          <div>
            <p
              className="text-[18px] text-center max-w-xl m-auto md:text-[24px] lg:max-w-none lg:text-[40px] animate"
              ref={(el) => animateElementsRef.current.push(el)}
            >
              Savourez l'harmonie des ingrédients frais et locaux, sublimant
              chaque plat pour une expérience gustative inégalée chez Food
              Restaurant. Une cuisine raffinée, respectueuse de la nature et de
              ses trésors culinaires.
            </p>
          </div>
          <div
            ref={(el) => animateElementsRef.current.push(el)}
            className="m-auto animate"
          >
            <Images
              src={iconArrow}
              alt={"icone d'une Flèche"}
              className={"animate-arrow element"}
              isLazy={false}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroBanner;
