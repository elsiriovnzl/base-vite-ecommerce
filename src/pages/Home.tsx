import React, { useEffect, useState } from "react";
import SubNavBar from "../components/SubNavBar";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import HeroInfo from "../components/HeroInfo";
import HeroTags from "../components/HeroTags";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
import { getAllProduct, getProducts } from "../redux/Products/ProductSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import SliderCart from "../components/SliderCart";

export interface ProductsProps {
  products_id: number;
  products_tiltle: string;
  products_description: string;
  product_category?: string;
  products_total: number;
  stock: number;
  product_brand?: string;
  product_rating?: number;
  color_id?: number;
  product_size?: string;
  products_img1: string;
  categories_id?: number;
  product_iva?: number;
  quantity?: number;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    /* CONTAINER */
    <div className=" w-full flex flex-col gap-5 overflow-x-hidden">
      <Slider />
      {/* INFO BUY  */}
      <div className="flex gap-2">
        <HeroInfo />
      </div>
      {/* PRODUCTS OFFERT SELLERS */}
      <div className=" flex gap-2">
        <HeroTags />
      </div>
      <div className=" flex flex-col items-center  ">
        <div className=" flex flex-col w-[80%] h-auto  ">
          <div className="flex h-24 w-full  items-center justify-between pl-10 pr-10 ">
            <h3 className="text-2xl font-semibold">Top Productos</h3>
            <div className="text-2xl font-semibold">categorias</div>
          </div>
          <div className="flex  h-full w-full  flex-wrap p-2  gap-3 flex-grow justify-center ">
            {products?.map((product) => (
              <ProductCards
                key={product.products_id}
                id={product.products_id}
                name={product.products_tiltle}
                description={product.products_description}
                category={product.categories_id}
                price={product.products_total}
                quantity={product.stock}
                brand={product.product_brand}
                rating={product.product_rating}
                color={product.color_id}
                size={product.product_size}
                img={product.products_img1}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    /* CONTAINER */
  );
};

export default Home;
