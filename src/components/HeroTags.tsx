import React, { useId, useState } from "react";
import SlugViewCard from "./SlugViewCard";

type Props = {};

export interface slugDataProps {
  id: string;
  title: string;
  description: string;
  href: string;
  img: string;
  reference: number;
}

export enum referencesSlugTag {
  tagOne = 1,
  tagTwo = 2,
  tagThree = 3,
  tagFour = 4,
  tagFive = 5,
}

const HeroTags = (props: Props) => {
  const [slugData, setSlugData] = useState<slugDataProps[]>([
    {
      id: useId(),
      title: "Lorem, ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      href: `product/headsets`,
      img: "https://www.xtremepc.com.mx/cdn/shop/products/60ed1b79-6682-4e03-b65e-552a76723d01_800x.png?v=1692746126",
      reference: 1,
    },
    {
      id: useId(),
      title: "Lorem, ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      href: `product/headsets`,
      img: "https://i.ebayimg.com/images/g/bOUAAOSwLOtkxQnT/s-l400.png",
      reference: 2,
    },
    {
      id: useId(),
      title: "Lorem",
      description: "Lorem ipsum dolor sit amet consectetur",
      href: `product/headsets`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bBk-_6ikOmMGXuWgp2s9MtcpfewTPcJRu8nk5B4nZFk8YiNDhjV8H-K2AF-UKdOjaUg&usqp=CAU",
      reference: 3,
    },
    {
      id: useId(),
      title: "Lorem",
      description: "Lorem ipsum dolor sit amet consectetur",
      href: `product/headsets`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bBk-_6ikOmMGXuWgp2s9MtcpfewTPcJRu8nk5B4nZFk8YiNDhjV8H-K2AF-UKdOjaUg&usqp=CAU",
      reference: 4,
    },
    {
      id: useId(),
      title: "Lorem, ipsum dolor",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      href: `product/headsets`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bBk-_6ikOmMGXuWgp2s9MtcpfewTPcJRu8nk5B4nZFk8YiNDhjV8H-K2AF-UKdOjaUg&usqp=CAU",
      reference: 5,
    },
  ]);

  return (
    <div className=" flex w-full items-center justify-center h-auto p-3 m-3">
      <div className="grid grid-cols-9 grid-flow-row grid-rows-8 gap-4 w-[80%] h-full  flex-wrap md:h-auto lg:hidden">
        {slugData
          .map((slug) => (
            <SlugViewCard
              key={slug.id}
              id={slug.id}
              title={slug.title}
              description={slug.description}
              href={slug.href}
              img={slug.img}
              reference={slug.reference}
            />
          ))}
      </div>
     
    </div>
  );
};

export default HeroTags;
