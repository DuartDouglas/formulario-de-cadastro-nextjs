"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  cnpj: string;
  companyName: string;
  tradeName: string;
  phone: number;
  email: string;
};

export default function FormCnpjData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="form_field">
        <label htmlFor="cnpj">CNPJ da Empresa</label>
        <input
          {...register("cnpj", { required: true })}
          id="cnpj"
          placeholder="00.000.000/0001-00"
          autoComplete="cnpj"
        />
        {errors.cnpj && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="form_field">
        <label htmlFor="companyName">Razão Social</label>
        <input
          {...register("companyName", { required: true })}
          id="companyName"
          placeholder="Nome da Empresa"
        />
        {errors.companyName && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="form_field">
        <label htmlFor="tradeName">Nome Fantasia</label>
        <input
          {...register("tradeName", { required: true })}
          id="tradeName"
          placeholder="Nome fantasia"
        />
        {errors.tradeName && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="form_field">
        <label htmlFor="phone">Telefone</label>
        <input
          {...register("phone", { required: true })}
          id="phone"
          placeholder="(00) 0 0000-0000"
        />

        {errors.phone && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="form_field">
        <label htmlFor="email">Seu nome</label>
        <input
          {...register("email", { required: true })}
          id="email"
          placeholder="email@email.com"
        />
        {errors.email && <span className="error">Campo obrigatório</span>}
      </div>

      <button type="submit" className="btn-submit">
        Ir para endereço
      </button>
    </form>
  );
}
