import { useState } from 'react' 



function MyCard(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="src/images/flower.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ColorButton(props){
  let [color,setColor] = useState("");
  color = props.clr;
  setColor(color);
  const buttonClass = 'bg-'+props.clr+'-600 h-8 px-1 rounded-lg hover:text-lg';
  const changeBg = ()=>{
    document.querySelector('body').style.backgroundColor = color;
  }
  return(
    <button className = {buttonClass} onClick={changeBg}>{capitalizeFirstLetter(props.clr)}</button>
  )
}

function ButtonContainer(){
  return (
    <div className='fixed flex justify-evenly items-center bg-gray-300 bottom-4 w-40 h-12 left-[calc(50%-3rem)] rounded-md'>
      <ColorButton clr="red"/>
      <ColorButton clr="green"/>
      <ColorButton clr="blue"/>
    </div>
  )
}

export function App() {
  // const defaultValue = 0;
  // let [counter,setCounter] = useState(defaultValue);
  // const addValue = ()=>{
  //   setCounter(counter+1);
  // }

  // const removeValue = ()=>{
  //   counter = counter - 1;
  //   if(counter <= 0 ) counter = 0;
  //   //console.log(counter); // **debugging**
  //   setCounter(counter);
  // }
  
  return (
    <>
      <div className='flex justify-evenly mt-2'>
        <MyCard title = "There is a new technology in town!"/>
        <MyCard title = "Noteworthy technology acquisitions 2021"/>
      </div>
      <ButtonContainer/>
    </>
  )
}
