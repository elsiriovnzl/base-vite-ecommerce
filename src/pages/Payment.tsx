import React, { useState } from "react";

import { FaCcPaypal, FaCheckCircle, FaCreditCard } from "react-icons/fa";
import HorizontalLinearStepper from "../components/GenericStep";
import {
  Autocomplete,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

export interface StepProps {
  id: number;
  title: string;
  component: JSX.Element;
  status?: boolean;
}

const Payment = () => {
  const estadosVenezuela = [
    "Amazonas",
    "Anzoátegui",
    "Apure",
    "Aragua",
    "Barinas",
    "Bolívar",
    "Carabobo",
    "Cojedes",
    "Delta Amacuro",
    "Falcón",
    "Guárico",
    "Lara",
    "Mérida",
    "Miranda",
    "Monagas",
    "Nueva Esparta",
    "Portuguesa",
    "Sucre",
    "Táchira",
    "Trujillo",
    "Vargas",
    "Yaracuy",
    "Zulia",
  ];
  const [steps, setSteps] = useState<StepProps[]>([
    {
      id: 1,
      title: "Tipos de pago",
      component: (
        <div className="flex h-full w-full  shadow-md flex-col  items-center justify-center">
          <div className="flex  h-full w-full items-center  justify-evenly ">
            <span className="flex flex-col items-center justify-center  h-64 w-64 rounded-lg border-yellow-700 border  text-xl">
              <FaCreditCard size={80} />
              Credito
            </span>
            <span className="flex flex-col items-center justify-center  h-64 w-64 rounded-lg border-yellow-700 border text-xl">
              <FaCcPaypal size={80} />
              Pago Unico
            </span>
          </div>
          <div className="flex  flex-col  h-[200px] w-full items-center p-4 gap-3">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="politicas" className="w-7 h-5" />
              <label htmlFor="politicas" id="politicas">
                Aceptas comprar en nuestra plataforma despues de haber leido los
                terminos de pago, en caso de que no pulsa aqui,
                <a href="#" className="text-blue-900  decoration-clone">
                  Politicas de Compra
                </a>
              </label>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "test",
      component: (
        <div className="h-full w-full flex gap-5 items-center">
          <div className=" flex w-full flex-col">
            <div>
              <FormControl
                sx={{ m: 1, width: 600 }}
                variant="filled"
                className="flex gap-5 w-full h-full"
              >
                <TextField
                  label="Nombre"
                  id="filled-start-adornment"
                  sx={{ m: 1, width: 600 }}
                  variant="filled"
                />
                <TextField
                  label="CI"
                  id="filled-start-adornment"
                  sx={{ m: 1, width: 600 }}
                  variant="filled"
                  type="text"
                />
                <TextField
                  label="Direccion"
                  id="filled-start-adornment"
                  sx={{ m: 1, width: 600 }}
                  variant="filled"
                />
                <TextField
                  label="Telefono"
                  id="filled-start-adornment"
                  sx={{ m: 1, width: 600 }}
                  variant="filled"
                  type="tel"
                />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={estadosVenezuela}
                  sx={{ width: 600 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Estados" />
                  )}
                />

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[3, 6, 12, 24, 32]}
                  sx={{ width: 600 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Cuotas" />
                  )}
                />
              </FormControl>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "test",
      component: (
        <div className="h-full w-full flex gap-5 items-center">
          <div className=" flex w-full flex-col items-center justify-center gap-2">
            <span className="text-3xl">
              Pago exitoso
              <FaCheckCircle size={200} color="green" />
            </span>
          </div>
        </div>
      ),
    },
  ]);

  return (
    <div
      className=" w-full h-full overflow-y-auto  flex items-center justify-center
    p-4"
    >
      <div className="flex w-[70%] h-full items-center  ">
        <div className="flex h-full w-full flex-col p-2 gap-2  overflow-y-auto">
          <div className="flex  h-[150px] w-full  justify-between p-2 items-center shadow-xl">
            <div className="flex w-[200px] h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAw7JZPeTwQ8uhHsDugDSpyMRBUVkx8Vs7ZA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="flex flex-1 h-full justify-between items-center w-full p-3">
              <span>titulo</span>
              <b className="text-3xl">200$</b>
            </div>
          </div>
        </div>

        <HorizontalLinearStepper steps={steps} />
      </div>
    </div>
  );
};

export default Payment;
