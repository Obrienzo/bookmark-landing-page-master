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
                className="flex items-center justify-between w-full cursor-pointer"
            >
                <p className="hover:text-red">{question}?</p>
                <div className={`${expand ? 'rotate-180' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path className={`${expand ? 'stroke-red' : ''}`}  fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                </div>
            </button>
            {expand ? <p className="text-start my-3 text-gray-500">{expandContent}</p> : null}
        </div>
    );
}

export default Question;