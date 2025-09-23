export interface ICnpjData {
  cnpj: string;
  companyName: string;
  tradeName: string;
  phone: string;
  email: string;
}

export interface ICpfData {
  cpf: string;
  name: string;
  phone: string;
  email: string;
}

export interface IDataAddress {
  cep: number;
  state: string;
  city: number;
  street: string;
  number: number | string;
  district: string;
  complement: string;
}
