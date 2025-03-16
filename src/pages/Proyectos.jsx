import Footer from "../components/Footer";
import Header from "../components/Header";
import clientImg from "/client.jpg";

const Proyectos = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-15 px-20 h-3/4">
        <h3 className="font-bold text-4xl">Nuestro trabajo</h3>
        <section className="w-full mt-10 flex gap-10 justify-evenly">
          <div className="w-100 rounded p-2">
            <img className="w-full h-55 rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Proyecto 1</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
          <div className="w-100  rounded p-2">
            <img className="w-full h-55 rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Proyecto 2</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
          <div className="w-100  rounded p-2">
            <img className="w-full h-55 rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Proyecto 3</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
          <div className="w-100  rounded p-2">
            <img className="w-full h-55 rounded-xl" src={clientImg} alt="" />
            <h4 className="font-medium text-md my-1">Proyecto 4</h4>
            <p className="text-gray-500 text-sm">
              Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
              enfoque moderno.
            </p>
          </div>
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
