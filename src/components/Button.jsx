
function Button({ color, bckgColor, children, border, isWide=false, onClick=null }) {
    return (
        <button 
            onClick={onClick} 
            className={`px-4 py-2.5 rounded-sm cursor-pointer ${isWide ? 'w-full' : 'w-fit'}`}
            style={{
                color: color,
                backgroundColor: bckgColor,
                border: border
            }}
        >
            {children}
        </button>
    );
}


export default Button;