import {create} from 'zustand'
import {assets} from '../assets/assets'
export const useImageStore=create((set,get)=>({
    image:assets.sample_img_1,
    setImage:(newImage)=>set({image:newImage}),
    isImageLoaded:true,
    setIsImageLoaded:(setVar)=>set({isImageLoaded:setVar}),
    loading:false,
    setLoading:(setVar)=>set({loading:setVar}),
    input:'',
    setInput:(newInput)=>set({input:newInput})
}))
