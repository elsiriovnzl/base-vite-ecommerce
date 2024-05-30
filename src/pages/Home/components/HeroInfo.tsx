import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { FiHeart } from 'react-icons/fi'

type Props = {}

const HeroInfo = (props: Props) => {
  return (
    <div className=' w-full h-full flex items-center justify-center '>
        <div className=" w-[80%] h-uto mt-4 flex justify-around flex-wrap gap-7 ">
            <div className="flex items-center m-2 flex-1 h-auto shadow-xl ">
                <div className="m-5">
                    {/* <CgSmartHomeRefrigerator size={50}/> */}
                    
                    <RiShoppingCartLine size={50}/>

                </div>
                <div className="">
                    <h1 className='font-bold'>COMO COMPRAR A CREDITO </h1>
                    <p>Selecciona los productos</p>
                </div>
            </div>
            <div className="flex items-center m-2 flex-1 h-auto shadow-xl ">
                <div className="m-5">
                <CiCreditCard1 size={50}/>

                </div>
                <div className="">
                    <h1 className='font-bold'>CARRITO DE COMPRA </h1>
                    <p>Verificas tu carrito, luego proceder a realizar el pago, Listo!</p>
                </div>
            </div> <div className="flex items-center m-2 flex-1 h-auto shadow-xl p-4">
                <div className="m-5">
                <BsTruck size={50}/>
                </div>
                <div className="">
                    <h1 className='font-bold'>PROCESAMIENTO Y ENVIO</h1>
                    <p>Luego de que se confirme el pago, su orden va a estar en proceso para el despacho a su hogar</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroInfo
