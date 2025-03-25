import Footer from "../components/Footer";
import Header from "../components/Header";
import Servicio from "../components/Servicio";
import clientImg from "/client.jpg";

const Servicios = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-5 py-5 px-10 h-3/4">
        <h3 className="font-bold text-4xl text-center">¿Cómo podemos ayudarte?</h3>
        <h4 className="w-auto text-2xl">¿Cómo trabajamos?</h4>
        <section className="w-full flex flex-col gap-10 justify-evenly items-center md:flex-row md:flex-wrap lg:flex-nowrap">
          <Servicio
            img={clientImg}
            titulo="Hablamos de tus necesidades"
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno."
          />
          <Servicio
            img={clientImg}
            titulo="Aprobación del presupuesto"
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno."
          />
          <Servicio
            img={clientImg}
            titulo="Desarrollo de la web"
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
            enfoque moderno."
          />
          <Servicio
            img={clientImg}
            titulo="Entrega final"
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
          enfoque moderno."
          />
        </section>
        <section className="w-auto h-auto flex flex-col items-center mt-5">
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
