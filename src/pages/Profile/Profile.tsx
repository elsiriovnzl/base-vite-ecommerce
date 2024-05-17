import React, { useId } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const Profile = () => {
  const steps: string[] = ["Verificacion", "Bodega", "Despacho", "Entrega"];

  const data = [
    {
      products: [
        {
          id: useId(),
          productName: "Zapatillas",
          price: 250,
          stock: 4,
        },
        {
          id: useId(),
          productName: "mochilas",
          price: 230,
          stock: 2,
        }
      ],
      orderId: 1,
      status: "Bodega",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Remeras",
          price: 210,
          stock: 4,
        },
        {
          id: useId(),
          productName: "Pantalones",
          price: 100,
          stock: 2,
        }
      ],
      orderId: 2,
      status: "Verificacion",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Gorras",
          price: 120,
          stock: 4,
        },
        {
          id: useId(),
          productName: "Aritos",
          price: 30,
          stock: 20,
        }
      ],
      orderId: 3,
      status: "Verificacion",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Remeras Anime",
          price: 250,
          stock: 4,
        },
        {
          id: useId(),
          productName: "Remeras Naruto",
          price: 230,
          stock: 2,
        }
      ],
      orderId: 4,
      status: "Entrega",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Ojotas",
          price: 320,
          stock: 9,
        },
        {
          id: useId(),
          productName: "Cintos",
          price: 50,
          stock: 80,
        }
      ],
      orderId: 5,
      status: "Despacho",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Ojotas",
          price: 320,
          stock: 9,
        },
        {
          id: useId(),
          productName: "Cintos",
          price: 50,
          stock: 80,
        }
      ],
      orderId: 6,
      status: "Despacho",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Ojotas",
          price: 320,
          stock: 9,
        },
        {
          id: useId(),
          productName: "Cintos",
          price: 50,
          stock: 80,
        }
      ],
      orderId: 7,
      status: "Despacho",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Ojotas",
          price: 320,
          stock: 9,
        },
        {
          id: useId(),
          productName: "Cintos",
          price: 50,
          stock: 80,
        }
      ],
      orderId: 8,
      status: "Despacho",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Ojotas",
          price: 320,
          stock: 9,
        },
        {
          id: useId(),
          productName: "Cintos",
          price: 50,
          stock: 80,
        }
      ],
      orderId: 9,
      status: "Despacho",
    },
    {
      products: [
        {
          id: useId(),
          productName: "Ojotas",
          price: 320,
          stock: 9,
        },
        {
          id: useId(),
          productName: "Cintos",
          price: 50,
          stock: 80,
        }
      ],
      orderId: 10,
      status: "Despacho",
    }
  ]

  return (
    <>
      <div className="text-center border-gray-400">
        <h1 className="text-black text-3xl">Mis Ordenes</h1>
      </div>

      <div className="w-[100vw] h-full pt-[100px] flex ">
        <div className="flex flex-col items-start p-10 space-y-7 border-2 border-gray-400">
          <button className=" bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Mis Ordenes
          </button>
          <button className="w-full bg-yellow-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
            Configuración
          </button>
        </div>
        <div className="flex flex-col items-start p-10 space-y-7 border-2 border-gray-400 w-full">
          {data.map((order) => (
            <div key={order.orderId} className="flex w-full border items-center">
              <div className="flex-1 p-4 w-full">
                {order.products.map((e) => (
                  <div>
                    <span className="mr-2">{e.productName}</span> 
                    <span className="mr-2">${e.price}</span>
                    
                  </div>
                ))}
              </div>
              <Stepper
                activeStep={steps.indexOf(order.status)}
                alternativeLabel
                className="flex-1"
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
