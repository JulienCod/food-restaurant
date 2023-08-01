import Images from "../image/images";

const IconDelivery = ({ icons, animateElementsRef}) => {
  return (
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
                    <Images src={icon.svg} alt={`svg ${icon.text}`} className={"max-w-[48px]"} isLazy={true} />

                    <p className="uppercase text-[16px] lg:text-[22px] ">
                      {icon.text}
                    </p>
                  </article>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconDelivery;
