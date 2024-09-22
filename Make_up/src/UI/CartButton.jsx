export default function CartButton({children, textOnly,...props}){
    let classes = textOnly ? 'px-3 rounded py-1 hover:bg-slate-300 text-lg font-extralight':'px-3 rounded bg-emerald-700 py-1 text-lg font-extralight hover:bg-emerald-800 text-white'
    return <button className={classes} {...props}>{children}</button>
}