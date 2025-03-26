import { useRef } from "react";
import { useForm } from "react-hook-form";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
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
    emailjs
      .send(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, data, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY
      })
      .then(
        () => {
          resetField("email");
          resetField("formBody");

          Toastify({
            text: "Gracias por contactarte con nosotros!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)"
            },
            onClick: function () {} // Callback after click
          }).showToast();
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
              className="w-full h-full flex flex-col gap-4 justify-between md:w-[80%] lg:w-1/2 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="bg-gray-50 w-full text-sm focus:outline-none md:text-lg  rounded-md pl-2 md:pl-3 md:h-10 lg:text-xl lg:h-15"
                type="text"
                placeholder="Tu correo Electrónico"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="bg-red-400 text-white pl-3 rounded-md w-1/3" role="alert">
                  El email es requerido!
                </p>
              )}
              {errors?.email?.types?.pattern && (
                <p className="bg-red-400 text-white pl-3 rounded-md w-1/3">Ingresa un email válido.</p>
              )}
              <textarea
                className="bg-gray-50 w-full text-sm focus:outline-none md:text-lg rounded-md max-h-[10rem] min-h-[1rem] pl-2 pt-2 md:pl-3 md:min-h-10 lg:text-xl"
                placeholder="Mensaje..."
                id=""
                {...register("formBody", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              ></textarea>
              {errors.email?.type === "required" && (
                <p className="bg-red-400 text-white pl-3 rounded-md w-1/3" role="alert">
                  Es necesario redactar un mensaje...
                </p>
              )}
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
