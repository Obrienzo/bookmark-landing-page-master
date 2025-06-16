import Button from "../components/Button.jsx";
import { useState } from "react";

function Form() {
    const [error, setErro] = useState(false);

    function handleSubmitEvent(event) {
        event.preventDefault();
        console.log(event.target.elements.email.value);
    }

    return (
        <section className="bg-[#5368df] text-slate-50 py-14 md:py-20 px-5 text-center">
            <form onSubmit={handleSubmitEvent} className="max-w-md mx-auto">
                <p>35,000+ ALREADY JOINED</p>
                <h3 className="text-2xl md:text-3xl md:mt-5 lg:max-w-2xs lg:mx-auto">Stay up-to-date with what we're doing</h3>

                <div className="flex flex-col gap-2 mt-4 md:mt-8 md:flex-row md:justify-center md:items-center w-full">
                    <p className="flex flex-col grow">
                        <input type="email" name="email" id="email" placeholder="Enter your email address" className={`bg-amber-50 rounded-md placeholder-gray-400 p-3 text-zinc-800 ${error ? 'border-4 border-red-500' : ''}`} />
                        {error ? <span className="text-start text-xs p-1 italic text-slate-50 bg-red-500 rounded-b-md relative -top-1">Whoops, make sure it's an email</span> : null}
                    </p>
                    <Button
                        color='white'
                        bckgColor='orangered'
                    >
                        Contact Us
                    </Button>
                </div>
            </form>
        </section>
    );
}

export default Form;