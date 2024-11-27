import axios from "axios";
import { useEffect, useState } from "react";

const useFetchs = (url) => {
    const [data,setData]=useState(null);
    const fetchData=async()=>{
        try {
            let res=await axios.get(url);
            setData(res.data); 
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        fetchData();
    },[url])
    return [data];
}
 
export default useFetchs ;