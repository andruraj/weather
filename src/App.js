import React, { Component } from 'react'
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "4411ce3c496ff3b079ef3de96745265e";

export default class App extends Component {
  state = {
    temp: '',
    city: '',
    country: '',
    humidity: '',
    desc: '',
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        desc: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temp: '',
        city: '',
        country: '',
        humidity: '',
        desc: '',
        error: data.message
      });
    }
  }
  render() {
    return (
      <div className='container'>
        <div className="wbox">
          <div className="row card-panel white-text pink darken-4 z-depth-3">
            <div className="col s6">
              <Title />
            </div>
            <div className="col s6">
              <Form getWeather={this.getWeather} />
            </div>
          </div>
          <div className={ this.state.city && this.state.country ? 'row card-panel white-text pink darken-4 z-depth-3' : 'row'} >
              <Weather weather={this.state} />
          </div>
        </div>
      </div>
    )
  }
}
