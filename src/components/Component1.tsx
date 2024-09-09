import React, { useState } from 'react';
import Component2 from './Component2';

interface Component1Props {
callBack: ()=>void
}

const Component1: React.FC<Component1Props> = ({ callBack }) => {
    const [isGreen, setIsGreen] = useState(false);

    const callBackHandler = () => {
        setIsGreen(true)
        callBack()
        alert('Звонок из функции callBackHandler Компоненты-1')
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component2 onCallback={callBackHandler}  />
        </div>
    );
};

export default Component1;