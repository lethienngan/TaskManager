import { Col, Row, Input, Button, Select, Tag, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import Todo from '../Todo';
import { todoListAfterSearchText } from '../../redux/selectors';
import { todoListReducer as todoListSlice } from './TodoListReducer'



export default function TodoList() {
    const [todoName, setTodoName] = useState()
    const [priority, setPriority] = useState('low')

    const dispatch = useDispatch()
    const todoListRemaining = useSelector(todoListAfterSearchText)
    // const handleAddButtonClick = () => {
    //     dispatch(addTodo_Action({
    //         id: uuidv4(),
    //         name: todoName,
    //         completed: false,
    //         priority: priority,
    //     }))
    //     setTodoName('')
    //     setPriority('low')
    // }
    const handleAddButtonClick = () => {
        if (todoName) {
            dispatch(
                todoListSlice.actions.addTodo({
                    id: uuidv4(),
                    name: todoName,
                    completed: false,
                    priority: priority,
                })
            )
            setTodoName('')
            setPriority('low')
        } else
            return

    }
    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }
    const handleInputPriorityChange = (value) => {
        setPriority(value)
    }
    const handleRemoveButtonClick = () => {
        dispatch(
            todoListSlice.actions.removeCompletedTodo()
        )
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: '400px', overflowY: 'auto' }}>
                {
                    todoListRemaining.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            priority={todo.priority}
                            completed={todo.completed} />
                    ))
                }
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select defaultValue="Medium" value={priority} onChange={handleInputPriorityChange}>
                        <Select.Option value='high' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
            <Divider />
            <Col span={24}>
                <Button type='danger' onClick={handleRemoveButtonClick}>
                    Remove completed Task
                </Button>
            </Col>
        </Row>
    );
}