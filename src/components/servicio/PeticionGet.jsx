import axios from 'axios'
import {APY_KEY, URL, LEN} from '../const/Const'

//ejemplo busqueda: https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page=1&pageSize=10&language=es

const PeticionGet = async (busqueda) => {
  return axios.get(`${URL}?q=${busqueda}&apiKey=${APY_KEY}&page=1&pageSize=10&${LEN}`)
      .then(response => {
        console.log(response.data)
      }).catch(error =>{
        console.log(error);
      })
}

export default PeticionGet