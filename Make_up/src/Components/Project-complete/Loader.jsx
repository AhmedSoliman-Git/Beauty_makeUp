import ClockLoader from "react-spinners/ClockLoader";
export default function Loader({loading}){
    
    return <>
    <div className='w-full h-screen fixed z-20 flex justify-center items-center bg-slate-100 text-white'>
        <ClockLoader
        color='black'
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>

    </>
}

