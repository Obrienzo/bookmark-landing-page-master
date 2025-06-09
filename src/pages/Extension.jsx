import Button from "../components/Button.jsx";
import ExtensionCard from "../components/ExtensionCard.jsx";

function Extension() {
    return (
        <section className="min-h-screen">
            <div className="p-5 pb-20">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl mb-5">Download the extension</h2>
                    <p>
                        We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
                    </p>
                </div>
                <div className="flex flex-col gap-3.5">
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