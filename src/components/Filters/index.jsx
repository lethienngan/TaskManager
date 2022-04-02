import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { priorityFilter_Action, searchFilter_Action, statusFilter_Action } from '../../redux/actions';
import { filtersReducer as filtersSlice } from './FiltersReducer'

const { Search } = Input;

export default function Filters() {
    const [searchText, setSearchText] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [priorityFilter, setPriorityFilter] = useState([])
    const dispatch = useDispatch()

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value)
        dispatch(filtersSlice.actions.searchFilterChange(e.target.value))
    }
    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value)
        dispatch(filtersSlice.actions.statusFilterChange(e.target.value))
    }
    const handlePriorityChange = (value) => {
        setPriorityFilter(value)
        dispatch(filtersSlice.actions.priorityFilterChange(value))
    }
    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={statusFilter} onChange={handleStatusFilterChange}>
                    <Radio value='all'>All</Radio>
                    <Radio value='completed'>Completed</Radio>
                    <Radio value='todo'>On going</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={priorityFilter}
                    onChange={handlePriorityChange}
                >
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
            </Col>
        </Row>
    );
}