import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <div className="border border-b-slate-200 p-2">
        <p className="text-xs">example@gmail.com | +91 91XXXXXXX</p>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="hidden md:flex items-center gap-4">
          <FaFacebookSquare size={20} color="#F59CB4" />
          <CgMail size={26} color="#F59CB4"/>
          <FaInstagram size={20} color="#F59CB4"/>
        </div>
        <div>
          <Image src={logo} width={100} alt="logo" />
        </div>
        <div className="hidden md:block">
          <FaSearch size={20} color="#F59CB4"/>
        </div>
        <div className="md:hidden p-2">
          <FiMenu size={25} color="#F59CB4"/>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex bg-sky-200 p-4 items-center gap-12 justify-center">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/">Services</a>
          </li>
          <li className="nav-item">
            <a href="/">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="/">Lets Talk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
