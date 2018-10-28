import React from 'react'
import TaskEntryList from './TaskEntryList'
import TaskEntryNew from './TaskEntryNew'
import { connect } from 'react-redux'
import { Task } from '../actions'

const SesionPage = ({
    match,
    sessions,
    createTask,
    startTask,
    pauseTask,
    deleteTask
}) => {
    const x = sessions[match.params.id];
    return (
        <div>
            <h1>Session {x.name}</h1>
            <TaskEntryList
                tasks={Object.values(x.tasks)}
                deleteTask={id => deleteTask(x.id, id)}
                startTask={id => startTask(x.id, id)}
                pauseTask={id => pauseTask(x.id, id)} />
            <TaskEntryNew createTask={payload => createTask(x.id, payload)} />
        </div>)
}

const mapStateToProps = state => ({
    sessions: state.sessions
})

const mapDispatchToProps = dispatch => ({
    createTask: (sessionId, payload) => dispatch(Task.create(sessionId, payload)),
    deleteTask: (sessionId, id) => dispatch(Task.delete(sessionId, id)),
    startTask: (sessionId, id) => dispatch(Task.start(sessionId, id, Date.now())),
    pauseTask: (sessionId, id) => dispatch(Task.pause(sessionId, id, Date.now()))
})

export default connect(mapStateToProps, mapDispatchToProps)(SesionPage)