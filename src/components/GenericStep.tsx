import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderType, StepProps } from "./payment/steps/Types";
import { useAppSelector } from "../hooks";
import { cart } from "../redux/Products/CartSlice";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { MdOutlineErrorOutline } from "react-icons/md";

import StepOne from "./payment/steps/StepOne";
import StepTwo from "./payment/steps/StepTwo";

interface ErrorProps {
  message: string;
  status: boolean;
}

export default function HorizontalLinearStepper() {
  const date = new Date();
  const fullDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDay().toString().padStart(2, "0")}`;
  console.log(fullDate);
  const router = useNavigate();
  const Cart = useAppSelector(cart);
  const [activeStep, setActiveStep] = useState(0);
  const [quotes, setQuotes] = useState(3);
  const [bankCode, setBankCode] = useState<string>("0102");
  const [datePayment, setDatePayment] = useState<string>(fullDate);

  const total = Cart?.reduce(
    (acc, obj) => acc + obj.products_total * (obj?.quantity ?? 0),
    0
  );

  // NOTE: change api money convert from VEF
  const convert = total && total * 36.17;

  const [data, setData] = useState<OrderType>({
    name: "",
    address: "",
    quotes,
    polity: false,
    credit: false,
    cedulaPagador: "",
    telefonoPagador: "",
    telefonoDestino: "04241708810",
    referencia: "",
    fechaPago: datePayment,
    importe: `${convert / quotes}`,
    bancoOrigen: bankCode ?? "",
    statusOrder: "pendiente",
    totalUSD: total,
    totalVEF: convert,
    convertVEF: 0,
    cart: Cart,
  });
  console.log(data);
  const [isError, setIsError] = useState<ErrorProps | null>(null);
  const steps: StepProps[] = [
    {
      id: 1,
      title: "Tipos de pago",
      component: () => (
        <StepOne
          handleCheckboxChange={handleCheckboxChange}
          handleClickButton={handleClickButton}
          data={data}
        />
      ),
    },
    {
      id: 2,
      title: "Metodos de pago",
      component: () => (
        <StepTwo
          handleChange={handleChange}
          Cart={Cart}
          data={data}
          setQuotes={setQuotes}
          quotes={quotes}
          setBankCode={setBankCode}
        />
      ),
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if ("value" in e.target && "name" in e.target) {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleClickButton = (type: string) => {
    if (!type) {
      setIsError({
        message: "Se debe eligir el tipo de pago",
        status: true,
      });
      return;
    }
    setData({ ...data, [type]: true });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setData({ ...data, polity: true })
      : setData({ ...data, polity: false });
  };

  const handleNext = () => {
    const isValid = validateStep(activeStep);
    if (!isValid) return;

    if (activeStep === steps.length - 1) {
      router("/");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIsError(null);
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (
          !data.name ||
          !data.cedulaPagador ||
          !data.telefonoPagador ||
          data.quotes === 0
        ) {
          setIsError({
            message: "Todos los campos son obligatorios",
            status: true,
          });
          return false;
        }
        break;
      default:
        if (!data.polity || !data.credit) {
          setIsError({
            message: "El campo politicas es obligatorio",
            status: true,
          });
          return false;
        }
        break;
    }
    return true;
  };

  return (
    <div className="flex h-[830px] w-full flex-col justify-between ">
      <Box sx={{ width: "100%", display: "flex" }}>
        <Stepper activeStep={activeStep} className="w-full">
          {steps.map((step) => (
            <Step key={step.title} className="flex flex-col w-32 ">
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {steps.map(
        (step, index) =>
          index === activeStep && (
            <div key={index} className="flex w-full h-full flex-col ">
              {step.component()}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                  justifyContent: " space-between",
                }}
              >
                <Button onClick={handleNext} variant="contained" size="large">
                  {activeStep === steps.length - 1
                    ? "Finalizar Orden"
                    : "Continuar"}
                </Button>
                {isError && (
                  <Alert
                    icon={<MdOutlineErrorOutline fontSize="inherit" />}
                    severity="error"
                  >
                    {isError.message}
                  </Alert>
                )}
              </Box>
            </div>
          )
      )}
    </div>
  );
}
