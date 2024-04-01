import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useId,
  useState,
} from "react";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { cart } from "../redux/Products/CartSlice";
import { Link } from "react-router-dom";
import {
  currentPageActive,
  postCurrentPage,
} from "../redux/Products/currentPage/CurrentPage";

type Props = {
  openCartFn: Dispatch<SetStateAction<boolean>>;
  openCart: boolean;
};

const NavBar = ({ openCart, openCartFn }: Props) => {
  const page = useAppSelector(currentPageActive);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<string | null>("/");
  const [hrefLabel, setHrefLabel] = useState<
    { id: string; name: string; href: string }[]
  >([
    { id: useId(), name: "Inicio", href: "/" },
    { id: useId(), name: "Productos", href: "/Productos" },
  ]);
  const Cart = useAppSelector(cart);

  useEffect(() => {
    page && dispatch(postCurrentPage(page));
  }, [page]);

  return (
    <div className="flex justify-around w-full h-[100px] m-3  ">
      <Link to={"/"}>
        <div className="w-[180px] h-[100px]">
          <img
            className="-w-full h-full"
            src="https://i.pinimg.com/originals/b7/25/fb/b725fb67a8f353788f0c5882699b682a.jpg"
            alt=""
          />
        </div>
      </Link>
      <div className="flex gap-10 m-4">
        <ul className="flex gap-10 items-center font-semibold">
          {hrefLabel.map((label, idx) => (
            <Link to={label.href}>
              <li
                key={idx}
                className={`cursor-pointer  ${
                  label.name === currentPage
                    ? " border-b-4 border-yellow-300"
                    : ""
                }`}
                id={label.id}
                onClick={() => setCurrentPage(label.name)}
              >
                {label.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
