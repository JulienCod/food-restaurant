const MenuCard = ( { itemsMenu, animateElementsRef }) =>{

    return (
        <section className="px-2 py-8 md:px-4 max-w-7xl m-auto">
        <h2
          className="text-[32px] underline text-center md:text-[40px] animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          Notre menu
        </h2>
        <h3
          className="text-[24px] text-center pb-[35px] md:text-[32px] animate"
          ref={(el) => animateElementsRef.current.push(el)}
        >
          Délice du chef
        </h3>
        <div className="flex flex-col gap-8 md:flex-wrap md:flex-row  ">
          {itemsMenu.length <= 0
            ? null
            : itemsMenu.map((item, index) => (
                <article
                  key={index}
                  className=" min-w-[310px] flex flex-col gap-[28px] items-center animate md:flex-[350px] lg:min-w-[400px]"
                  ref={(el) => animateElementsRef.current.push(el)}
                >
                  <h4 className="md:text-[20px] lg:text-[28px] my-[34px] mx-auto">
                    {item.title + " " + item.price + " €"}
                  </h4>
                  <div className="max-w-[378px] min-h-[50px] flex-1 ">
                    <p className="md:text-[18px] lg:text-[22px] text-center">{item.recipe}</p>
                  </div>
                </article>
              ))}
        </div>
      </section>
    )
}

export default MenuCard;