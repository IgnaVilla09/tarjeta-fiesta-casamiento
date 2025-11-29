import EffectBG from "./components/EffectBG";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Countdown from "./components/Countdown";
import Values from "./components/Values";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden relative">
      <div className="w-full md:hidden">
        <img src="./assets/hoja4.png" alt="hoja" />
      </div>

      <div className="w-full hidden md:block absolute">
        <img src="./assets/hoja5.png" alt="hoja" />
      </div>

      <EffectBG />

      <div className="container mx-auto px-4 items-center justify-center md:pt-[220px] py-2 max-w-5xl relative z-10">
        <Header />

        <Cards />
        <Countdown />
        <Values />
      </div>

      <div className="relative w-full">
        {/* Versión Mobile - Texto y Botones */}
        <div className="md:hidden">
          <div className="flex justify-evenly items-center m-5 rounded-md">
            <button
              className="flex flex-col cursor-pointer bg-white p-2 rounded-md hover:bg-gray-400 transition"
              onClick={() =>
                window.open(
                  "https://wa.me/542622350211?text=" +
                    encodeURIComponent(
                      "Hola Mati! Quiero confirmar mi asistencia a la fiesta🎉"
                    ),
                  "_blank"
                )
              }
            >
              <img
                src="/assets/wsp.svg"
                alt="wspicon"
                className="mx-auto w-10 mt-5"
              />
              <p className="text-black lobster text-shadow-skyblue-950 text-shadow-xs text-shadow-skyblue-600 m-5 text-lg font-bold pointer-events-auto">
                Confirmar a Mati
              </p>
            </button>
            <button
              className="flex flex-col cursor-pointer bg-white p-2 rounded-md hover:bg-gray-400 transition"
              onClick={() =>
                window.open(
                  "https://wa.me/542622401159?text=" +
                    encodeURIComponent(
                      "Hola Eve! Quiero confirmar mi asistencia a la fiesta🎉"
                    ),
                  "_blank"
                )
              }
            >
              <img
                src="/assets/wsp.svg"
                alt="wspicon"
                className="mx-auto w-10 mt-5"
              />
              <p className="text-black lobster text-shadow-skyblue-950 text-shadow-xs text-shadow-skyblue-600 m-5 text-lg font-bold pointer-events-auto">
                Confirmar a Eve
              </p>
            </button>
          </div>
        </div>

        {/* Fondo de hoja */}
        <img src="./assets/hoja3.png" alt="hoja" className="w-full md:-mt-20" />

        {/* Versión Desktop - Contenido dentro de la hoja */}
        <div className="hidden md:flex w-full h-fit absolute inset-0 right-[500px] top-[400px] items-center justify-center pointer-events-none">
          <div className="w-[60%] m-5 bg-[#8886] rounded-md">
            <p className="text-white lobster text-shadow-black text-shadow-xs text-shadow-black m-5 text-4xl font-bold pointer-events-auto">
              Queremos que nos acompañes a la previa de la noche con música,
              baile y mucha felicidad. Tu presencia hará que la celebración sea
              todavía más especial, así que te esperamos para disfrutar, brindar
              y festejar hasta que el cuerpo aguante. ¡Nos vemos en la fiesta!
              🎉
            </p>
          </div>

          <div className="flex w-[40%] h-50 justify-evenly items-center m-5 bg-slate-800 rounded-md">
            <button
              className="flex flex-col cursor-pointer bg-white p-2 rounded-md hover:bg-gray-400 transition pointer-events-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/542622350211?text=" +
                    encodeURIComponent(
                      "Hola Mati! Quiero confirmar mi asistencia a la fiesta🎉"
                    ),
                  "_blank"
                )
              }
            >
              <img
                src="/assets/wsp.svg"
                alt="wspicon"
                style={{ width: 35 }}
                className="mx-auto mt-5"
              />
              <p className="text-black lobster text-shadow-skyblue-950 text-shadow-xs text-shadow-skyblue-600 m-5 text-2xl font-bold">
                Confirmar a Mati
              </p>
            </button>
            <button
              className="flex flex-col cursor-pointer bg-white p-2 rounded-md hover:bg-gray-400 transition pointer-events-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/542622401159?text=" +
                    encodeURIComponent(
                      "Hola Eve! Quiero confirmar mi asistencia a la fiesta🎉"
                    ),
                  "_blank"
                )
              }
            >
              <img
                src="/assets/wsp.svg"
                alt="wspicon"
                style={{ width: 35 }}
                className="mx-auto mt-5"
              />
              <p className="text-black lobster text-shadow-skyblue-950 text-shadow-xs text-shadow-skyblue-600 m-5 text-2xl font-bold">
                Confirmar a Eve
              </p>
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Ignacio Villafañe ❤️ Hecho con ❤️ para Eve y Mati
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
