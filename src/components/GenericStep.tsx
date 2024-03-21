import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { StepProps } from "../pages/Payment";

type StepperType = {
  steps: StepProps[];
};

export default function HorizontalLinearStepper({ steps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(new Set<String>());
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [stepLabel, setStepLabel] = React.useState([
    "Tipos de pago",
    "Metodo de pago",
    "Estado de compra",
  ]);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    console.log(data);
  }, [data]);

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
            <div key={index}>{step.component(error, data)}</div>
          )
        );
      })}
      {
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atras
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {data.length > 1 && (
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finalizar" : "Continuar"}
              </Button>
            )}
          </Box>
        </React.Fragment>
      }
    </div>
  );
}
