

function Footer() {
    return (
        <footer className="bg-slate-800 text-slate-100">
            <div className="px-5 py-12 flex flex-col items-center">
                <div>
                    <a href="/index.html">
                        <img className="invert-100" src="/src/assets/images/logo-bookmark.svg" alt="footer logo" />
                    </a>
                </div>
                <ul className="flex flex-col gap-3.5 my-8 text-gray-300 text-center text-lg">
                    <li>
                        <a href="#">FEATURES</a>
                    </li>
                    <li>
                        <a href="#">PRICING</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
                <ul className="flex items-center gap-8">
                    <li>
                        <a href="#">
                            <img src="/src/assets/images/icon-facebook.svg" alt="Facebook icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/src/assets/images/icon-twitter.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer;