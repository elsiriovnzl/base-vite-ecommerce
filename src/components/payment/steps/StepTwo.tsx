import React, { useId, useState } from "react";
import {
  FormControl,
  TextField,
  Alert,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { FaBlenderPhone } from "react-icons/fa";
import { BanksType, FormData, Quotes } from "./Types";
import { ProductsProps } from "../../../pages/Home";

interface Props {
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  Cart?: ProductsProps[];
  data: FormData;
}

const StepTwo = ({ handleChange, Cart }: Props) => {
  const [methodPay, setMethodPay] = useState<string | null>(null);
  const [quotesSelect, setQuotes] = useState<string | null>(null);

  const quotes: Quotes[] = [
    { id: useId(), value: 3 },
    { id: useId(), value: 6 },
    { id: useId(), value: 12 },
    { id: useId(), value: 24 },
    { id: useId(), value: 32 },
  ];

  const total = Cart?.reduce(
    (acc, obj) => acc + obj.products_total * (obj?.quantity ?? 0 ) * 100,
    0
  );

  return (
    <div className="h-full w-full flex gap-5 flex-col ">
      <div
        className={`flex h-full w-full items-center gap-6 p-6
        ${methodPay ? "hidden" : ""}`}
      >
        <p className="self-start text-2xl">Opciones de pago</p>
        <div className="flex  h-48  w-48 l items-center ">
          <div
            className="flex flex-col items-center justify-center h-48 w-48 border-black border rounded-3xl hover:bg-black hover:text-white cursor-pointer "
            onClick={() => setMethodPay("movil")}
          >
            <FaBlenderPhone size={40} />
            <p>Pago Movil</p>
          </div>
        </div>
      </div>

      {methodPay && (
        <FormControl variant="filled" className="flex gap-5 w-full h-full m-3 ">
          <div className="flex w-full">
            <TextField
              label="Nombre"
              id="filled-start-adornment"
              name="name"
              sx={{ m: 1, width: 300 }}
              variant="filled"
              onChange={() => handleChange}
            />
            <TextField
              label="CI"
              name="ci"
              id="filled-start-adornment"
              sx={{ m: 1, width: 300 }}
              variant="filled"
              type="text"
              onChange={() => handleChange}
            />
          </div>
          <div className="flex w-full">
            <TextField
              label="Direccion"
              name="address"
              id="filled-start-adornment"
              sx={{ m: 1, width: 300 }}
              variant="filled"
              onChange={() => handleChange}
            />
            <TextField
              label="Telefono"
              name="phone"
              id="filled-start-adornment"
              sx={{ m: 1, width: 300 }}
              variant="filled"
              type="tel"
              onChange={() => handleChange}
            />
          </div>
          <div className="flex w-full gap-4">
            <TextField
              label="Estados"
              name="state"
              onChange={() => handleChange}
              className="w-full"
            />
            <div className="flex flex-col">
              <label htmlFor="quotes" className="text-center">
                Cuotas
              </label>
              <select
                name="quotes"
                id="quotes"
                className="w-48 h-7 border border-gray-300 rounded-md"
                onChange={handleChange}
              >
                {quotes?.map((q) => (
                  <option
                    key={q.id}
                    value={q.value}
                    onClick={() => setQuotes(q.value.toString())}
                  >
                    {q.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full h-44 flex  gap-4 items-center bg-slate-300 rounded-md ">
            <div className="gap-2 flex flex-col w-full items-center">
              <span className="font-bold text-2xl ">Datos</span>
              <span>MOVIL EMPRISE SPA </span>
            </div>
            <div className="gap-2 flex flex-col w-full items-center">
              <span className="font-bold text-2xl ">Rif</span>
              <span className="text-xl">v-262964892</span>
            </div>
            <div className="">
              <span className="font-bold text-2xl w-full items-center">
                Banco Santander
              </span>
            </div>
            <div className="gap-2 flex flex-col w-full items-center">
              <span className="font-bold text-2xl">N° Cel</span>
              <span className="text-xl">414-825561855</span>
            </div>
          </div>
        </FormControl>
      )}

      <div className="h-auto w-64  flex flex-col items-center shadow-md rounded-xl justify-center bg-gray-200">
        <p className=" font-bold text-2xl"> {total} USD </p>
        <p className=" font-bold text-3xl">Bsf {total} </p>
      </div>
    </div>
  );
};

export default StepTwo;
