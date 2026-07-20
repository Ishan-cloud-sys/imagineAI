import {create} from 'zustand'
export const useUserStore=create((set,get)=>({
    user:null,
    setUser:(newUser)=>set({user:newUser})

}))