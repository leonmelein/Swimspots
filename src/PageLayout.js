import React, { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';

export default function PageLayout() {
    return (
            <>
                <Header/>
                <List/>
            </>
    );
}