import { Volume2 } from "lucide-react";

function Header() {
  return (
    <div className="text-center">
      <div className=" mb-16">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 drop-shadow-lg">
          Eve<span className="text-4xl md:text-6xl"> & </span>Mati
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-24"></div>
          <Volume2 className="w-6 h-6 text-cyan-400 animate-pulse" />
          <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-24"></div>
        </div>

        <p className="text-2xl md:text-3xl text-cyan-300 font-bold tracking-wider">
          Te invitamos a nuestro festejo de casamiento
        </p>
        <p className="text-blue-300 text-xl mt-3 font-light">
          Después de 15 años juntos y mucho tiempo deseándolo hemos decidido
          casarnos. La fiesta sera en Febrero 21, 2026
        </p>
      </div>
    </div>
  );
}

export default Header;
