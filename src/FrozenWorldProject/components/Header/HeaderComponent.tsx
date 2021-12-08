// libraries
import React from 'react';

// js
import constants from '../../utils/constants';
import { Button, Header } from './headerStyles';

const HeaderComponent: React.FC = () => {
    // renders
    const AllTabsComponents = () => (
        constants.allTabs.map((v) => {
            // constants
            const isFocus = window.location.pathname.includes(v.path);

            // methods
            const GoToNavigationTab = () => {
                window.location.replace(v.path);
            };

            return (
                <Button key={v.id} onClick={GoToNavigationTab} isFocus={isFocus}>{v.label}</Button>
            );
        })
    );

    // main
    return (
        <Header>
            {AllTabsComponents()}
        </Header>
    );
};

export default HeaderComponent;
