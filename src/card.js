import t from 'prop-types'
import React, { Component } from 'react'
import '../css/style1.css'

class Card extends Component {

    render() {
        let { children, ...props } = this.props
        return (
            <div className="my-card-container" {...props} >
                {children}
            </div>
        )
    }
}

export default Card