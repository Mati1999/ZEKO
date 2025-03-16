import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "/MatiasAguilera.jpg";

const Nosotros = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-[url(/homeImg.jpg)] bg-cover bg-no-repeat bg-center w-full h-100 flex flex-col justify-center items-center">
          <h2 className="font-bold text-white text-2xl text-center mb-10 px-2">
            Construimos hermosos productos digitales que hacen crecer tu negocio
          </h2>
          <button className="font-medium rounded-xl bg-blue-500 text-white p-3">Contáctanos</button>
        </div>

        <section className="px-5 mt-10">
          <h3 className="font-bold text-4xl text-center">¿Porqué elegirnos?</h3>
          <p className="mt-5">
            Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
            algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
          </p>
          <div className="mt-10 flex flex-col gap-10">
            <div className="flex justify-between gap-5">
              <h4 className="w-sm self-center">Motivo 1</h4>
              <p>
                Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
                algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
              </p>
            </div>
            <div className="flex justify-between gap-5">
              <h4 className="w-sm self-center">Motivo 2</h4>
              <p>
                Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
                algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
              </p>
            </div>
            <div className="flex justify-between gap-5">
              <h4 className="w-sm self-center">Motivo 3</h4>
              <p>
                Sabemos que siempre tienes la decisión de elegir quien va a desarrollar tu página web. Aquí te contamos
                algunas razones de porqué creemos que somos los que mejor se adaptan a tus necesidades.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 mt-10 flex flex-col items-center">
          <h3>Conoce al equipo</h3>

          <div className="h-60 w-2/3 flex flex-col justify-between items-center border border-gray-300 rounded-sm shadow p-2 my-4 md:flex-row md:w-3/4   md:h-40">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <img className="w-30 h-30 rounded-full" src={logo} alt="" loading="lazy" />
              <div>
                <h4>Matias Aguilera</h4>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <button>Ver perfil en LinkedIn</button>
              <button>Correo</button>
            </div>
          </div>

          <div className="h-60 w-2/3 flex flex-col justify-between items-center border border-gray-300 rounded-sm shadow p-2 my-4 md:flex-row md:w-3/4   md:h-40">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <img className="w-30 h-30 rounded-full" src={logo} alt="" loading="lazy" />
              <div>
                <h4>Matias Aguilera</h4>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
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
