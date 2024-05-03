import React, { ChangeEvent, useEffect, useState } from "react";
import { getAllProduct, getProducts } from "../../redux/Products/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import ProductCards from "./components/ProductCards";

const Products = () => {
  const products = useAppSelector(getProducts);
  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setSearch("");
    setSearch(e.target.value);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-full h-full flex justify-between gap-5 p-4  ">
        <div className="flex w-[300px] h-full p-2 shadow-xl">
          <div className="flex flex-col gap-6 items-center ">
            <div className="flex flex-col h-[30px] w-full">
              <input
                type="text"
                className="border border-spacing-2 w-full"
                placeholder="Buscar"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col h-[60px] w-full">
              <label htmlFor="">Categorias</label>
              <select name="" id="">
                <option value="">lavadora</option>
                <option value="">electrodomesttico</option>
                <option value="">linea blanca</option>
                <option value="">linea marron</option>
              </select>
            </div>
            <div className="flex flex-col h-[60px] w-full">
              <label htmlFor="">Marcas</label>
              <select name="" id="">
                <option value="">lavadora</option>
                <option value="">electrodomesttico</option>
                <option value="">linea blanca</option>
                <option value="">linea marron</option>
              </select>
            </div>
            <div className="flex flex-col h-[60px] w-full">
              <label htmlFor="">Precio</label>
              <input type="range" />
            </div>
            <button className="p-3 bg-yellow-600 text-white">
              Aplicar filtros
            </button>
          </div>
        </div>
        <div className="flex  h-full  w-full  flex-wrap   gap-3  justify-center overflow-y-auto ">
          {products
            .filter((product) =>
              !search
                ? product
                : product.products_tiltle
                    .toLowerCase()
                    .includes(search.toLowerCase())
            )
            .map((product) => (
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
  );
};

export default Products;
