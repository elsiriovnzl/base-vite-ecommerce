import React from 'react'
import { CgMenuBoxed, CgSmartHomeRefrigerator } from 'react-icons/cg'
import { FiHeart } from 'react-icons/fi'

type Props = {}

const HeroInfo = (props: Props) => {
  return (
    <div className=' w-full h-full flex items-center justify-center  '>
        <div className=" w-[80%] h-uto mt-4 flex justify-around flex-wrap gap-7">
            <div className="flex items-center m-2 flex-1 h-auto ">
                <div className="m-5">
                    <CgSmartHomeRefrigerator size={50}/>
                </div>
                <div className="">
                    <h1 className='font-bold'>Lorem ipsum dolor sit </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore odit dicta delectus, porro rem corrupti sit totam, voluptatum, repellendu</p>
                </div>
            </div>
            <div className="flex items-center m-2 flex-1 h-auto ">
                <div className="m-5">
                    <CgMenuBoxed size={50}/>
                </div>
                <div className="">
                    <h1 className='font-bold'>Lorem ipsum dolor sit </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore odit dicta delectus, porro rem corrupti sit totam, voluptatum, repellendu</p>
                </div>
            </div> <div className="flex items-center m-2 flex-1 h-auto">
                <div className="m-5">
                    <FiHeart size={50}/>
                </div>
                <div className="">
                    <h1 className='font-bold'>Lorem ipsum dolor sit </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore odit dicta delectus, porro rem corrupti sit totam, voluptatum, repellendu</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroInfo