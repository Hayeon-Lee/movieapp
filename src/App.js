import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [change, setChange] = useState();
  
  useEffect(()=>{
    //only run once
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json()
    .then((json)=>setCoins(json)));
    setLoading(false);
  }, []);

  const onChange = (event) => {
    setChange(event.target.value);
    console.log(change);
  }

  return (
    <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> : 
        <select value = {change} onChange = {onChange}>
            {coins.map((coin)=><option>{coin.name} ({coin.symbol}): {coin.quotes.USD.price}</option>)}
        </select>}
        
    </div>
  );
}

export default App;