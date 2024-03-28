import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import StepOne from "./payment/steps/StepOne";
import StepTwo from "./payment/steps/StepTwo";
import { FormData, StepProps } from "./payment/steps/Types";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { cart } from "../redux/Products/CartSlice";

interface ErrorProps {
  message: string;
  status: boolean;
}

export default function HorizontalLinearStepper() {
  const router = useNavigate();
  const Cart = useAppSelector(cart);
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState<FormData>({
    name: "",
    ci: "",
    address: "",
    phone: "",
    state: "",
    quotes: 0,
    polity: false,
    credit: false,
  });
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
      component: () => <StepTwo handleChange={handleChange} Cart={Cart} data={data} />,
    },
    {
      id: 3,
      title: "Estado de Pago",
      component: () => <SuccessPayment />,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClickButton = (type: string) => {
    console.log(type);
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
          !data.ci ||
          !data.phone ||
          data.quotes === 0 ||
          !data.state
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
    <div className="flex h-full w-full flex-col justify-between ">
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
            <div key={index} className="flex w-full h-full ">
              {step.component()}
            </div>
          )
      )}

      {isError && (
        <Alert
          icon={<MdOutlineErrorOutline fontSize="inherit" />}
          severity="error"
        >
          {isError.message}
        </Alert>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} variant="contained" size="large">
          {activeStep === steps.length - 1 ? "Finalizar" : "Continuar"}
        </Button>
      </Box>
    </div>
  );
}

const SuccessPayment = () => (
  <div className="h-full w-full flex gap-5 items-center">
    <div className=" flex w-full flex-col items-center justify-center gap-2">
      <span className="text-3xl">
        Pago exitoso
        <FaCheckCircle size={200} color="green" />
      </span>
    </div>
  </div>
);
