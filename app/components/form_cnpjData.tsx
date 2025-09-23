"use client";

import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataContext } from "../data-provider";
import { useRouter } from "next/navigation";

export interface ICnpjData {
  cnpj: string;
  companyName: string;
  tradeName: string;
  phone: string;
  email: string;
}

export default function FormCnpjData() {
  const { formData, setFormData } = useContext(DataContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICnpjData>();

  const onSubmit: SubmitHandler<ICnpjData> = (data) => {
    setFormData({ ...formData, cnpjData: data });
    router.push("/endereco");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="form_field">
        <label htmlFor="cnpj">CNPJ da Empresa</label>
        <input
          {...register("cnpj", {
            required: true,
            pattern: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/, // Aceita 00.000.000/0001-00 ou 00000000000100
          })}
          id="cnpj"
          placeholder="00.000.000/0001-00"
          autoComplete="cnpj"
        />
        {errors.cnpj?.type === "required" && (
          <span className="error">Campo obrigatório</span>
        )}
        {errors.cnpj?.type === "pattern" && (
          <span className="error">CNPJ inválido</span>
        )}
      </div>

      <div className="form_field">
        <label htmlFor="companyName">Razão Social</label>
        <input
          {...register("companyName", {
            required: true,
            pattern: /^[A-Za-zÀ-ÿ\s]{3,}$/, // Nome com pelo menos 3 letras, aceita acentos e espaços
          })}
          id="companyName"
          placeholder="Nome da Empresa"
        />
        {errors.companyName?.type === "required" && (
          <span className="error">Campo obrigatório</span>
        )}
        {errors.companyName?.type === "pattern" && (
          <span className="error">Razão social inválida</span>
        )}
      </div>

      <div className="form_field">
        <label htmlFor="tradeName">Nome Fantasia</label>
        <input
          {...register("tradeName", {
            required: true,
            pattern: /^[A-Za-zÀ-ÿ\s]{3,}$/, // Nome com pelo menos 3 letras, aceita acentos e espaços
          })}
          id="tradeName"
          placeholder="Nome fantasia"
        />
        {errors.tradeName?.type === "required" && (
          <span className="error">Campo obrigatório</span>
        )}
        {errors.tradeName?.type === "pattern" && (
          <span className="error">Nome fantasia inválido</span>
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
