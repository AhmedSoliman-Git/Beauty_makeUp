export default function Input({type ,holder,text ,id, ...props}){
    return <>
            <div className="flex flex-col items-start justify-start gap-4 my-5">
                <label className="text-lg font-semibold" htmlFor={id}>{text}</label>
                <input className="w-full lg:w-80 py-2 border px-2" type={type} placeholder={holder} id={id} required {...props} />
            </div>
    </>
}