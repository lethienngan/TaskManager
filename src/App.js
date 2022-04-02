import React from 'react';
import { Typography, Divider } from 'antd'

import TodoList from './components/TodoList';
import Filters from './components/Filters';

import './App.css';

const { Title, Text } = Typography

function App() {
    return (
        <div
            style={{
                width: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                height: '90vh',
            }}
        >
            <Title keyboard style={{ textAlign: 'center' }}>Task Management</Title>
            <Text code style={{ textAlign: 'center' }}>With Redux State Manager</Text>
            <Filters />
            <Divider />
            <TodoList />
        </div>
    );
}

export default App;
