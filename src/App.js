import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
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
  );
}

export default App;
