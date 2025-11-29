import { Calendar, Clock, MapPin } from "lucide-react";
export default function Cards() {
  return (
    <div className="grid justify-center md:grid-cols-3 gap-4">
      <div className="group relative">
        <div className="absolute  w-60 h-50 md:w-full inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative w-60 h-50 md:w-full flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/30 items-center justify-center">
          <Calendar className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-white font-bold text-lg mb-2">FECHA</h3>
          <p className="text-gray-300 text-sm">21 Febrero, 2026</p>
        </div>
      </div>

      <div className="group relative">
        <div className="absolute w-60 h-50 md:w-full inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative w-60 h-50 md:w-full flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-blue-500/30 items-center justify-center">
          <Clock className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-white font-bold text-lg mb-2">HORA</h3>
          <p className="text-gray-300 text-sm">18:00 hrs en adelante</p>
        </div>
      </div>

      <div className="group relative">
        <div className="absolute w-60 h-50 md:w-full inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative w-60 h-50 md:w-full flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-blue-500/30 items-center justify-center">
          <MapPin className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-white font-bold text-lg mb-2">LUGAR</h3>
          <p className="text-gray-300 text-sm">Salón de Fiestas Marflex</p>
          <p className="text-gray-300 text-sm">RN40 Km. 83, Tunuyán</p>
        </div>
      </div>
    </div>
  );
}
