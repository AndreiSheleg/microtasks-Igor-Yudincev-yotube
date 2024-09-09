import React, {useRef, useState} from 'react';
import ButtonComponent from './ButtonComponent';

interface Component5Props {
    onCallback: (title: string) => void;
}

const Component5: React.FC<Component5Props> = ({onCallback}) => {
    const [isGreen, setIsGreen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const callBackHandler = () => {
         if (inputRef.current) {
             onCallback(inputRef.current.value)
             inputRef.current.value = ''
        }
        setIsGreen(true)
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <input ref={inputRef}/>
            <button onClick={callBackHandler}>Complete Chain</button>
        </div>
    );
};

export default Component5;