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
}

const Home = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

 /*  const [products, setProducts] = useState<ProductsProps[]>([
    {
      product_name: "Dr",
      product_description:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      product_category: "Home Goods",
      product_price: 348.56,
      product_quantity: 112,
      product_brand: "Thoughtbridge",
      product_rating: 4.9,
      product_color: "Aquamarine",
      product_size: "Small",
      product_image_url:
        "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg",
    },
    {
      product_name: "Ms",
      product_description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      product_category: "Home Goods",
      product_price: 22.12,
      product_quantity: 126,
      product_brand: "Kaymbo",
      product_rating: 4.0,
      product_color: "Orange",
      product_size: "Small",
      product_image_url:
      "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg",
    },
    {
      product_name: "Ms",
      product_description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      product_category: "Beauty",
      product_price: 220.01,
      product_quantity: 694,
      product_brand: "Cogibox",
      product_rating: 3.4,
      product_color: "Teal",
      product_size: "Medium",
      product_image_url:
      "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
    {
      product_name: "Dr",
      product_description:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      product_category: "Electronics",
      product_price: 10.74,
      product_quantity: 830,
      product_brand: "Kamba",
      product_rating: 4.1,
      product_color: "Teal",
      product_size: "Medium",
      product_image_url:
      "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
    {
      product_name: "Rev",
      product_description:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      product_category: "Beauty",
      product_price: 305.75,
      product_quantity: 444,
      product_brand: "Photospace",
      product_rating: 1.0,
      product_color: "Red",
      product_size: "XL",
      product_image_url:
      "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
    {
      product_name: "Dr",
      product_description:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      product_category: "Electronics",
      product_price: 202.06,
      product_quantity: 262,
      product_brand: "Realcube",
      product_rating: 3.3,
      product_color: "Violet",
      product_size: "XL",
      product_image_url:
      "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
    {
      product_name: "Rev",
      product_description:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      product_category: "Clothing",
      product_price: 294.36,
      product_quantity: 756,
      product_brand: "Flashdog",
      product_rating: 1.4,
      product_color: "Aquamarine",
      product_size: "Medium",
      product_image_url:
        "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
    {
      product_name: "Ms",
      product_description:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      product_category: "Toys",
      product_price: 276.65,
      product_quantity: 681,
      product_brand: "Kazio",
      product_rating: 3.1,
      product_color: "Maroon",
      product_size: "XXL",
      product_image_url:
        "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
    {
      product_name: "Ms",
      product_description: "Fusce consequat. Nulla nisl. Nunc nisl.",
      product_category: "Toys",
      product_price: 734.61,
      product_quantity: 51,
      product_brand: "Twitterbeat",
      product_rating: 3.0,
      product_color: "Indigo",
      product_size: "Medium",
      product_image_url:
        "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
    {
      product_name: "Honorable",
      product_description:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      product_category: "Home Goods",
      product_price: 280.71,
      product_quantity: 428,
      product_brand: "Zoovu",
      product_rating: 1.7,
      product_color: "Maroon",
      product_size: "Large",
      product_image_url:
      "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-PRO-MAX-model-1.jpg"
    },
  ]); */

  return (
    /* CONTAINER */
    <div className="w-full flex flex-col gap-5 ">
      <div className="  flex flex-col ">
        <SubNavBar />
        <NavBar />
      </div>
      <Slider />
      {/* INFO BUY  */}
      <div className=" flex gap-2">
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
          <Footer/>
    </div>
    /* CONTAINER */
  );
};

export default Home;
