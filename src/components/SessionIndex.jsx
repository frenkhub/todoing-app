import React from'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Session } from '../actions';
import SessionEntryNew from './SessionEntryNew'
import SessionEntryList from './SessionEntryList'

const SessionIndex = ({ sessions, handleCreateSession, deleteSession }) => {
    return (
        <div>
            <h1>Your sessions</h1>
            <hr/>
            <SessionEntryList sessions={sessions} deleteSession={deleteSession} />
            <hr/>
            <SessionEntryNew handleCreateSession={handleCreateSession}/>
        </div>
    )
}

SessionIndex.propTypes = {
    sessions : PropTypes.array
}

const mapStateToProps = state => ({
    sessions : Object.values(state.sessions)
})

const mapDispatchToProps = dispatch => ({
    handleCreateSession : x => dispatch(Session.create(x)),
    deleteSession : x => dispatch(Session.delete(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionIndex);