export default function Button({text ,color , bg}){
    return <button style={{
        backgroundColor: `${bg}` ,
        color : `${color}`,
    }} className="px-6 py-4 mt-28 shadow-md tracking-widest hover:bg-black hover:text-white duration-500">{text}</button>
}