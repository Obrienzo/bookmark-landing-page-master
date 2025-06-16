import Button from "../components/Button.jsx";
import ExtensionCard from "../components/ExtensionCard.jsx";

function Extension() {
    return (
        <section className="flex justify-center items-center">
            <div className="p-5 py-20 md:py-40 max-w-5xl">
                <div className="mb-10 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl mb-5 font-bold">Download the extension</h2>
                    <p className="text-zinc-400">
                        We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
                    </p>
                </div>
                {/* To be back on styling the ExtensionCard component*/}
                <div className="extensions flex flex-wrap gap-3.5 mt-14">
                    <ExtensionCard
                        bwsLogo='/src/assets/images/logo-chrome.svg'
                        bwsName='Chrome'
                        version='Minimum version 62'
                        bckg='/src/assets/images/bg-dots.svg'
                    />
                    <ExtensionCard
                        bwsLogo='/src/assets/images/logo-firefox.svg'
                        bwsName='Firefox'
                        version='Minimum version 55'
                        bckg='/src/assets/images/bg-dots.svg'
                    />
                    <ExtensionCard
                        bwsLogo='/src/assets/images/logo-opera.svg'
                        bwsName='Opera'
                        version='Minimum version 46'
                        bckg='/src/assets/images/bg-dots.svg'
                    /> 
                </div>
            </div>
        </section>
    );
}


export default Extension;