import React from "react";
import { referencesSlugTag, slugDataProps } from "./HeroTags";

const SlugViewCard = ({
  id,
  title,
  description,
  href,
  img,
  reference,
}: slugDataProps) => {
    return  reference === referencesSlugTag.tagOne ? ( <div className="col-span-4 row-span-8 bg-blue-500 relative">
    <img
      src="https://t3.ftcdn.net/jpg/02/74/78/84/360_F_274788454_OByz7N2WoFJEO1iM6GQKmMSdHvR5GiAU.jpg"
      alt="sd"
      className="w-full h-full"
    />
    <div
      className=" flex absolute top-3 right-0 h-full w-full items-center
        "
    >
      <div className="ml-8 flex flex-col gap-5  w-[500px]">
        <h2 className="text-5xl text-white">{title} </h2>
        <p className="font-italic text-gray-200">{description}</p>
        <button className="text-yellow-500  self-start">Ver</button>
      </div>
      <div className="h-full w-full">
        <img src={img} alt={title} className="w-auto h-full object-cover" />
      </div>
    </div>
  </div>) :  reference === referencesSlugTag.tagTwo ? (<div className=" relative col-span-3 row-span-4  flex h-full w-full">
      <img
        src="https://t3.ftcdn.net/jpg/02/74/78/84/360_F_274788454_OByz7N2WoFJEO1iM6GQKmMSdHvR5GiAU.jpg"
        alt="sd"
        className="w-full h-full"
      />
      <div className=" flex absolute top-0 right-0 h-full w-full items-center justify-center overflow-hidden ">
        <div className="ml-8 flex flex-col gap-5 m-3 h-auto  w-[600px]">
          <h2 className="text-4xl text-white">{title} </h2>
          <p className="font-italic text-gray-200">
         {description}  
          </p>
          <button className="text-yellow-500  self-start">Ver</button>
        </div>
        <div className="h-full w-full">
          <img
            src={img} alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>) : reference === referencesSlugTag.tagThree ?  ( <div className="relative col-span-2 row-span-4">
      <img
        src="https://t3.ftcdn.net/jpg/02/74/78/84/360_F_274788454_OByz7N2WoFJEO1iM6GQKmMSdHvR5GiAU.jpg"
        alt="sd"
        className="w-full h-full"
      />
      <div className=" flex absolute top-0 right-0 h-full w-full items-center justify-center overflow-hidden ">
        <div className="ml-8 flex flex-col gap-5 m-3 h-auto  w-[100px]">
          <h2 className="text-4xl text-white">{title} </h2>
          <p className="font-italic text-gray-200">
            {description}
          </p>
          <button className="text-yellow-500  self-start">Ver</button>
        </div>
        <div className="h-full w-full">
          <img
             src={img} alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>): reference === referencesSlugTag.tagFour  ? (<div className="col-span-2 row-span-4 col-start-5 row-start-5 relative">
      <img
        src="https://t3.ftcdn.net/jpg/02/74/78/84/360_F_274788454_OByz7N2WoFJEO1iM6GQKmMSdHvR5GiAU.jpg"
        alt="sd"
        className="w-full h-full"
      />
      <div className=" flex absolute top-0 p-2 mr-2 right-0 h-full w-full items-center justify-center overflow-hidden ">
        <div className="ml-8 flex flex-col gap-5 m-3 h-auto  w-[100px]">
          <h2 className="text-4xl text-white">{title} </h2>
          <p className="font-italic text-gray-200">
            {description}
          </p>
          <button className="text-yellow-500  self-start">Ver</button>
        </div>
        <div className="h-full w-full">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>) : reference === referencesSlugTag.tagFive  ? ( 
    <div className="col-span-3 row-span-4 col-start-7 row-start-5 relative">
      <img
        src="https://t3.ftcdn.net/jpg/02/74/78/84/360_F_274788454_OByz7N2WoFJEO1iM6GQKmMSdHvR5GiAU.jpg"
        alt="sd"
        className="w-full h-full"
      />
      <div className=" flex absolute top-0 right-0 h-full w-full items-center justify-center overflow-hidden ">
        <div className="ml-8 flex flex-col gap-5 m-3 h-auto  w-[600px]">
          <h2 className="text-4xl text-white">{title} </h2>
          <p className="font-italic text-gray-200">
           {description}
          </p>
          <button className="text-yellow-500  self-start">Ver</button>
        </div>
        <div className="h-full w-full">
          <img
            src="https://falabella.scene7.com/is/image/FalabellaCO/4921984_1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div> ) : null  
}
  

export default SlugViewCard;
