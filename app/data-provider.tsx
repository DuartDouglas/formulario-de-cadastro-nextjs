"use client";

import { createContext, useState } from "react";
import { ICnpjData } from "./components/form_cnpjData";
import { ICpfData } from "./components/form_cpfData";
import { IDataAddress } from "./components/form_address";

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
