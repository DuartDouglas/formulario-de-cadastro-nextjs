import { ICnpjData, ICpfData, IDataAddress } from "./forms";

interface IFormData {
  cpfData?: ICpfData;
  cnpjData?: ICnpjData;
  addressData?: IDataAddress;
}

export interface IDataContext {
  formData: IFormData;
  setFormData: (data: IFormData) => void;
}
