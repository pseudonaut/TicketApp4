import React, {Component} from 'react'
import {Container, Segment, Header, Image, Button, Icon} from 'semantic-ui-react'

const HomeContainer = () => (
    <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 1000, padding: '2em 2em' }}
        vertical
    >
        <Container textAlign='center'>
            <Header
                as='h1'
                content='Distributed Ticketing Application'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0em' }}
            />
            <Image bordered src='/images/logo.png' centered size='huge'/>
            <Header
                as='h2'
                content='Designed for ASU Sun Devil Stadium'
                inverted
                style={{ fontSize: '2em', fontWeight: 'lighter' }}
            />
            <Button color='orange' size='huge'>
                Read the Whitepaper
                <Icon name='right arrow' />
            </Button>
            <Button color='red' size='huge'>
                Meet The Team
                <Icon name='right arrow' />
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p style={{fontSize: '20px'}}>John Quarnstrom, Quintin Scheitl, Thomas Wallace, India Sohal, Scott Olson</p>
        </Container>
    </Segment>
)

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <HomeContainer/>
            </div>
        )
    }
}