import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className='col s9'>
                <form onSubmit={this.props.getWeather} >
                <input type="text" name="city" placeholder='City...' required />
                <input type="text" name="country" placeholder='Country...' required /><br/><br/>
                <button className='btn blue waves-effect'>Get Weather</button>
                </form>
            </div>
        )
    }
}
