"use client";

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataContext } from "../data-provider";
import { useRouter } from "next/navigation";
import { ICpfData } from "@/src/types/forms";

export default function CpfRegistrationForm() {
  const { formData, setFormData } = useContext(DataContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICpfData>();

  const onSubmit: SubmitHandler<ICpfData> = (data) => {
    setFormData({ ...formData, cpfData: data });
    router.push("/endereco");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="form_field">
        <label htmlFor="cpf">Seu CPF</label>
        <input
          {...register("cpf", { required: true, minLength: 11, maxLength: 14 })}
          id="cpf"
          autoComplete="username"
          placeholder="000.000.000-00"
        />
        {errors.cpf?.type === "required" && (
          <span className="error">Campo obrigatório</span>
        )}
        {errors.cpf?.type === "minLength" && (
          <span className="error">CPF Inválido</span>
        )}
        {errors.cpf?.type === "maxLength" && (
          <span className="error">CPF Inválido</span>
        )}
      </div>

      <div className="form_field">
        <label htmlFor="name">Seu nome</label>
        <input
          {...register("name", {
            required: true,
            pattern: /^[A-Za-zÀ-ÿ\s]{3,}$/, // Nome com pelo menos 3 letras, aceita acentos e espaços
          })}
          id="name"
          autoComplete="name"
          placeholder="Nome completo"
        />
        {errors.name?.type === "required" && (
          <span className="error">Campo obrigatório</span>
        )}
        {errors.name?.type === "pattern" && (
          <span className="error">Nome inválido</span>
        )}
      </div>

      <div className="form_field">
        <label htmlFor="phone">Telefone</label>
        <input
          {...register("phone", {
            required: true,
            pattern: /^\(?\d{2}\)?\s?\d{1}\s?\d{4}-?\d{4}$/, // Ex: (11) 9 1234-5678
          })}
          id="phone"
          autoComplete="tel"
          placeholder="(00) 0 0000-0000"
        />

        {errors.phone?.type === "required" && (
          <span className="error">Campo obrigatório</span>
        )}
        {errors.phone?.type === "pattern" && (
          <span className="error">
            Telefone inválido, digite: 62999999999 ou (62) 9 9999-9999
          </span>
        )}
      </div>

      <div className="form_field">
        <label htmlFor="email">E-mail</label>

        <input
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // E-mail simples
          })}
          id="email"
          autoComplete="email"
          placeholder="email@email.com"
        />
        {errors.email?.type === "required" && (
          <span className="error">Campo obrigatório</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="error">E-mail inválido</span>
        )}
      </div>

      <button type="submit" className="btn-submit">
        Ir para endereço
      </button>
    </form>
  );
}
