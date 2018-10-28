import React from 'react'
import PropTypes from 'prop-types'
import { Glyphicon, Button, Grid, Col, Row } from 'react-bootstrap'
import { Task, Mix } from '../utils'

const TaskEntry = ({ task, startTask, pauseTask, deleteTask }) => {

    var btn = Task.isInProgress(task) ?
        <Button onClick={pauseTask} className="no-border"><Glyphicon glyph="pause" /></Button> :
        <Button onClick={startTask} className="no-border"><Glyphicon glyph="play" /></Button>;

    return (
        <Row>
            <Col xs={1}>{btn}</Col>
            <Col xs={2}>{task.name}</Col>
            <Col xs={2}>{Mix.formatTime(Task.getTimeConsumed(task, Date.now()))}</Col>
            <Col xs={1}><Button onClick={deleteTask} className="no-border"><Glyphicon glyph="trash" /></Button></Col>
        </Row>
    );
}

TaskEntry.propTypes = {
    task: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}

export default TaskEntry;