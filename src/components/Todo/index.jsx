import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { checkCompletedTodo_Action } from '../../redux/actions';
import { todoListReducer as todoSlice } from '../TodoList/TodoListReducer'

const priorityColorMapping = {
    high: 'red',
    medium: 'blue',
    low: 'gray',
};

export default function Todo({ id, name, priority, completed }) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch()

    const toggleCheckbox = (e) => {
        setChecked(!checked);
        dispatch(
            todoSlice.actions.checkCompletedTodo({
                id,
                completed: e.target.checked
            })
        )
    };

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >

            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
                {priority}
            </Tag>
        </Row>
    );
}