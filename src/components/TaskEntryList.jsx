import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button, Glyphicon, Grid, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TaskEntry from "./TaskEntry";

class SessionEntryList extends Component {

    state = {
        nonce: 0,
        refresh: 0
    }

    componentWillMount() {
        var refresher = () => this.setState(old => ({ ...old, nonce: Date.now() }));
        var id = setInterval(refresher, 1000);
        this.setState(old => ({ ...old, refresh: id }));
    }

    componentWillUnmount() {
        clearInterval(this.state.refresh);
    }

    render() {
        var {
            tasks,
            startTask,
            pauseTask,
            deleteTask
        } = this.props;

        return (
            <Grid>
                {
                    tasks.map(x =>
                        <TaskEntry
                            key={x.id}
                            task={x}
                            deleteTask={() => deleteTask(x.id)}
                            startTask={() => startTask(x.id)}
                            pauseTask={() => pauseTask(x.id)} />)
                }
            </Grid>
        )
    }
}

export default SessionEntryList