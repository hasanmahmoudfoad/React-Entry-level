
import { useEffect, useState } from 'react';

export default function FuncComponent1() {
   




    let [count, setCount] = useState(0);
    let [randomNumber, setrandomNumber] = useState(0);
    let [text, setText] = useState('');
    let [items, setItems] = useState([]);

    function handleClickCountIncrement() {
        setCount(count + 1);
    }
    function handleClickCountRandom() {
        setrandomNumber(Math.random());
    }


    useEffect(() => {
        console.log('FuncComponent1 Mounted');
        return () => {
            console.log('FuncComponent1 Unmounted');
        };
    }, []);
    

    useEffect(() => {
        if ( count === 0 && randomNumber === 0 ){return}
        console.log('FuncComponent1 Updated due to count or randomNumber change');
    }, [count, randomNumber]);





    return <>

        <h2>Functional Component 1</h2>
        <p>This is Functional Component 1 created using function syntax</p> 
        <hr/>

        <h3>count : {count} </h3>
        <button onClick={handleClickCountIncrement}>Increment</button>
        <hr/>
        <h3> Random Number : {randomNumber} </h3>
        <button onClick={handleClickCountRandom}>Random Number</button>
        <hr/>


        <h3>text : {text} </h3>
        <button onClick={() => setText('souna')}>Set text</button>
        <hr/>

        <h3>items : {items} </h3>
        <button onClick={() => setItems(['souna', 'ahmed'])}>Set text</button>
        <hr/>


        </>
  
}