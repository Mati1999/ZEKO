import Footer from "../components/Footer";
import Header from "../components/Header";

const Contacto = () => {
  return (
    <>
      <Header />
      <main className="w-full h-dvh flex justify-center pt-20">
        <div className="bg-[url(/homeImg.jpg)] bg-cover bg-no-repeat w-[80%] h-4/5 rounded-2xl flex justify-center items-center">
          <div className="flex flex-col gap-3 items-center">
            <h3 className="text-4xl">Habla con nosotros</h3>
            <div className="bg-gray-50 w-100 h-20 flex justify-around px-4">
              <input className="text-xl focus: outline-none" type="text" placeholder="Tu correo Electrónico" />
              <button className="w-full">Enviar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
