import { useState } from 'react'
import  {Input}  from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmouont] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);
 
  const options = Object.keys(CurrencyInfo);
  //onsole.log(options);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmouont(amount);
    setAmount(convertedAmount);
  }

  const convert = () =>{
    setConvertedAmouont( (amount * CurrencyInfo[to]).toFixed(3));
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: "url('https://images.pexels.com/photos/5466791/pexels-photo-5466791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount ={amount}
                            currencyOption = {options}
                            onCurrencyChange = {(currency)=> setFrom(currency)}
                            selectCurrency = {from}
                            //setSelectCurrency = 
                            onAmountChange={(amount)=> setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount ={convertedAmount}
                            currencyOption = {options}
                            onCurrencyChange = {(currency)=> setTo(currency)}
                            selectCurrency = {to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
