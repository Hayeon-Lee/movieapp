import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [change, setChange] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    //only run once
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => setCoins(json))
    );
    setLoading(false);
  }, []);

  const onChange = (event) => {
    setChange(event.target.value);
    console.log(change);
  };

  useEffect(() => {
    setPrice(change);
  }, [change]);

  const [value, setValue] = useState(0);
  const onInput = (event) => {
    setValue(event.target.value);
  };

  const [converted, setConverted] = useState(0);
  const onClick = (event) => {
    setConverted((price * 1250) / value);
  };
=======
import Home from "./routes/Home";
import Detail from "./routes/Detail";
>>>>>>> MA-FE-Routing

function App() {
  return (
<<<<<<< HEAD
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={change} onChange={onChange}>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <strong>Dollar is {price}</strong>
      </div>
      <div>
        <strong>Won is {price * 1250}</strong>
      </div>
      <hr />
      <div>
        <form>
          <input type="Number" value={value} onChange={onInput} />
          <button type="button" onClick={onClick}>
            Convert
          </button>
        </form>
        <strong>
          한화로 {value}원 있을 때 {converted}개 살 수 있습니다.
        </strong>
      </div>
    </div>
=======
    <Router>
      <Routes>
        <Route path="/movie" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
>>>>>>> MA-FE-Routing
  );
}

export default App;
