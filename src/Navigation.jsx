import { useState } from "react";
import Button from "./Button.jsx";

function Navigation() {
    const [dropdown, setDropdown] = useState(false);
    console.log(dropdown);

    function handleDropdown() {
        setDropdown(prevState => !prevState);
        console.log(dropdown);
    }


    return (
        <nav>
            <div className="flex justify-between items-center p-5">
                <div>
                    <a href="/index.html">
                        <img src="/src/assets/images/logo-bookmark.svg" alt="" />
                    </a>
                </div>
                <div>
                    {/* menu links */}
                </div>
                <button onClick={handleDropdown}>
                    {dropdown ? (<img src="/src/assets/images/icon-close.svg" alt="close icon" />) : (<img src="/src/assets/images/icon-hamburger.svg" alt="hamburger icon" />)}
                </button>
            </div>
        </nav>
    );
}


export default Navigation;