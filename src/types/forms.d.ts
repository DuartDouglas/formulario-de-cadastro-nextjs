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
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  district: string;
  complement: string;
}
