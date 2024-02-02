import '../style/input.css';
import { useState, useEffect } from 'react';




export function Input({test}){
    const [check,setCheck] = useState(false);
    const [input,setInput] = useState(0)
    

    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);

        if(test.length ===input) {clearInterval(intervalo)}
        }, 1000);

        return () => clearInterval(intervalo);
    }, [input,test.length]); 
    
    const handlerText = e =>  {
        const len = e.target.value.length;
        const current_Text = test.slice(0,len);


        if(current_Text !== e.target.value){
            setCheck(true)
        }else{
            setCheck(false)
            setInput(len)
        }
        
    
    };

    return(
        <>
            <p className='total'>{`${input}/${test.length}`}</p>
            <textarea className={check ? 'input error': 'input' } type='text' onChange={handlerText} />
            <p className={check ? 'option error': 'option' }>{test}</p>
            <p className='total'>{segundos}</p>
        </>
    )
}