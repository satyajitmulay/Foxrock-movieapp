/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useFetchDetails(endpoint) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)

    const fetchData = async() =>{
        try {
            setLoading(true);
          const response = await axios.get(endpoint);
          setLoading(false);
          setData(response.data);
        } catch (error) {
          console.log("error",error)
        }
      }

      useEffect(()=>{
        fetchData()
      },[endpoint])

      return {data, loading}
}
