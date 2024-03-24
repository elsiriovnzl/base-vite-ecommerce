import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import { FormControl, TextField, Alert } from "@mui/material";

import { MdOutlineErrorOutline } from "react-icons/md";
import { FaCheckCircle, FaCreditCard } from "react-icons/fa";

import { ProductsProps } from "../pages/Home";
import { cart } from "../redux/Products/CartSlice";
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";

export interface StepProps {
  id: number;
  title: string;
  component: (
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleClickButton: (
      e: React.MouseEvent<HTMLButtonElement>,
      type: string
    ) => void,
    data: FormData,
    cart: ProductsProps[]
  ) => JSX.Element;
  status?: boolean;
}
type ErrorProps = { message: string; status: boolean } | null;
type FormData = {
  name: string;
  ci: string;
  address: string;
  phone: string;
  state: string;
  quotes: number;
  polity: boolean;
  credit: boolean;
};

export default function HorizontalLinearStepper() {
  const [steps, setSteps] = React.useState<StepProps[]>([
    {
      id: 1,
      title: "Tipos de pago",
      component: (
        handleChange,
        handleCheckboxChange,
        handleClickButton,
        data
      ) => {
        return (
          <div className="flex h-full w-full  shadow-md flex-col  items-center justify-center">
            <div className="flex  h-full w-full items-center  justify-evenly ">
              <button
                name="credit"
                onClick={(e) => handleClickButton(e, "credit")}
                className={`flex flex-col items-center justify-center  h-64 w-64 rounded-lg ${
                  data.credit ? "bg-slate-600 text-white" : ""
                } border-yellow-700 border text-xl hover:bg-slate-600
                 hover:text-white cursor-pointer`}
              >
                <FaCreditCard size={80} />
                Credito
              </button>
            </div>
            <div className="flex  flex-col  h-[200px] w-full items-center p-4 gap-3">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="politicas"
                  className="w-7 h-5"
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="politicas" id="politicas">
                  Aceptas comprar en nuestra plataforma despues de haber leido
                  los terminos de pago, en caso de que no pulsa aqui,
                  <a href="#" className="text-blue-900  decoration-clone">
                    Politicas de Compra
                  </a>
                </label>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      id: 2,
      title: "test",
      component: (handleChange) => {
        return (
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
                    name="name"
                    sx={{ m: 1, width: 600 }}
                    variant="filled"
                    onChange={handleChange}
                  />
                  <TextField
                    label="CI"
                    name="ci"
                    id="filled-start-adornment"
                    sx={{ m: 1, width: 600 }}
                    variant="filled"
                    type="text"
                    onChange={handleChange}
                  />
                  <TextField
                    label="Direccion"
                    name="address"
                    id="filled-start-adornment"
                    sx={{ m: 1, width: 600 }}
                    variant="filled"
                    onChange={handleChange}
                  />
                  <TextField
                    label="Telefono"
                    name="phone"
                    id="filled-start-adornment"
                    sx={{ m: 1, width: 600 }}
                    variant="filled"
                    type="tel"
                    onChange={handleChange}
                  />

                  <TextField
                    label="Estados"
                    name="state"
                    onChange={handleChange}
                  />

                  <TextField
                    label="Cuotas"
                    name="quotes"
                    onChange={handleChange}
                  />
                </FormControl>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      id: 3,
      title: "test",
      component: (
        handleChange,
        handleCheckboxChange,
        handleClickButton,
        data,
        cart
      ) => {
        const total = cart.reduce(
          (acc, obj) => acc + obj.products_total * (obj.quantity ?? 0),
          0
        );
        const division = cart.reduce(
          (acc, obj) => acc + obj.products_total / data?.quotes,
          0
        );
        return (
          <div className="h-full w-full flex gap-5 items-center">
            <div className=" flex w-full flex-col items-center justify-center gap-4">
              <div className=" w-[200px] h-[200px]  flex items-center justify-center hover:bg-black/30 cursor-pointer">
                <img
                  src="data:image/png;base64,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"
                  className="w-full h-full object-contain border border-red-300"
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-3xl">
                  SUBTOTAL + IVA:
                  {total} USD
                </p>
                <p className="text-3xl">CUOTAS: {data?.quotes}</p>
                <p className="text-3xl"> TOTAL: {division} USD</p>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      id: 4,
      title: "test",
      component: () => (
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

  const Cart = useAppSelector(cart);
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState<FormData>({
    name: "",
    ci: "",
    address: "",
    phone: "",
    state: "",
    quotes: 0,
    polity: false,
    credit: false,
  });

  const [isError, setIsError] = React.useState<ErrorProps>(null);
  const [stepLabel, setStepLabel] = React.useState([
    "Tipos de pago",
    "Datos de pago",
    "Pago",
    "Estado de compra",
  ]);
  const router = useNavigate();

  const handleNext = () => {
    if (activeStep === 1) {
      if (
        !data.name ||
        !data?.ci ||
        !data?.phone ||
        data?.quotes === 0 ||
        !data.state
      ) {
        setIsError({
          message: "Todos los campos son obligatorios",
          status: true,
        });
        return;
      }
    }

    if (!data?.polity || !data?.credit) {
      setIsError({
        message: "El campo politicas es obligatorio",
        status: true,
      });
      return;
    }

    if (activeStep === steps.length - 1) {
      router("/");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIsError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setData({ ...data, polity: true })
      : setData({ ...data, polity: false });
  };

  const handleClickButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    if (!type) {
      setIsError({
        message: "Se debe eligir el tipo de pago",
        status: true,
      });
      return;
    }
    setData({ ...data, [type]: true });
  };

  return (
    <div className="flex h-full w-full flex-col justify-between ">
      <Box sx={{ width: "100%", display: "flex" }}>
        <Stepper activeStep={activeStep} className="w-full">
          {stepLabel.map((label, index) => {
            return (
              <Step key={label} className="flex flex-col w-32 ">
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {steps.map((step, index) => {
        return (
          index === activeStep && (
            <div key={index}>
              {step.component(
                handleChange,
                handleCheckboxChange,
                handleClickButton,
                data,
                Cart
              )}
            </div>
          )
        );
      })}
      {isError && (
        <Alert
          icon={<MdOutlineErrorOutline fontSize="inherit" />}
          severity="error"
        >
          {isError?.message}
        </Alert>
      )}
      {
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} variant="contained" size="large">
              {activeStep === steps.length - 1 ? "Finalizar" : "Continuar"}
            </Button>
          </Box>
        </React.Fragment>
      }
    </div>
  );
}
