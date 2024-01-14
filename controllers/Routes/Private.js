import {useState , useEffect} from "react"
import { useAuth } from "../../client/src/context/auth"
import {Outlet} from "react-router-dom";
import axios from 'axios';

export default  function PrivateRoute(){
    const [ok, setOk] = useState()
    const [auth, setAuth] = useAuth()

    useEffect(()=>{
        const authCheck = async() =>{
            const res = await axios.get('/api/v1/auth/user-auth',
            {
                headers:{
                    "Authorization":auth?.token
                }
            }
            )
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false);
            }
        }
    }, [])

    useEffect(()=>{},[])
    return ok ?<Outlet></Outlet> :'spinner'
}

