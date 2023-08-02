import logoRestaurannt from "../../../images/logo-restaurant.webp";
import logoMenuBurger from "../../../svg/menu-burger.svg";
import Images from "../../image/images";

const Header = () => {
    return (
        <header
        className="relative top-0 flex items-center justify-between p-4 max-w-7xl m-auto "
        // ref={(el) => animateElementsRef.current.push(el)}
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
    )
}
export default Header;