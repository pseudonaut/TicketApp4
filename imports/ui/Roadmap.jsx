import React, {Component} from 'react'
import {Container, Segment, Header, Image} from 'semantic-ui-react'

const RoadmapContainer = () => (
    <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 1000, padding: '2em 2em' }}
        vertical
    >
        <Container text>
            <Header
                as='h1'
                content='Whitepaper'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
            />
            <Header
                as='h1'
                content='Distributed Ticketing Application'
                inverted
                style={{ fontSize: '3em', fontWeight: 'normal' }}
            />
        </Container>
        <br />
        <br />
        <br />
        <Container text textAlign='left'>
            <Header
                as='h1'
                content='Section 1 - Background'
                inverted
                style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
            />
            <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            <br />
            <Header
                as='h1'
                content='Section 2 - The Ticket Industry'
                inverted
                style={{ fontSize: '2em', fontWeight: 'normal' }}
            />
            <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            <br />
            <Header
                as='h1'
                content='Section 3 - Blockchain Application'
                inverted
                style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
            />
            <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            <br />
            <Header
                as='h1'
                content='Section 4 - Security and Reliability'
                inverted
                style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
            />
            <p style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            <Image src='/images/logo.png' centered size='large'/>
            <p style={{fontSize: '20px'}}>John Quarnstrom, Quintin Scheitl, Thomas Wallace, India Sohal, Scott Olson</p>

        </Container>
    </Segment>
)


export default class Roadmap extends Component {
    render() {
        return (
            <div className="main">
                <RoadmapContainer/>
            </div>
        )
    }
}