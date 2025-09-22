"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  cpf: string;
  name: string;
  phone: number;
  email: string;
};

export default function FormCnpjData() {
  return (
    <div>
      <p>CNPJ</p>
    </div>
  );
}
