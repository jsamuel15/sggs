// libraries
import React from 'react';

// JS
import { Container, Test } from './homeStyles';

const HomePage: React.FC = () => {
    const n1 = 10;
    const n2 = 3;

    // eslint-disable-next-line no-shadow
    function somar(n1: number, n2: number): number {
        return n1 + n2;
    }
    return (
        <Container>
            <Test>
                Soma:
                {' '}
                {somar(n1, n2) + n2}
                clique-me
            </Test>
        </Container>
    );
};

export default HomePage;
