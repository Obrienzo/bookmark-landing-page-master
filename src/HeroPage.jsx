import Button from "./Button.jsx";

function HeroPage() {
    return (
        <section className="h-screen flex items-center justify-center">
            <div className="p-5">
                <div className="flex justify-center">
                    <img src="/src/assets/images/illustration-hero.svg" alt="hero illustration" />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl mb-5">A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2.5 mt-5">
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