import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-02-21T18:00:00");
    const timer = setInterval(() => {
      const now = new Date().getTime();

      const distance = weddingDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
          horas: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
    return () => clearInterval(timer);
  }, []);
  return (
    <div id="countdown" className="flex flex-row w-full py-0 md:block py-10">
      <div className="container px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white max-w-2xl mx-auto">
            Cuenta Regresiva...
          </h2>
        </div>

        <div className="grid grid-cols-2 items-center mb-0 md:grid-cols-4 gap-6 max-w-4xl mx-auto md:mb-16">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-300 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-gray-600 capitalize font-medium">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
