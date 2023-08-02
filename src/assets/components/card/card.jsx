import ImageHealthy from "../../images/image-santé.webp";
import ImageHealthy2 from "../../images/image-santé-2.webp";
import Images from "../image/images";

const Card = ({ animateElementsRef }) => {
  return (
    <section className="max-w-7xl flex flex-col gap-[50px] px-2 m-auto">
      <div className="md:flex md:gap-8 md:justify-center">
        <div
          className="max-w-[344px] my-[18px] md:mr-0 flex flex-col gap-8 md:justify-center md:gap-4 md:h-[500px] md:min-w-[calc(50%-16px)] md:w-[calc(50%-16px)] animate "
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <h2 className="text-[32px] w-[305px] mx-auto text-center lg:text-[40px]">
            La santé est le bien le plus précieux.
          </h2>
          <p className="text-[18px] lg:text-[24px]">
            Bien qu'il soit important d'avoir des sucres naturellement présents
            dans votre alimentation, de nombreux aliments contiennent des sucres
            ajoutés nocifs qui n'apportent aucune valeur nutritive.
            <br />
            <br />
            Selon une étude menée par l'Université de Floride, le cerveau libère
            des substances chimiques similaires à l'héroïne appelées opioïdes
            endogènes lorsque quelqu'un se laisse aller à des aliments sucrés,
            salés ou gras.
          </p>
        </div>
        <div
          className="animate flex flex-[349px] md:max-w-[calc(50%-16px)]"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <Images
            src={ImageHealthy}
            alt={"Image représentant une bol de nourriture"}
            className={"w-full h-[298px] md:h-[550px] object-cover"}
            isLazy={true}
            width={550}
            height={550}
          />
        </div>
      </div>
      <div className="md:flex md:gap-8 md:justify-center">
        <div
          className="animate flex flex-[349px] md:max-w-[calc(50%-16px)]"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <Images
            src={ImageHealthy2}
            alt={"Image représentant un bol de fruit"}
            className={"w-full h-[298px] md:h-[550px] object-cover"}
            isLazy={true}
            width={550}
            height={550}
          />
        </div>
        <div
          className="max-w-[344px] my-[18px] flex flex-col gap-8 md:ml-0 md:justify-center md:h-[500px] md:max-w-[calc(50%-16px)] animate"
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
  );
};

export default Card;
