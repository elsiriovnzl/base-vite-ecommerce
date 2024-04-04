import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useId,
  useState,
} from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../hooks";
import { cart } from "../redux/Products/CartSlice";
import { Link, useLocation } from "react-router-dom";
import {
  currentPageActive,
  postCurrentPage,
} from "../redux/Products/currentPage/CurrentPageSlice";

type Props = {
  openCartFn: Dispatch<SetStateAction<boolean>>;
  openCart: boolean;
};

const NavBar = ({ openCart, openCartFn }: Props) => {
  const history = useLocation();
  const page = useAppSelector(currentPageActive);
  const dispatch = useAppDispatch();
  const [hrefLabel, setHrefLabel] = useState<
    { id: string; name: string; href: string }[]
  >([
    { id: useId(), name: "Inicio", href: "/" },
    { id: useId(), name: "Productos", href: "/Productos" },
  ]);
  const Cart = useAppSelector(cart);

  useEffect(() => {
    history.pathname && dispatch(postCurrentPage(history.pathname));
  }, [history?.pathname]);

  return (
    <div className="flex items-center  justify-around sm:pl-4 w-full h-[100px]  border-b-2 ">
      <div className="w-[180px] h-[90px]  ">
        <Link to={"/"}>
          <img
            className="-w-full h-full"
            src="https://i.pinimg.com/originals/b7/25/fb/b725fb67a8f353788f0c5882699b682a.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className=" flex gap-10 m-4  ">
        <ul className="flex gap-10 items-center font-semibold md:hidden">
          {hrefLabel.map((label, idx) => (
            <Link to={label.href}>
              <li
                key={idx}
                className={`cursor-pointer  ${
                  label.href === page ? " border-b-4 border-yellow-300" : ""
                }`}
                id={label.id}
              >
                {label.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-6 items-center">
          <div className="">
            <CgProfile cursor={"pointer"} size={30} />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => openCartFn(!openCart)}
          >
            <FiShoppingCart size={30} />
            <div className="absolute -top-2 -right-3 w-6 h-6 bg-yellow-500 text-center items-center  rounded-full">
              <span className="font-bold select-none">{Cart.length}</span>
            </div>
          </div>
          <div className=" hidden md:flex">
            <RxHamburgerMenu size={30} cursor={"pointer"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
