import axios from 'axios'
import { create } from 'zustand'
import debounce from '../helpers/debounce'

const CryptoStore = create((set) => ({
    coins:[],
    searching:false,
    searched:false,
    trending:[],
    query:"",
    setQuery:(e)=>{
        set({query:e.target.value})
        CryptoStore.getState().searchCoins()
    },
    searchCoins: debounce( async()=>{
        set({searching:true})
        const {query,trending} = CryptoStore.getState()
if(query.length>2){
    const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
    const coins = res.data.coins.map(coin=>{
      return {
          name:coin.name,
          id:coin.id,
          image:coin.large,
          
      }
    })
    set({coins,searching:false,searched:true})
}
else{
set({coins:trending,searching:false,searched:false})
}
},500),

 fetchCoins : async()=>{
    const [res,btcres] = await Promise.all([
 axios.get(`https://api.coingecko.com/api/v3/search/trending`),
 axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)
    ]);
    const btcPrice = btcres.data.bitcoin.usd;


    const coins = res.data.coins.map(coin=>{
        return {
            name:coin.item.name,
            image:coin.item.large,
            id:coin.item.id,
            priceBtc:(coin.item.price_btc).toFixed(10),
           priceUsd:(coin.item.price_btc*btcPrice).toFixed(10),
            
        }
    })
set({coins,trending:coins})
    
    console.log(coins)

}
}))

export default CryptoStore