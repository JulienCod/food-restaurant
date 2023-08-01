const MenuCard = ( { itemsMenu, animateElementsRef }) =>{

    return (
        <section className="px-2 py-8 md:px-4">
        <h2
          className="text-[32px] underline text-center md:text-[40px] lg:text-[50px] animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          Notre menu
        </h2>
        <h3
          className="text-[24px] text-center pb-[35px] md:text-[32px] lg:text-[42px] animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          Délice du chef
        </h3>
        <div className="flex flex-col gap-8 md:flex-wrap md:flex-row max-w-5xl m-auto ">
          {itemsMenu.length <= 0
            ? null
            : itemsMenu.map((item, index) => (
                <article
                  key={index}
                  className=" min-w-[310px] md:flex-[350px] flex flex-col gap-[28px]text-center animate"
                  ref={(el) => animateElementsRef.current.push(el)}
                >
                  <h4 className="md:text-[20px] lg:text-[28px] my-[34px] mx-auto">
                    {item.title + " " + item.price + " €"}
                  </h4>
                  <div className="max-w-[378px] min-h-[50px] mx-auto flex ">
                    <p className="md:text-[18px] lg:text-[24px]">{item.recipe}</p>
                  </div>
                </article>
              ))}
        </div>
      </section>
    )
}

export default MenuCard;