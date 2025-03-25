import { useRef } from "react";
import { useForm } from "react-hook-form";
import process from "process";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contacto = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      formBody: ""
    },
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    resetField("email");
    resetField("formBody");

    emailjs
      .send(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, data, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    console.log(data);
  };

  return (
    <>
      <Header />
      <main>
        <div className="bg-[url(/homeImg.jpg)] bg-cover bg-no-repeat bg-center w-full h-100 flex flex-col justify-center items-center px-5 md:h-150 md:mt-25">
          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <h3 className="text-4xl">Habla con nosotros</h3>
            <form
              ref={form}
              className="w-full h-full flex flex-col gap-4 justify-between lg:w-2/3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="bg-gray-50 w-full text-sm focus:outline-none md:text-lg lg:text-xl rounded-md pl-2 md:pl-5"
                type="text"
                placeholder="Tu correo Electrónico"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && <p role="alert">El email es requerido</p>}
              {errors?.email?.types?.pattern && <p>Ingresa un email válido.</p>}
              <textarea
                className="bg-gray-50 w-full text-sm focus:outline-none md:text-lg lg:text-xl rounded-md max-h-[10rem] min-h-[1rem] pl-2 pt-1 md:pl-5"
                placeholder="Mensaje..."
                id=""
                {...register("formBody", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              ></textarea>
              {errors.email?.type === "required" && <p role="alert">Es necesario redactar un mensaje...</p>}
              <input type="submit" className="w-1/4 bg-black text-white rounded-md" />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
