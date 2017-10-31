import React, {Component} from 'react'
import TicketsContainer from "./TicketsContainer"

export default class Tickets extends Component {
    render() {
        return (
            <div className="main">
                <TicketsContainer/>
            </div>
        )
    }
}