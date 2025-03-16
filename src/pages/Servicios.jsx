import Footer from "../components/Footer";
import Header from "../components/Header";
import clientImg from "/client.jpg";

const Servicios = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-15 px-20 h-3/4">
        <h3 className="font-bold text-4xl">¿Cómo podemos ayudarte?</h3>
        <h4 className="w-auto text-xl mt-10">¿Cómo trabajamos?</h4>
        <section className="w-full mt-10 flex gap-10 justify-evenly">
          <div className="w-70 rounded p-2">
            <img className="rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Hablamos de tus necesidades</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
          <div className="w-70  rounded p-2">
            <img className="rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Aprobación del presupuesto</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
          <div className="w-70  rounded p-2">
            <img className="rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Desarrollo de la web</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
          <div className="w-70  rounded p-2">
            <img className="rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Entrega final</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
        </section>
        <section className="w-auto h-auto flex flex-col items-center mt-15">
          <div className="flex gap-3">
            <button className="font-medium rounded bg-black text-white p-3">Ver proyectos</button>
            <button className="font-medium rounded bg-gray-200 p-3">Hablemos!</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Servicios;
