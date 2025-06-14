

function Footer() {
    return (
        <footer className="bg-slate-800 text-slate-100">
            <div className="px-5 py-12 flex flex-col md:flex-row md:gap-8 items-center max-w-5xl mx-auto">
                <div>
                    <a href="/index.html">
                        <img className="invert-100" src="/src/assets/images/logo-bookmark.svg" alt="footer logo" />
                    </a>
                </div>
                <div className="flex justify-between w-full">
                    <ul className="flex flex-col md:flex-row gap-3.5 my-8 text-gray-300 text-center text-lg">
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
            </div>
        </footer>
    );
}


export default Footer;