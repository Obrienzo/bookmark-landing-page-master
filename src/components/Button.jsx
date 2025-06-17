
function Button({ variant, active, selected, children, isWide=false, isForm=false,  onClick=null }) {
    
    if (variant === 'blue') {
        return (
            <button className={`bg-buttonBlue border-2 rounded-sm text-white py-2 px-4 hover:bg-white hover:shadow-2xl hover:text-buttonBlue cursor-pointer font-medium ${isWide ? 'w-full' : 'w-fit'}`} onClick={onClick}>
                {children}
            </button>
        );
    } else if (variant === 'grey') {
        return (
            <button className={`bg-grey border-2 border-grey rounded-sm text-zinc-500 shadow-zinc-400 shadow-2xs hover:shadow-2xl py-2 px-4 hover:text-blueDark hover:bg-white hover:border-blueDark cursor-pointer font-medium ${isWide ? 'w-full' : 'w-fit'}`} onClick={onClick}>
                {children}
            </button>
        );
    } else if (variant === 'ghost') {
        return (
            <button className={`py-4 px-4 cursor-pointer font-normal hover:text-red ${isWide ? 'w-full' : 'w-fit'} ${active === selected ? 'text-blueDark font-medium' : 'text-zinc-500'}`} onClick={onClick}>
                {children}
            </button>
        );
    } else if (variant === 'red') {
        return (
            <button className={`bg-red border-2 border-red rounded-sm text-white hover:text-red shadow-zinc-400 shadow-2xs hover:shadow-2xl py-1 px-4 hover:bg-transparent hover:border-red cursor-pointer font-normal ${isWide ? 'w-full md:w-fit' : 'w-fit'} ${isForm ? 'hover:text-white py-2.5' : 'text-xs'}`} onClick={onClick}>
                {children}
            </button>
        );
    } else if (variant === 'outline') {
        return (
            <button className={`border-2 border-grey rounded-sm text-slate-50 py-2 px-4 hover:border-red cursor-pointer font-medium ${isWide ? 'w-full' : 'w-fit'}`} onClick={onClick}>
                {children}
            </button>
        );
    }
}


export default Button;