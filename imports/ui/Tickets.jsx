import React, {Component} from 'react'
import {Container, Segment, Header, Image} from 'semantic-ui-react'

const TicketsContainer = () => (
    <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 1000, padding: '2em 2em' }}
        vertical
    >
        <Container textAlign='center'>
            <Header
                as='h1'
                content='Things to Implement:'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0em' }}
            />
            <Header
                as='h2'
                content='Ability to select a ticket, while viewing the appropriate sections.'
                inverted
                style={{ fontSize: '2em', fontWeight: 'lighter' }}
            />
            <Header
            as='h2'
            content='Ability to purchase a ticket through PayPal or Credit Card.'
            inverted
            style={{ fontSize: '2em', fontWeight: 'lighter' }}
            />
            <Header
                as='h2'
                content='Ability to sell tickets to other buyers.'
                inverted
                style={{ fontSize: '2em', fontWeight: 'lighter' }}
            />
            <br />
            <br />
            <Image src='/images/logo.png' centered size='large'/>
            <p style={{fontSize: '20px'}}>John Quarnstrom, Quintin Scheitl, Thomas Wallace, India Sohal, Scott Olson</p>
        </Container>
    </Segment>
)

export default class Tickets extends Component {
    render() {
        return (
            <div className="main">
                <TicketsContainer/>
            </div>
        )
    }
}