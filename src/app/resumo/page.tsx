"use client";
import { useContext } from "react";
import { DataContext } from "../data-provider";

export default function Summary() {
  const { formData } = useContext(DataContext);
  return (
    <div>
      <p>{formData.cnpjData?.companyName}</p>
    </div>
  );
}
