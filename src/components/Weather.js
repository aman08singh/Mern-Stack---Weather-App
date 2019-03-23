import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        {/* Using props to assign the values we get from the state */}
        {/* Using AND operator for displaying the paragraph only when the button is clicked */}
        {/* If this.props.city and this.props.country returns true only ehrn the location text and its value is shown. And same fro the remaining text */}
        { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
        { this.props.temperature && <p>Current Temperature: { this.props.temperature }°C</p> }
        { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
        { this.props.description && <p>Details: { this.props.description }</p> }
        { this.props.error && <p>{ this.props.error }</p> }
      </div>
    );
  }
}

export default Weather;
