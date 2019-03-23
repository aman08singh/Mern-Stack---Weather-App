import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
          {/* Props are pretty much like html attributes, so you can name them whatever you want. */}
          {/* Passing the props in onSubmit */}
          {/* onSubmit is going to call this.props.getWeather */}
          <form onSubmit={this.props.getWeather}>
              {/* The name attribute is what we are going to use to fetch the values out of these inputs */}
              <input type="text" name="city" placeholder="City" />
              <input type="text" name="country" placeholder="Country" />
              <button>Get Weather</button>
          </form>
      </div>
    );
  }
}

export default Form;