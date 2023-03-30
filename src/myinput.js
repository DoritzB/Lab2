import {useState} from "react";
import "./myinout.css"
export default function ComponentCuInputuriSiButon() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const handleClick = () => {
        alert(`Inputurile sunt: ${input1}, ${input2}, ${input3}`);
        setInput1('');
        setInput2('');
        setInput3('');
    };

    return (
        <div>
            <input type="text" value={input1} onChange={e => setInput1(e.target.value)} />
            <input type="text" value={input2} onChange={e => setInput2(e.target.value)} />
            <input type="text" value={input3} onChange={e => setInput3(e.target.value)} />
            <button onClick={handleClick}>Afiseaza alert</button>
        </div>
    );
}
