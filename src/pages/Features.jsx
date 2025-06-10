import Button from "../components/Button.jsx";
import Selected from "../components/Selected.jsx";

function Features({ feature, handleDisplay, selected, handleSelection }) {

    return (
        <section className="py-12">
            <div className="p-5">
                <div className="text-center"> 
                    <h2 className="text-2xl mb-5">Features</h2>
                    <p>
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="flex flex-col text-center">
                        <li className="border-b border-t border-zinc-200 relative">
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
                    <div className="mt-12">
                        <div className="flex justify-center">
                            <img src={feature.illustration} alt="feature illustration" />
                        </div>
                        <div className="mt-12">
                            <h4 className="mb-6 text-center">
                                {feature.title}
                            </h4>
                            <p className="text-center">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Features;