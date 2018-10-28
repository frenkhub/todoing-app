import React from 'react'
import { ListGroup, ListGroupItem, Button, Glyphicon, Grid, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SessionEntryList = ({ sessions, deleteSession }) => {
    return (
        <ListGroup>
            {
                sessions.map(x =>
                    <ListGroupItem key={x.id}>
                        <Grid fluid={true}>
                            <Row>
                                <Col xs={11}>
                                    <Link to={"/sessions/" + x.id}>
                                        {x.name}
                                    </Link>
                                </Col>
                                <Col xs={1}>
                                    <Button onClick={() => deleteSession(x.id)}>
                                        <Glyphicon glyph="trash" />
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </ListGroupItem>)
            }
        </ListGroup>
    )
}

export default SessionEntryList