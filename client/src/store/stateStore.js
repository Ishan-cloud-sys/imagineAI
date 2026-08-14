import {create} from 'zustand'
export const useStateStore=create((set,get)=>({
    state:'Login',
    setState:(newState)=>set({state:newState})
}))