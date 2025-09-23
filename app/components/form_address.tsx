"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DataContext } from "../data-provider";

export interface IDataAddress {
  cep: number;
  state: string;
  city: number;
  street: string;
  number: number | string;
  district: string;
  complement: string;
}

export default function FormAddress() {
  const { formData, setFormData } = useContext(DataContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataAddress>();

  const onSubmit: SubmitHandler<IDataAddress> = (data) => {
    setFormData({ ...formData, addressData: data });
    router.push("/resumo");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="form_field">
        <label htmlFor="cep">Cep</label>
        <input
          {...register("cep", { required: true })}
          id="cep"
          placeholder="00.000-000"
          className="w-max"
        />
        {errors.cep && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="form_field w-20">
          <label htmlFor="state">Estado</label>
          <input
            {...register("state", { required: true })}
            id="state"
            placeholder="UF"
          />
          {errors.state && <span className="error">Campo obrigatório</span>}
        </div>

        <div className="form_field grow">
          <label htmlFor="city">Cidade</label>
          <input
            {...register("city", { required: true })}
            id="city"
            placeholder="Nome da cidade"
          />

          {errors.city && <span className="error">Campo obrigatório</span>}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="form_field grow">
          <label htmlFor="street">Rua</label>
          <input
            {...register("street", { required: true })}
            id="street"
            placeholder="Nome da rua, avenida etc"
          />
          {errors.street && <span className="error">Campo obrigatório</span>}
        </div>

        <div className="form_field w-24">
          <label htmlFor="number">Número</label>
          <input
            {...register("number", { required: true })}
            id="number"
            placeholder="S/n"
          />
          {errors.number && <span className="error">Campo obrigatório</span>}
        </div>
      </div>

      <div className="form_field">
        <label htmlFor="district">Bairro</label>
        <input
          {...register("district", { required: true })}
          id="district"
          placeholder="Nome do bairro"
        />
        {errors.district && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="form_field">
        <label htmlFor="complement">Complemento</label>
        <input
          {...register("complement", { required: true })}
          id="complement"
          placeholder="Complemento do endereço"
        />
        {errors.complement && <span className="error">Campo obrigatório</span>}
      </div>

      <button type="submit" className="btn-submit">
        Enviar
      </button>
    </form>
  );
}
