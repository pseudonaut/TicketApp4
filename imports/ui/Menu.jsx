import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavigationBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name=='Home') {
            FlowRouter.go('/')
        }
        else if (name=='Tickets') {
            FlowRouter.go('/tickets')
        }
        else if (name=='Roadmap') {
            FlowRouter.go('/roadmap')
        }
    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary size='massive' color='red'>
                    <Menu.Item header>Sun Devil Ticket Booth</Menu.Item>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    <Menu.Item name='Tickets' active={activeItem === 'Tickets'} onClick={this.handleItemClick} />
                    <Menu.Item name='Roadmap' active={activeItem === 'Roadmap'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
