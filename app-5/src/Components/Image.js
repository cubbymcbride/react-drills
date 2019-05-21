import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return(
            <div>
                <img width="75%" src={this.props.myImage}/>
                <caption>Tuesdays Amirite?</caption>
            </div>
        )
    }
}