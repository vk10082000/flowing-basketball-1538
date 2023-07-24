import axios from 'axios'
import { create } from 'zustand'



const showStore = create((set) => ({
    graphdata:[],
    data:[],
    image:"",
    name:"",
    symbol:"",
    reset:()=>{
set({graphdata:[],data:null})
    },
   fetchdata:async(id)=>{
    const [graphres,datares] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=121`),
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
    ])

const graphdata = graphres.data.prices.map(price=>{
    const [timestamp,p] =price
    const date = new Date(timestamp).toLocaleDateString("en-us")
    return {
        Date: date,
        Price:p,
        }
})
console.log(datares.data)
set({data:datares.data,graphdata,image:datares.data.image.large,symbol:datares.data.symbol,name:datares.data.name})

},


}))

export default showStore