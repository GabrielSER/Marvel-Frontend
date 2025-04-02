import { Link } from "react-router-dom";
import heroesbg from '@assets/images/types/heroes2.jpg';
import villainsbg from '@assets/images/types/villains2.jpg';

export default function Types() {
    return (
        <div className="flex h-screen">
            {/* Heroes Section */}
            <Link
                to="/heroes"
                className="group relative flex-1 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
                style={{ backgroundImage: `url(${heroesbg})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
                <span className="z-10 transition-transform duration-300 font-condensed font-bold group-hover:scale-110">HEROES</span>
            </Link>

            {/* Villains Section */}
            <Link
                to="/villains"
                className="group relative flex-1 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
                style={{ backgroundImage: `url(${villainsbg})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
                <span className="z-10 transition-transform duration-300 font-condensed font-bold group-hover:scale-110">VILLAINS</span>
            </Link>
        </div>
    );
}
