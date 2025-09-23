"use client";

import { createContext, useState } from "react";
import { ICnpjData } from "./UI/CnpjRegistrationForm";
import { ICpfData } from "./UI/CpfRegistrationForm";
import { IDataAddress } from "./endereco/UI/AddressForm";

interface IFormData {
  cpfData?: ICpfData;
  cnpjData?: ICnpjData;
  addressData?: IDataAddress;
}

interface IDataContext {
  formData: IFormData;
  setFormData: (data: IFormData) => void;
}

export const DataContext = createContext<IDataContext>({
  formData: {},
  setFormData: () => {},
});

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formData, setFormData] = useState<IFormData>({});
  return (
    <DataContext.Provider value={{ formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
}
