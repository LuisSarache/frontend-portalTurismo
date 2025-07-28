import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className="w-full bg-gradient-to-r from-pink-300 to-pink-300 text-white py-2 px-2 shadow-lg mt-auto">
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm text-white"> Nova serra rosa. Todos os direitos reservados</p>
                </div>

                <div className="flex space-x-6">
                <a href="#" className="hover:text-purple-300"><FaFacebookF /></a>
                <a href="#" className="hover:text-purple-300"><FaWhatsapp/></a>
                <a href="#" className="hover:text-purple-300"><FaInstagram/></a>
                </div>
                
            </div>
        </footer>
        </>
    )
}

export default Footer