import { ProductsProps } from "../../../Home/Home";

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

export type OrderType = {
  name: string;
  address: string;
  quotes: number;
  polity: boolean;
  credit: boolean;
  cedulaPagador: string;
  telefonoPagador: string;
  telefonoDestino: string;
  referencia: string;
  fechaPago: string;
  importe: string;
  bancoOrigen: string;
  statusOrder: "pendiente" | "rechazado" | "aprobado" | "en progreso";
  totalUSD: number;
  totalVEF: number;
  convertVEF: number;
  cart: ProductsProps[];
};
