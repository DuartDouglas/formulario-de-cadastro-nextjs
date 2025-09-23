"use client";

import { createContext, useState } from "react";
import { IDataContext, IFormData } from "../types/context";

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
