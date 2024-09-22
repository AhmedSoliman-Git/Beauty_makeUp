import { useCallback, useEffect, useState } from "react";

async function makeRequest(url,config){
    const response = await fetch(url , config) ;
    const data = response.json();
    if(!response.ok) {
        throw new Error('Waiting for Connection ....')
    }

    return data ;
}

export default function useHttp(url,config,initialValue){
    
    const [data,setDate] = useState(initialValue) ;
    const [loading,setLoading] = useState(false) ;
    const [error,setError] = useState();

        const sendRequest = useCallback(async function sendRequest(fetchedData){
            setLoading(true) ;

            try {
                const dataFe = await makeRequest(url,{...config , body:fetchedData})
                setDate(dataFe);
            }

            catch(error){
                setError(error.message || 'Failed To Get Data')
            }

            setLoading(false)
        },[url,config]) 


        useEffect(()=>{
            if(config && (config.method === 'GET' || !config.method) || !config) 
            sendRequest();

        },[sendRequest,config])
        

        return {
            error ,
            loading ,
            data,
            sendRequest
        }
}