import React, { Component } from 'react'
import { render } from 'react-dom'

import Card from '../../src/card'
import MyHeader from '../../src/header';
import MyDescriptionText from '../../src/description'

class Demo extends Component {

    render() {
        return <div>
            <h2>Component demo</h2>
            <Card>
                <MyHeader text="x-Large-Header" className="x-large"></MyHeader>
                <MyHeader text="Large-Header" className="large"></MyHeader>
                <MyHeader text="normal-Header"></MyHeader>
                <MyDescriptionText text="this is a description on the card"></MyDescriptionText>
                <MyDescriptionText text="this is a description on the card" className="large"></MyDescriptionText>
            </Card>
        </div>
    }
}

render(<Demo />, document.querySelector('#demo'))
