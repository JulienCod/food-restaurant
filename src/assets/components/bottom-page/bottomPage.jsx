import Image1 from "../../images/image-bottom (1).webp";
import Image2 from "../../images/image-bottom (2).webp";
import Image3 from "../../images/image-bottom (3).webp";
import IconFacebbok from "../../svg/facebook.svg";
import IconTwitter from "../../svg/twitter.svg";
import IconInstagram from "../../svg/intagram.svg";
import Images from "../image/images";

const BottomPage = ({animateElementsRef}) =>{
    return(
        <section className="flex flex-col gap-[50px] my-[50px]">
        <div className="md:flex">
            <div ref={(el) => animateElementsRef.current.push(el)} className="animate flex-1">
                <Images src={Image1} alt={"Image représentant de la viande rouge coupée"} className={"h-[560px] w-full object-cover md:h-[400px] "} isLazy={true} />
            </div>
            <div ref={(el) => animateElementsRef.current.push(el)} className="animate flex-1">
                <Images src={Image2} alt={"Image représentant un ribs"} className={"h-[560px] w-full object-cover md:h-[400px] "} isLazy={true} />
            </div>
            <div ref={(el) => animateElementsRef.current.push(el)} className="animate flex-1">
                <Images src={Image3} alt={"Image représentant un homme en train de couper de la viande"} className={"h-[560px] w-full object-cover md:h-[400px] "} isLazy={true} />
            </div>
        </div>
        <div
          className="animate gap-[50px] flex flex-col"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <div className="max-w-[358px] px-2 m-auto md:max-w-7xl">
            <p className=" font-bold text-center text-[18px] lg:text-[24px]">
              Nous apportons le meilleur mélange de produits biologiques de la
              saison produits fermiers et artisanaux facilement à votre porte en
              cultivant et partenariat avec des fermes et des artisans locaux
              dans votre région.
            </p>
          </div>
          <div className="flex justify-center gap-3 ">
            <Images src={IconFacebbok} alt={"Icon de facebook"} isLazy={true} />
            <Images src={IconTwitter} alt={"Icon de twitter"} isLazy={true} />
            <Images src={IconInstagram} alt={"Icon de instagram"} isLazy={true} />
          </div>
        </div>
      </section>
    )
}

export default BottomPage;