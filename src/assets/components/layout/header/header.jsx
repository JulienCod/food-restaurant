import logoRestaurannt from "../../../images/logo-restaurant.webp";
import logoMenuBurger from "../../../svg/menu-burger.svg";
import Images from "../../image/images";

const Header = () => {
  return (
    <header className="relative top-0 flex items-center justify-between p-4 max-w-7xl m-auto ">
      <Images
        src={logoRestaurannt}
        alt={"logo du site food restaurant"}
        className={"h-[45px] w-[50px] md:h-[61.5px] md:w-[75px]"}
        isLazy={false}
        width={75}
        height={62}
      />
      <div className="mx-4 ">
        <Images
          src={logoMenuBurger}
          alt={"image menu burger"}
          className={"z-10 md:h-[40px] hover:cursor-pointer "}
          isLazy={false}
          width={50}
          height={50}
        />
      </div>
    </header>
  );
};
export default Header;
