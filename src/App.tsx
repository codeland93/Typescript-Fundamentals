import React from 'react';
import Greeting from './Greeting';
import ColorList from './ColorList';
import EvenNumbers from './EvenNumbers';
import UserList from './UserList';

const App: React.FC = () => {
    return (
        <div>
            <h1>TypeScript Fundamentals</h1>
            <Greeting />
            <ColorList />
            <EvenNumbers />
            <UserList />
        </div>
    );
};

export default App;
