import React from 'react'
import { ListGroup, ListGroupItem, Button, Glyphicon, Grid, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SessionEntryList = ({ sessions, deleteSession }) => {
    return (
        <Grid>
            {
                sessions.map(x =>
                    <Row key={x.id}>
                        <Col xs={11}>
                            <Link to={"/sessions/" + x.id}>
                                {x.name}
                            </Link>
                        </Col>
                        <Col xs={1}>
                            <Button 
                                onClick={() => deleteSession(x.id)}
                                className="no-border">
                                <Glyphicon glyph="trash" />
                            </Button>
                        </Col>
                    </Row>)
            }
        </Grid>
    )
}

export default SessionEntryList