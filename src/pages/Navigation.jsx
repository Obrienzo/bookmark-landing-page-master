import { useState } from "react";
import Button from "../components/Button.jsx";

function Navigation({ dropdown, setDropdown }) {

    function handleDropdown() {
        setDropdown(prevState => !prevState);
        console.log(dropdown);
    }


    return (
        <nav className="relative z-30">
            <div className="absolute z-30 w-full flex justify-between items-center p-5">
                <div>
                    <a href="/index.html">
                        <img src="/src/assets/images/logo-bookmark.svg" alt="" />
                    </a>
                </div>
                <button onClick={handleDropdown}>
                    {dropdown ? (<img src="/src/assets/images/icon-close.svg" alt="close icon" />) : (<img src="/src/assets/images/icon-hamburger.svg" alt="hamburger icon" />)}
                </button>
            </div>
            <div className={`${dropdown ? 'absolute top-0 left-0 right-0 mx-auto min-h-screen w-full text-slate-100 text-lg flex flex-col justify-between p-5 pt-20' : 'hidden'}`}>
                <ul className="text-center">
                    <li className="py-2.5 border-t border-t-zinc-300">
                        <a href="#">FEATURES</a>
                    </li>
                    <li className="py-2.5 border-y border-y-zinc-300">
                        <a href="#">PRICING</a>
                    </li>
                    <li className="py-2.5 border-b border-b-zinc-300">
                        <a href="#">CONTACT</a>
                    </li>
                    <li className="mt-6">
                        <div>
                            <Button
                                color='white'
                                border='2px solid white'
                                isWide={true}
                            >
                                LOGIN
                            </Button>
                        </div>
                    </li>
                </ul>
                <div className="flex items-center justify-center gap-5">
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