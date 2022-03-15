/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

// JS
import {
    Button,
} from './botaoStyles';

const BotaoComponents: React.FC = () => {
    type Props = {
        Text: string;
        clickFn: (txt: string) => void;
    }

    const handleClick = () => {
        clickFn('Pedro');
    };
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <>
            <Button onClick={handleClick}>{Text}</Button>
        </>
    );
};

export default BotaoComponents;
function clickFn(arg0: string) {
    throw new Error('Function not implemented.');
}
