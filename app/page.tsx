"use client";

import { useState } from "react";
import FormSelectType from "./components/form_selectType";
import FormCpfData from "./components/form_cpfData";
import FormCnpjData from "./components/form_cnpjData";

export default function Home() {
  const [typeRegister, setTypeRegister] = useState<"cpf" | "cnpj">("cpf");

  return (
    <div className="w-full my-12 border-2 border-[#374151]  rounded-sm p-10 dark:bg-[#1F2937]">
      <FormSelectType
        typeRegister={typeRegister}
        setTypeRegister={setTypeRegister}
      />
      {typeRegister === "cpf" && <FormCpfData />}
      {typeRegister === "cnpj" && <FormCnpjData />}
    </div>
  );
}
