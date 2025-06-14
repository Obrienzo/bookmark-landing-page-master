

function Selected({ selected, value }) {
    return(
        <>
        {
            selected === value ? (<div className="absolute bottom-0 left-0 right-0 mx-auto w-40 md:w-44 h-1 bg-orange-500"></div>) : null
        }
        </>
    );
}

export default Selected;