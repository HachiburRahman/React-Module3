import React from 'react';
import Headers from './Headers';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;