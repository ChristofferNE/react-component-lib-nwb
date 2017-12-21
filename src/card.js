import t from 'prop-types'
import React, { Component } from 'react'

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