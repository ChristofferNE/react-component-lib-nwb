import t from 'prop-types'
import React, { Component } from 'react'
import '../css/style1.scss'

class Card extends Component {

    render() {
        let { children, ...props } = this.props
        return (
            <div>
                <div className="my-card-container" {...props} >
                    {children}
                </div>
            </div>
        )
    }
}

export default Card