import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import events from './events'

const Main = _ =>
  <main role="main">
    {
      events.map((event) =>
        <Container>
          <Row>
            <Col>
              <h2>{event.title}<br/>{event.subtitle}</h2>
              <div>{event.body}</div>
            </Col>
          </Row>
        </Container>
      )
    }
  </main>

export default Main
