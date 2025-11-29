import React from "react";

const Values: React.FC = () => {
  return (
    <section id="rsvp" className="relative py-10 lobster">
      <div className="container relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center bg-[#fff] rounded-2xl p-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Información detallada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Para acompañarnos en este día tan especial, la confirmación de
            asistencia se realiza{" "}
            <span className="font-bold">abonando la tarjeta.</span> Más que un
            costo, lo consideramos un regalo que nos ayudan a atesorar en este
            momento único. ¡Gracias de corazón por ser parte!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center mx-auto">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Valor de la tarjeta
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">$25.000</span>
              </li>
            </ul>

            <div className="mt-4 text-white font-medium px-4 py-2 bg-gray-600 w-fit mx-auto rounded-lg">
              <p className="font-bold">Alias: boda.eym.2026</p>
              <p>Naranja Compañía Financiera S.A.</p>
              <p>Héctor Matías Toledo </p>
              <p>20-37454379-3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
