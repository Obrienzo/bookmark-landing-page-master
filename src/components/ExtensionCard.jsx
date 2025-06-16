import Button from "./Button.jsx";

function ExtensionCard({ bwsLogo, bwsName, version, bckg }) {

    function handleExtension(event) {
        console.log(`You have clicked ${bwsName} extension card.`);
    }

    return (
        <article className="h-fit max-w-96 mx-auto shadow-xl rounded-lg">
            <div>
                <div className="bg-no-repeat bg-bottom bg-contain pt-14 pb-8 md:px-16 text-center" style={{
                backgroundImage: `url(${bckg})`
                }}>
                    <img src={bwsLogo} alt={bwsName} className="mx-auto" />
                    <h3 className="text-2xl mt-8 mb-2 font-medium">Add to {bwsName}</h3>
                    <p className="text-zinc-400">{version}</p>
                </div>
                <div className="p-5">
                    <Button
                        onClick={handleExtension}
                        variant='blue'
                        isWide={true}
                    >
                        Add & Install Extension
                    </Button>
                </div>
            </div>
        </article>
    );
}


export default ExtensionCard;