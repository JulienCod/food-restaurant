import Images from "../image/images";

const ArticleBlog = ({ articles, animateElementsRef }) => {
  return (
    <section className="max-w-5xl md:flex px-2 md:py-8 m-auto">
      {articles.length <= 0
        ? null
        : articles.map((article, index) => (
            <article
              ref={(el) => animateElementsRef.current.push(el)}
              className={`text-center flex flex-col md:flex-1 px-2 gap-8 md:gap-0  my-8 md:px-0 animate  ${
                index === 1 && "md:flex-col-reverse"
              }`}
              key={index}
            >
              <Images
                src={article.img}
                alt={article.alt}
                className={
                  "h-[350px] w-[350px] object-cover m-auto md:m-0 md:w-full"
                }
                isLazy={true}
              />
              <div className="flex flex-col gap-2 pb-3 md:min-h-[350px]">
                <h2 className="max-w-[362px] m-auto text-[32px] lg:text-[40px]">
                  {article.titleH2}
                </h2>
                <h3 className="max-w-[362px] m-auto text-[24px] lg:text-[32px]">
                  {article.titleH3}
                </h3>
                <div className="flex flex-col gap-8">
                  <p className="max-w-[362px] m-auto text-[18px]">
                    {article.content}
                  </p>
                </div>
                <a
                  className="underline text-[22px] font-bold hover:cursor-pointer"
                  href="#"
                >
                  En savoir plus
                </a>
              </div>
            </article>
          ))}
    </section>
  );
};

export default ArticleBlog;
