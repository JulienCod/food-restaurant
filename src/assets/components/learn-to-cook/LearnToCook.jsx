import Images from "../image/images";
import ImageLearn1 from "../../images/apprendre-1.webp";
import ImageLearn2 from "../../images/apprendre-2.webp";
import ImageLearn3 from "../../images/apprendre-3.webp";

const LearnToCook = ({ animateElementsRef }) => {
  return (
    <section className="max-w-7xl px-2 flex flex-col gap-[50px] m-auto">
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
        <p className="text-[18px] lg:text-[22px]">
          Découvrez l'art de la cuisine depuis chez vous avec nos cours en ligne
          ! Plongez dans un monde de saveurs et d'expertise culinaire, tout en
          perfectionnant vos talents de chef.
        </p>
      </div>
      <div className="m-auto flex flex-col gap-2 md:flex-row ">
        <div
          className="md:max-w-[calc(99%/3)] animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <Images
            src={ImageLearn1}
            alt={"Image représentant des hommes préparant des assiettes"}
            isLazy={true}
            className={"w-full h-full"}
            width={750}
          height={500}
          />
        </div>
        <div
          className=" md:max-w-[calc(99%/3)]   animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <Images
            src={ImageLearn2}
            alt={"Image représentant un four à bois en cour de chauffe"}
            isLazy={true}
            className={"w-full h-full"}
            width={750}
          height={500}
          />
        </div>
        <div
          className="md:max-w-[calc(99%/3)] animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          <Images
            src={ImageLearn3}
            alt={"Image représentant un ustensil de cuisine"}
            isLazy={true}
            className={"w-full h-full"}
            width={750}
          height={500}
          />
        </div>
      </div>
      <a
        className="underline font-bold text-center text-[22px] lg:text-[26px] animate"
        ref={(el) => animateElementsRef.current.push(el)}
        href="#"
      >
        En savoir plus
      </a>
    </section>
  );
};

export default LearnToCook;
