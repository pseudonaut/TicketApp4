import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavigationBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name=='Home') {
            FlowRouter.go('/')
        }
        else if (name=='Tickets and Events') {
            FlowRouter.go('/tickets')
        }
        else if (name=='Roadmap') {
            FlowRouter.go('/roadmap')
        }
        else if (name=='Login') {
            FlowRouter.go('/login')
        }
        else if (name=='Contracts') {
            FlowRouter.go('/contracts')
        }
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Segment inverted>
                    <Menu inverted pointing secondary size='massive'>
                        <Menu.Item header color='yellow'>Sun Devil Tickets</Menu.Item>
                        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                        <Menu.Item name='Tickets and Events' active={activeItem === 'Tickets and Events'} onClick={this.handleItemClick} />
                        <Menu.Item name='Roadmap' active={activeItem === 'Roadmap'} onClick={this.handleItemClick} />
                        <Menu.Item name='Contracts' active={activeItem === 'Contracts'} onClick={this.handleItemClick} />
                        <Menu.Menu position='right'>
                            <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
                            <Menu.Item name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        )
    }
}
