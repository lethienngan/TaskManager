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
                // flex: '1',
                backgroundColor: '#F2F2F2',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                boxSizing: 'border-box',
                borderRadius: 5,
                height: '100vh',
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
