import { Link } from "react-router-dom";
import Logo from "../assets/finta-logo-light.svg";
import type { NavabrProps } from "../types";
import Button from "./Button";

const Navbar = ({ items }: NavabrProps) => {
    return (
        <nav className="px-2 py-4 flex justify-between items-center">
            <Link to={"/"}>
                <img src={Logo} alt="Logo" className="w-18" />
            </Link>

            <div className="flex items-center gap-6">
                {items.map((item, idx) => (
                    <Link to={item.link} key={idx}>
                        {item.isButton ? (
                            <Button buttonType={"primary"} buttonText={item.name} />
                        ) : (
                            <span className="font-semibold text-slate-700 text-md hover:text-slate-500 transition-colors duration-100 ease-in">
                                {item.name}
                            </span>
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
