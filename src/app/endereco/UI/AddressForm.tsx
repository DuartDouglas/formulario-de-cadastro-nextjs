"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DataContext } from "../../data-provider";
import { IDataAddress } from "@/src/types/forms";
import Loading from "../../components/Loading/Loading";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function AddressForm() {
  const { formData, setFormData } = useContext(DataContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IDataAddress>();

  const cep = watch("cep");

  useEffect(() => {
    const cepNumber = cep?.replace(/\D/g, "");

    if (cepNumber?.length === 8) {
      const searchCep = async (): Promise<IDataAddress | undefined> => {
        setLoading(true);

        try {
          const res = await fetch(
            `https://brasilapi.com.br/api/cep/v2/${cepNumber}`
          );

          if (!res.ok) throw new Error("CEP não encontrado");

          const data = await res.json();

          console.log(data);

          setValue("cep", data.cep || "");
          setValue("state", data.state || "");
          setValue("city", data.city || "");
          setValue("street", data.street || "");
          setValue("district", data.neighborhood || "");
        } catch (error) {
          console.error(error);
          return undefined;
        } finally {
          setLoading(false);
        }
      };
      searchCep();
    } else {
      setValue("number", "");
      setValue("state", "");
      setValue("city", "");
      setValue("street", "");
      setValue("district", "");
      setValue("complement", "");
    }
  }, [cep, setValue]);

  const onSubmit: SubmitHandler<IDataAddress> = (data) => {
    if (!data.number || data.number.trim() === "") {
      data.number = "S/n";
    }
    setFormData({ ...formData, addressData: data });
    router.push("/resumo");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex gap-4 items-center flex-wrap">
        <div className="form_field">
          <label htmlFor="cep">Cep</label>
          <input
            {...register("cep", { required: true })}
            id="cep"
            placeholder="00.000-000"
            className="w-max"
            autoFocus
            disabled={loading ? true : false}
          />
          {errors.cep && <span className="error">Campo obrigatório</span>}
        </div>
        {loading && <Loading />}
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="form_field w-20">
          <label htmlFor="state">Estado</label>
          {loading ? (
            <Skeleton />
          ) : (
            <input
              {...register("state", { required: true })}
              id="state"
              placeholder="UF"
            />
          )}
          {errors.state && <span className="error">Campo obrigatório</span>}
        </div>

        <div className="form_field grow">
          <label htmlFor="city">Cidade</label>
          {loading ? (
            <Skeleton />
          ) : (
            <input
              {...register("city", { required: true })}
              id="city"
              placeholder="Nome da cidade"
            />
          )}

          {errors.city && <span className="error">Campo obrigatório</span>}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="form_field grow">
          <label htmlFor="street">Rua</label>
          {loading ? (
            <Skeleton />
          ) : (
            <input
              {...register("street", { required: true })}
              id="street"
              placeholder="Nome da rua, avenida etc"
            />
          )}
          {errors.street && <span className="error">Campo obrigatório</span>}
        </div>

        <div className="form_field w-28">
          <label htmlFor="number">Número</label>
          {loading ? (
            <Skeleton />
          ) : (
            <input
              {...register("number", { maxLength: 10 })}
              id="number"
              placeholder="S/n"
              onBlur={(e) => {
                if (!e.target.value.trim()) setValue("number", "S/n");
              }}
            />
          )}
          {errors.number && <span className="error">Número Inválido</span>}
        </div>
      </div>

      <div className="form_field">
        <label htmlFor="district">Bairro</label>
        {loading ? (
          <Skeleton />
        ) : (
          <input
            {...register("district", { required: true })}
            id="district"
            placeholder="Nome do bairro"
          />
        )}
        {errors.district && <span className="error">Campo obrigatório</span>}
      </div>

      <div className="form_field">
        <label htmlFor="complement">Complemento</label>
        {loading ? (
          <Skeleton />
        ) : (
          <input
            {...register("complement", { maxLength: 50 })}
            id="complement"
            placeholder="Complemento do endereço"
          />
        )}
        {errors.complement && <span className="error">Dados inválidos</span>}
      </div>

      <button
        type="submit"
        className="btn-submit"
        disabled={loading ? true : false}
      >
        Enviar
      </button>
    </form>
  );
}
