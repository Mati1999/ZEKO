import Footer from "../components/Footer";
import Header from "../components/Header";
import clientImg from "/client.jpg";
import Proyecto from "../components/Proyecto";

const Proyectos = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-15 px-10 h-3/4">
        <h3 className="font-bold text-4xl">Nuestro trabajo</h3>
        <section className="w-full mt-10 flex flex-col gap-10 justify-evenly items-center md:flex-row md:flex-wrap lg:flex-nowrap">
          <Proyecto
            img={clientImg}
            titulo="Proyecto 1"
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno."
          />
          <Proyecto
            img={clientImg}
            titulo="Proyecto 2"
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno."
          />
          <Proyecto
            img={clientImg}
            titulo="Proyecto 3"
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno."
          />
          <Proyecto
            img={clientImg}
            titulo="Proyecto 4 "
            text="Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno."
          />
        </section>
        <section className="w-auto h-auto flex flex-col items-center mt-15">
          <div className="flex gap-3">
            <button className="font-medium rounded bg-gray-200 p-3">Hablemos!</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Proyectos;
