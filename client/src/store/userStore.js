import {create} from 'zustand'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'


export const useUserStore=create((set,get)=>({
    user:null,
    setUser:(newUser)=>set({user:newUser}),
    showLogin:false,
    setShowLogin:(newShowLogin)=>set({showLogin:newShowLogin}),
    backendURL:import.meta.env.VITE_BACKEND_URL,
    token:localStorage.getItem('token'),
    setToken:(newToken)=>set({token:newToken}),
    credit:false,
    setCredit:(newCredit)=>set({credit:newCredit}),
    loadCreditsData:async ()=>{
        try {
            const {data}=await axios.get(get().backendURL+'/api/user/credits',{headers:{token:get().token}})
            console.log("Backend response for credits:", data);
            if(data.success){
                set({credit:data.credits,user:data.user})
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    },
    logout:()=>{
        localStorage.removeItem('token')
        set({token:'',user:null})
    },
    generateImage:async (prompt,navigate)=>{
        try {
           const {data}= await axios.post(get().backendURL+'/api/image/generate-image',{prompt},{headers:{token:get().token}})
           console.log("Image generation response:", data);
           if(data.success){
            get().loadCreditsData()
            return data.resultImage
           }else{
            toast.error(data.message)
            if(data.creditBalance===0){
                navigate('/buy')
            }
           }
        } catch (error) {
            toast.error(error.message)
        }
    }

    

}))