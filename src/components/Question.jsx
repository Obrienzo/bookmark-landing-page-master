import { useState } from "react";

function Question({ question }) {
    const [expand, setExpand] = useState(false);
    const expandContent = 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet.'

    function handleExpand() {
        setExpand(prev => !prev);
    }
    return (
        <div className="border-b-2 border-zinc-200 py-3">
            <button 
                onClick={handleExpand}
                className="flex items-center justify-between w-full"
            >
                <p>{question}?</p>
                <img className={`${expand ? 'rotate-180' : 'rotate-0'}`} src="/src/assets/images/icon-arrow.svg" alt="arrow icon" />
            </button>
            {expand ? <p className="text-start my-3 text-gray-500">{expandContent}</p> : null}
        </div>
    );
}

export default Question;