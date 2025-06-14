import Button from "../components/Button.jsx";

function HeroPage() {
    return (
        <section className="flex items-center justify-center relative">
            <div className="p-5 flex flex-col gap-16 mt-16 max-w-5xl md:grid md:grid-cols-2">
                <div className="flex justify-center">
                    <img src="/src/assets/images/illustration-hero.svg" alt="hero illustration" />
                    <div className="w-3/4 md:w-2/4 h-2/6 sm:h-5/12 md:h-3/5 absolute bg-[#5368df] -z-10 top-36 md:top-40 -right-2 md:-right-30 rounded-l-full"></div>
                </div>
                <div className="text-center md:row-start-1 md:text-start self-center">
                    <h1 className="text-4xl mb-5 font-semibold">A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-5">
                        <Button
                           color='hsl(0, 0%, 97%)'
                           bckgColor='hsl(231, 69%, 60%)'
                        >
                            Get it on Chrome
                        </Button>
                        <Button
                           color='hsl(229, 31%, 21%)'
                           bckgColor='hsl(0, 0%, 97%)'
                        >
                            Get it on Firefox
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default HeroPage;