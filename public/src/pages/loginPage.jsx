import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/loginForm";
import goku from "../assets/imagens/goku.jpg"



const LoginPage = () =>{

    return (
        <>

        <div div
        className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${goku})` }}>
                <Navbar/>
                <div
                className="flex-grow flex items-center justify-center">
                <LoginForm/>           
                </div>
                 <Footer />
            </div>

        
        </>
    )

}

export default LoginPage