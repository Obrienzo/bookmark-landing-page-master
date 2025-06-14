import Button from "../components/Button.jsx";
import Selected from "../components/Selected.jsx";

function Features({ feature, handleDisplay, selected, handleSelection }) {

    return (
        <section className="py-20 flex justify-center items-center">
            <div className="p-5 max-w-5xl">
                <div className="text-center max-w-2xl mx-auto"> 
                    <h2 className="text-3xl mb-5 font-bold">Features</h2>
                    <p>
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="flex flex-col text-center max-w-2xl mx-auto md:grid md:grid-cols-3">
                        <li className="border-b border-t md:border-t-0 border-zinc-200 relative">
                            <Button onClick={() => {
                                handleDisplay(0)
                                handleSelection(1)
                            }}>
                                Simple Bookmark
                            </Button>
                            <Selected
                                selected={selected}
                                value={1}
                            />
                        </li>
                        <li className="border-b border-zinc-200 relative">
                            <Button onClick={() => {
                                handleDisplay(1)
                                handleSelection(2)
                            }}>
                                Speedy Searching
                            </Button>
                            < Selected
                                selected={selected}
                                value={2}
                            />
                        </li>
                        <li className="border-b border-zinc-200 relative">
                            <Button onClick={() => {
                                handleDisplay(2)
                                handleSelection(3)
                            }}>
                                Easy Sharing
                            </Button>
                            <Selected
                                selected={selected}
                                value={3}
                            />
                        </li>
                    </ul>
                    <div className="mt-12 md:grid md:grid-cols-2 md:gap-10">
                        <div className="flex justify-center">
                            <img src={feature.illustration} alt="feature illustration" />
                        </div>
                        <div className="mt-12 text-center md:text-start">
                            <h4 className="mb-6 text-2xl font-semibold">
                                {feature.title}
                            </h4>
                            <p>
                                {feature.description}
                            </p>
                            <div className="hidden md:block mt-10">
                                <Button
                                    color='hsl(0, 0%, 97%)'
                                    bckgColor='hsl(231, 69%, 60%)'
                                >
                                    More info
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Features;