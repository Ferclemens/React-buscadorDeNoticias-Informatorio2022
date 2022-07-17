import {APY_KEY, URL, LEN} from '../components/const/Const'

const GetData = async (busqueda, pagina) => {
    if (busqueda != ''){
    const get = await fetch(`${URL}?q=${busqueda}&apiKey=${APY_KEY}&page=${pagina}&pageSize=10&${LEN}`)
    return get.json()
    }
}
export default GetData