"use client";

import { Dispatch, SetStateAction } from "react";

export default function SelectRegistrationTypeForm({
  typeRegister,
  setTypeRegister,
}: {
  typeRegister: "cpf" | "cnpj";
  setTypeRegister: Dispatch<SetStateAction<"cpf" | "cnpj">>;
}) {
  return (
    <div className="mb-6">
      <p className="label mb-1">Tipo de cadastro</p>
      <form className="flex items-center gap-x-8">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="cnpj"
            checked={typeRegister === "cnpj"}
            onChange={() => setTypeRegister("cnpj")}
            className="accent-[var(--brand-color)]"
          />
          CNPJ
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="cpf"
            checked={typeRegister === "cpf"}
            onChange={() => setTypeRegister("cpf")}
            className="accent-[var(--brand-color)]"
          />
          CPF
        </label>
      </form>
    </div>
  );
}
