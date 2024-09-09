import React, { useState } from 'react';
import Component4 from './Component4';

interface Component3Props {
    onCallback: (title: string) => void;

}

const Component3: React.FC<Component3Props> = ({ onCallback }) => {
    const [isGreen, setIsGreen] = useState(false);

    const callBackHandler = (title: string) => {
        setIsGreen(true)
        onCallback(title)
        console.log('Component3 отрисовался с текстом: ', title)
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component4 onCallback={callBackHandler}  />
        </div>
    );
};

export default Component3;