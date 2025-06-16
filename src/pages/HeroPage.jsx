import Button from "../components/Button.jsx";

function HeroPage() {
    return (
        <section className="flex items-center justify-center relative xl:mt-16">
            <div className="p-5 flex flex-col gap-16 mt-16 max-w-5xl md:grid md:grid-cols-2 lg:gap-20">
                <div className="flex justify-center">
                    <img src="/src/assets/images/illustration-hero.svg" alt="hero illustration" className="relative xl:absolute xl:top-5 xl:right-24 z-10" />
                    <div className="w-3/4 md:w-2/4 h-2/6 sm:h-5/12 md:h-3/5 xl:h-4/5 absolute bg-[#5368df] -z-0 top-36 md:top-40 -right-2 md:-right-30 rounded-l-full"></div>
                </div>
                <div className="text-center md:row-start-1 md:text-start self-center">
                    <h1 className="text-4xl lg:text-5xl mb-5 font-semibold lg:leading-tight">A Simple Bookmark Manager</h1>
                    <p className="text-zinc-400">
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="hero-btn flex flex-wrap justify-center md:justify-start gap-2.5 mt-5 lg:mt-8">
                        <Button variant='blue'>
                            Get it on Chrome
                        </Button>
                        <Button variant='grey'>
                            Get it on Firefox
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default HeroPage;