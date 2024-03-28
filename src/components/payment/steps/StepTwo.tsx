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

  const banks: BanksType[] = [
    { id: useId(), nombre: "Banco de Venezuela, S.A.C.A.", code: "0102" },
    { id: useId(), nombre: "Venezolano de Crédito", code: "0104" },
    { id: useId(), nombre: "Mercantil", code: "0105" },
    { id: useId(), nombre: "Provincial", code: "0108" },
    { id: useId(), nombre: "Bancaribe", code: "0114" },
    { id: useId(), nombre: "Exterior", code: "0115" },
    { id: useId(), nombre: "Occidental de Descuento", code: "0116" },
    { id: useId(), nombre: "Banco Caroní", code: "0128" },
    { id: useId(), nombre: "Banesco", code: "0134" },
    { id: useId(), nombre: "Banco Plaza", code: "0138" },
    { id: useId(), nombre: "BFC Banco Fondo Común", code: "0151" },
    { id: useId(), nombre: "100% Banco", code: "0156" },
    { id: useId(), nombre: "Del Sur", code: "0157" },
    { id: useId(), nombre: "Banco del Tesoro", code: "0163" },
    { id: useId(), nombre: "Banco Agrícola de Venezuela", code: "0166" },
    { id: useId(), nombre: "Bancrecer", code: "0168" },
    { id: useId(), nombre: "Mi Banco", code: "0169" },
    { id: useId(), nombre: "Banco Activo", code: "0171" },
    { id: useId(), nombre: "Bancamiga", code: "0172" },
    { id: useId(), nombre: "Banplus", code: "0174" },
    { id: useId(), nombre: "Bicentenario del Pueblo", code: "0175" },
    { id: useId(), nombre: "Banfanb", code: "0177" },
    { id: useId(), nombre: "BNC Nacional de Crédito", code: "0191" },
  ];

  const quotes: Quotes[] = [
    { id: useId(), value: 3 },
    { id: useId(), value: 6 },
    { id: useId(), value: 12 },
    { id: useId(), value: 24 },
    { id: useId(), value: 32 },
  ];

  const total = Cart?.reduce(
    (acc, obj) => acc + obj.products_total * (obj?.quantity ?? 0),
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

          <div className="flex w-full">
            <select className="w-full p-3 m-2 bg-gray-300 text-black rounded-sm">
              {banks.map((bank) => (
                <option key={bank.id} value={bank.code}>
                  {bank.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full flex flex-col gap-4">
          <TextField
              label="Cedula de pago ej: v26333304-2"
              name="state"
              onChange={() => handleChange}
              className="w-full"
            />
          <TextField
              label="Codigo de pago ej: 123094732"
              name="state"
              onChange={() => handleChange}
              className="w-full"
            />
          </div>
        </FormControl>
      )}

      <div className="h-auto w-64  flex flex-col items-center shadow-md rounded-xl justify-center bg-gray-200">
        <p className=" font-bold text-2xl"> {total} USD </p>
        <p className=" font-bold text-2xl">Bsf {total}  </p>
      </div>
    </div>
  );
};

export default StepTwo;
