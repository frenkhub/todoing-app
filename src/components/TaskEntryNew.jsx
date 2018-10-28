import React, { Component } from 'react'
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap'
import PropTypes from 'prop-types'

class TaskEntryNew extends Component {

    state = {
        val: ""
    }

    update = (event) => {
        var val = event.currentTarget.value;
        this.setState(_ => ({ val }));
    }

    create = (e) => {
        e.preventDefault();
        this.props.createTask({ name: this.state.val });
        this.setState(_ => ({ val : ""}));
        e.target.reset();
    }

    render() {

        return (
            <form onSubmit={this.create}>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            onChange={this.update} />
                        <InputGroup.Button>
                            <Button
                                type="submit"
                                disabled={!this.state.val}>
                                <Glyphicon glyph="plus" />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}

TaskEntryNew.propTypes = {
    handleCreateTask: PropTypes.func.isRequired
}

export default TaskEntryNew