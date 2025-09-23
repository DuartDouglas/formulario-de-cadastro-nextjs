"use client";

import { useState } from "react";
import SelectRegistrationTypeForm from "./UI/SelectRegistrationTypeForm";
import CpfRegistrationForm from "./UI/CpfRegistrationForm";
import CnpjRegistrationForm from "./UI/CnpjRegistrationForm";

export default function Home() {
  const [typeRegister, setTypeRegister] = useState<"cpf" | "cnpj">("cnpj");

  return (
    <div className="w-full my-12 border-2 border-[#374151]  rounded-sm p-10 dark:bg-[#1F2937]">
      <SelectRegistrationTypeForm
        typeRegister={typeRegister}
        setTypeRegister={setTypeRegister}
      />
      {typeRegister === "cpf" && <CpfRegistrationForm />}
      {typeRegister === "cnpj" && <CnpjRegistrationForm />}
    </div>
  );
}
