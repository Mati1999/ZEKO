import Footer from "./components/Footer";
import Header from "./components/Header";
import { PaintBrushIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-10">
        <div className="bg-[url(/homeImg.jpg)] bg-cover bg-no-repeat bg-center w-full h-100">
          <h2 className="font-bold text-white text-sm text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aperiam voluptatem iste exercitationem
            harum.
          </h2>
        </div>

        <section className="w-auto h-auto flex flex-col items-center gap-10">
          <h3 className="font-bold text-4xl text-center">Como podemos ayudarte?</h3>
          <div className="flex flex-col gap-3">
            <div className="w-80 border rounded border-gray-300 p-2">
              <PaintBrushIcon className="size-6" />
              <h4 className="font-medium text-2xl">Diseño Web</h4>
              <p className="text-gray-500 text-sm">
                Diseñamos y creamos hermosas e intuitivas aplicaciones web. Priorizamos la experiencia de usuario y un
                enfoque moderno.
              </p>
            </div>
            <div className="w-80 border rounded border-gray-300 p-2">
              <CodeBracketSquareIcon className="size-6" />
              <h4 className="font-medium text-2xl">Desarrollo Web</h4>
              <p className="text-gray-500 text-sm">
                Desarrollamos tu aplicación web totalmente personalizada. Nuestras soluciones son escalables, seguras y
                adaptadas a tus necesidades.
              </p>
            </div>
          </div>
        </section>
        <section className="w-auto h-auto flex flex-col items-center">
          <h3 className="font-bold text-2xl text-center px-10">Listo para llevar tu presencia web a otro nivel?</h3>
          <p className="font-light mb-5 px-10">
            Estamos aquí para crear tu web totalmente profesional y personalizada que se adapte a tu marca y
            necesidades.
          </p>
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

export default App;
