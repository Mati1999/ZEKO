import Footer from "../components/Footer";
import Header from "../components/Header";

const Contacto = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-[url(/homeImg.jpg)] bg-cover bg-no-repeat bg-center w-full h-100 flex flex-col justify-center items-center px-5 md:h-150 md:mt-25">
          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <h3 className="text-4xl">Habla con nosotros</h3>
            <div className="bg-gray-50 w-full h-20 flex justify-between pl-2 rounded-md md:pl-5">
              <input
                className="w-full text-sm focus:outline-none md:text-lg"
                type="text"
                placeholder="Tu correo Electrónico"
              />
              <button className="w-1/4">Enviar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
