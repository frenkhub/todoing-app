import React from 'react'
import PropTypes from 'prop-types'

const SessionEntry = ({ session }) => {
    return (<div>{ session.name }</div>)
}

SessionEntry.propTypes = {
    session : PropTypes.shape({
        name : PropTypes.string.isRequired
    }).isRequired
}

export default SessionEntry;