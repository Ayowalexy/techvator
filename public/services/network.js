import urls from "./routes";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const getToken = async () => {
    const userData = await AsyncStorage.getItem('userData');
    return {
        refreshToken: JSON.parse(userData)?.refreshToken,
        accessToken: JSON.parse(userData)?.accessToken
    };
  };
  

const getAllBlogPost = async () => {
    const token = await getToken();
    const url = urls.BLOGS.blogs
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token?.accessToken}`,
                "x-refresh-token": token?.refreshToken
            }
        })

        return response
    } catch (e){
        console.log(e)
    }
}   

const deleteABlogPost = async (id) => {
    const token = await getToken();
    const url = `${urls.BLOGS.blogs}/${id}`
    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token?.accessToken}`,
                "x-refresh-token": token?.refreshToken
            }
        })

        return response
    } catch (e){
        console.log(e)
    }
}  


const editABlogPost = async (id) => {
    const token = await getToken();
    const url = `${urls.BLOGS.blogs}/${id}`
    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token?.accessToken}`,
                "x-refresh-token": token?.refreshToken
            }
        })

        return response
    } catch (e){
        console.log(e)
    }
}   

const createABlogPost = async (data) => {
    const token = await getToken();
    const url = `${urls.BLOGS.blogs}`
    try {
        const response = await axios.post(url, 
            JSON.stringify(data),
            {
            headers: {
                Authorization: `Bearer ${token?.accessToken}`,
                "x-refresh-token": token?.refreshToken
            }
        })

        return response
    } catch (e){
        console.log(e)
    }
} 


const createAPost = async (data) => {
    const token = await getToken();
    const url = `${urls.POST.create_post}`
    try {
        const response = await axios.post(url, 
            JSON.stringify(data),
            {
            headers: {
                Authorization: `Bearer ${token?.accessToken}`,
                "x-refresh-token": token?.refreshToken
            }
        })

        return response
    } catch (e){
        console.log(e)
    }
}   





export {
    getAllBlogPost,
    deleteABlogPost,
    editABlogPost,
    createABlogPost,
    createAPost
}
