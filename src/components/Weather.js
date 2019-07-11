import React from 'react'

export default function Weather(props) {
    let { city, country, desc, humidity, error, temp } = props.weather;
    return (
        <div>
            <div className='container center-align white-text'>
                <table className='highlight'>
                {city && country && <tr><td>Location</td><td>{city}, {country}</td></tr>}
                {temp && <tr><td>Temperature</td><td>{temp}</td></tr>}
                {humidity && <tr><td>Humidity</td><td>{humidity}</td></tr>}
                {desc && <tr><td>Conditions</td><td>{desc}</td></tr>}
                {error && <tr><td>{error}</td></tr>}
                </table>
            </div>
        </div>
    )
}
