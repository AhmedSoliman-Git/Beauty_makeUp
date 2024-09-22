export default function Error({Title,message}){
    return <div className="w-1/2 bg-gray-200 rounded-lg py-9 mx-auto my-8 text-center">
        <p className="text-red-600 text-2xl font-bold uppercase tracking-wide">{Title}</p>
        <p>{message}</p>
    </div>
}