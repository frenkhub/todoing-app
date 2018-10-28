import React from 'react'
import PropTypes from 'prop-types'
import { Glyphicon, Button, Grid, Col, Row } from 'react-bootstrap'
import { Task, Mix } from '../utils'

const TaskEntry = ({ task, startTask, pauseTask, deleteTask }) => {

    var btn = Task.isInProgress(task) ?
        <Button onClick={pauseTask}><Glyphicon glyph="pause" /></Button> :
        <Button onClick={startTask}><Glyphicon glyph="play" /></Button>;

    return (
        <Grid>
            <Row>
                <Col xs={3}>{btn}</Col>
                <Col xs={3}>{task.name}</Col>
                <Col xs={3}>{Mix.formatTime(Task.getTimeConsumed(task, Date.now()))}</Col>
                <Col xs={1}><Button onClick={deleteTask}><Glyphicon glyph="trash"/></Button></Col>
            </Row>
        </Grid>
    );
}

TaskEntry.propTypes = {
    task: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}

export default TaskEntry;