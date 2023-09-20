import Image from "next/image";
import Logo from "../../public/LogoKraftv2 1.svg";
import profilePic from "../../public/user-interface1.png";
import React from "react";

export default function Banner(){
    return(
        <div className="hero min-h-screen bg-neutral-800">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-white">Hello there</h1>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}