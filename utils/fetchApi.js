import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) =>{
    const{ data } = await axios.get((url),{
        headers : {
            
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '98bfe3bdf5msh9a2be78da5e6611p1c5335jsn95db6afa55eb'
          }

    });

    return data ;
}