import React from 'react';
import NavigationBar from '../../imports/ui/Menu.jsx';

export const MainLayout = ({content}) => (
    <div className="main_layout">
        <NavigationBar />
        <main>
            {content}
        </main>
    </div>
)
