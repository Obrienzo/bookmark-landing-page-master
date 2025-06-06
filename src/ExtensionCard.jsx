import Button from "./Button.jsx";

function ExtensionCard({ bwsLogo, bwsName, version, bckg }) {

    function handleExtension(event) {
        console.log(`You have clicked ${bwsName} extension card.`);
    }
    return (
        <article>
            <div className="max-w-80 mx-auto shadow-xl rounded-lg">
                <div className="bg-no-repeat bg-bottom bg-contain pt-14 pb-8 text-center" style={{
                backgroundImage: `url(${bckg})`
                }}>
                    <img src={bwsLogo} alt={bwsName} className="mx-auto" />
                    <h3 className="text-xl mt-8 mb-2 font-medium">Add to {bwsName}</h3>
                    <p>{version}</p>
                </div>
                <div className="p-5">
                    <Button
                        onClick={handleExtension}
                        color='hsl(0, 0%, 97%)'
                        bckgColor='hsl(231, 69%, 60%)'
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