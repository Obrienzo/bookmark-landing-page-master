import Button from "./Button.jsx";

const featuresList = [
    {
        tab: 1,
        title: 'Bookmark in one click',
        illustration: '/src/assets/images/illustration-features-tab-1.svg',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        tab: 2,
        title: 'Intelligent search',
        illustration: '/src/assets/images/illustration-features-tab-2.svg',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        tab: 3,
        title: 'Share your bookmarks',
        illustration: '/src/assets/images/illustration-features-tab-3.svg',
        description: 'Easly share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
];


function Features() {
    return (
        <section className="min-h-screen">
            <div className="p-5">
                <div className="text-center"> 
                    <h2 className="text-2xl mb-5">Features</h2>
                    <p>
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="flex flex-col text-center">
                        <li className="border-b border-t border-zinc-200">
                            <Button>
                                Simple Bookmark
                            </Button>
                        </li>
                        <li className="border-b border-zinc-200">
                            <Button>
                                Speedy Searching
                            </Button>
                        </li>
                        <li className="border-b border-zinc-200">
                            <Button>
                                Easy Sharing
                            </Button>
                        </li>
                    </ul>
                    <div>
                        {/* Create a component displaying the adequate data for each of the above buttons... */}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Features;