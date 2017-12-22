import React, { Component } from 'react'
import { render } from 'react-dom'

import Card from '../../src/card'
import MyHeader from '../../src/header';
import MyDescriptionText from '../../src/description'

class Demo extends Component {

    render() {
        var style = {
            "min-height": "30px",
            "min-width": "100px",
            "font-size": "2em",
            "border": "1px solid black" 
        }

        return <div>
            <h2>Component demo</h2>
            <Card style={style}>
                <MyHeader text="x-Large-Header" className="x-large-header"></MyHeader>
                <MyHeader text="Large-Header" className="large-header"></MyHeader>
                <MyHeader text="normal-Header"></MyHeader>
                <MyDescriptionText text="this is a description on the card"></MyDescriptionText>
                <MyDescriptionText text="this is a description on the card" className="large-description"></MyDescriptionText>
            </Card>
        </div>
    }
}

render(<Demo />, document.querySelector('#demo'))
