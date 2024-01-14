import {useState , useEffect} from "react"
import {useAuth} from "../../context/auth"
import { Outlet } from "react-router-dom"
import { token } from "morgan"
import Spiner from "../Spinner/Spiner"
import axios from "axios";

export default function PrivateRoute(){
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()
    useEffect(()=>{
        const autoCheck = async() =>{
            const res =await axios.get('/api/v1/auth/user-auth',{
                headers:{
                    "Authorization":auth?.token
                }
            } )
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token) autoCheck();
    },[auth?.token])

    return ok? <Outlet/>:<Spiner/>
}