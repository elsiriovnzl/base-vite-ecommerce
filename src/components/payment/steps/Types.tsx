import { ProductsProps } from "../../../pages/Home";

export type BanksType = {
  id: string;
  nombre: string;
  code: string;
};

export type Quotes = {
  id: string;
  value: number;
};


export interface StepProps {
  id: number;
  title: string;
  component: () => JSX.Element;
  status?: boolean;
}

export type FormData = {
  name: string;
  ci: string;
  address: string;
  phone: string;
  state: string;
  quotes: number;
  polity: boolean;
  credit: boolean;
};
