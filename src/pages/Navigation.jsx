import { useState } from "react";
import Button from "../components/Button.jsx";

function Navigation({ dropdown, handleDropdown }) {

    return (
        <nav className="relative z-30 max-w-5xl md:flex md:items-center md:justify-between mx-auto">
            <div className="absolute md:relative z-30 w-full md:w-fit flex justify-between items-center p-5">
                <div>
                    <a href="/index.html">
                        <img src="/src/assets/images/logo-bookmark.svg" alt="" />
                    </a>
                </div>
                <button onClick={handleDropdown} className="md:hidden">
                    {dropdown ? (<img src="/src/assets/images/icon-close.svg" alt="close icon" />) : (<img src="/src/assets/images/icon-hamburger.svg" alt="hamburger icon" />)}
                </button>
            </div>
            <div className={`${dropdown ? 'absolute top-0 left-0 right-0 mx-auto min-h-screen w-full text-slate-100 text-lg flex flex-col justify-between p-5 pt-20' : 'hidden'} md:block md:relative md:top-0 text-black`}>
                <ul className="text-center md:flex md:gap-6 md:items-center">
                    <li className="py-2.5 md:py-0 border-t border-t-zinc-300 md:border-0">
                        <a href="#">FEATURES</a>
                    </li>
                    <li className="py-2.5 md:py-0 border-y border-y-zinc-300 md:border-0">
                        <a href="#">PRICING</a>
                    </li>
                    <li className="py-2.5 md:py-0 border-b border-b-zinc-300 md:border-0">
                        <a href="#">CONTACT</a>
                    </li>
                    <li className="mt-6 md:mt-0">
                        <div className="md:hidden">
                            <Button
                                color='white'
                                border='2px solid white'
                                isWide={true}
                            >
                                LOGIN
                            </Button>
                        </div>
                        <div className="hidden md:block">
                            <Button
                                color='white'
                                bckgColor='orangered'
                                isWide={true}
                            >
                                LOGIN
                            </Button>
                        </div>
                    </li>
                </ul>
                <div className="flex items-center justify-center gap-5 md:hidden">
                    <a href="#">
                        <img src="/src/assets/images/icon-facebook.svg" alt="facebook icon" />
                    </a>
                    <a href="#">
                        <img src="/src/assets/images/icon-twitter.svg" alt="twitter icon" />
                    </a>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;