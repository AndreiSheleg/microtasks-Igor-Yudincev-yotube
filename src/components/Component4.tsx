import React, { useState } from 'react';
import Component5 from './Component5';

interface Component4Props {
    onCallback: (title: string) => void;
  }

const Component4: React.FC<Component4Props> = ({ onCallback }) => {
    const [isGreen, setIsGreen] = useState(false);

    const callBackHandler = (title: string) => {
        setIsGreen(true)
        onCallback(title)
        console.log('Component4 отрисовался с текстом: ', title)
    }

    return (
        <div className="container">
            <div className={`circle ${isGreen ? 'green' : 'red'}`}></div>
            <Component5 onCallback={callBackHandler}  />
        </div>
    );
};

export default Component4;