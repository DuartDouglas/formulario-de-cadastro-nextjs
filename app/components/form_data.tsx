"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  cpf: string;
  name: string;
  phone: number;
  email: string;
};

export default function FormData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  // salvar dados em local host e recuperar na finalização
  // depois limpar dados de localhost após finalizar

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="form_field">
        <label htmlFor="cpf">Seu CPF</label>
        <input
          {...register("cpf", { required: true })}
          id="cpf"
          placeholder="000.000.000-00"
        />
        {errors.cpf && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="form_field">
        <label htmlFor="name">Seu nome</label>
        <input
          {...register("name", { required: true })}
          id="name"
          placeholder="Nome completo"
        />
        {errors.name && <span className="error">Campo obrigatório</span>}
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
