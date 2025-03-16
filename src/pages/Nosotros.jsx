import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "/MatiasAguilera.jpg";

const Nosotros = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-[url(/homeImg.jpg)] rounded-xl bg-cover bg-no-repeat w-auto h-100 mx-5 flex justify-center items-center px-70 bg-opacity-100 flex-col ">
          <h2 className="font-bold text-white text-4xl text-center mb-15">
            Construimos hermosos productos digitales que hacen crecer tu negocio
          </h2>
          <button className="font-medium rounded-xl bg-blue-500 text-white p-3">Contáctanos</button>
        </div>

        <section className="mt-10 pl-20 pr-70">
          <h3 className="font-bold text-4xl">¿Porqué elegirnos?</h3>
          <p className="mt-5">
            Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
            algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
          </p>
          <div className="mt-10 flex flex-col gap-10">
            <div className="flex justify-between">
              <h4 className="w-sm self-center">Motivo 1</h4>
              <p>
                Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
                algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
              </p>
            </div>
            <div className="flex justify-between">
              <h4 className="w-sm self-center">Motivo 2</h4>
              <p>
                Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
                algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
              </p>
            </div>
            <div className="flex justify-between">
              <h4 className="w-sm self-center">Motivo 3</h4>
              <p>
                Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
                algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 pl-20 pr-70">
          <h3>Conoce al equipo</h3>

          <div className="h-40 flex w-1/2 justify-between border border-gray-300 rounded-sm shadow px-2 mb-4">
            <div className="flex items-center gap-4">
              <img className="w-30 h-30 rounded-full" src={logo} alt="" />
              <div>
                <h4>Matias Aguilera</h4>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button>Ver perfil en LinkedIn</button>
              <button>Correo</button>
            </div>
          </div>

          <div className="h-40 flex w-1/2 justify-between border border-gray-300 rounded-sm shadow px-2 mb-4">
            <div className="flex items-center gap-4">
              <img className="w-30 h-30 rounded-full" src={logo} alt="" />
              <div>
                <h4>Matias Aguilera</h4>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button>Ver perfil en LinkedIn</button>
              <button>Correo</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Nosotros;
