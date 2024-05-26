export interface User {
  phone: string;
  dni: string;
  name: string;
  username: string;
  rif: string;
  address: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string | null;
  isLogged: boolean;
}

export interface Auth {
  username: string;
  password: string;
}
