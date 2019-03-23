import React, { Component } from 'react';
import './App.css';

//Importing local components
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

// After creating the account you will get your API key in the API keys Tab. So paste that key in the API_KEY variable below in between the quotes.
const API_KEY = "";

class App extends Component {
  // State is an object that lives within a component and it is responsible for keeping track of changing data within a component.
  // State contains key value pairs.
  // So the chanbe could be the result of the user interaction, that causes the data to change.
  // The state is only going to change, once we press the button.
  // Initializing the state
  state = 
  {
    // These are the initial state of the object
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  // API key or API tokens are a way for websites to know that you are trying access the data from their database.
  // So when you make an API call to this website, it will get associated to your email account and then when you make the call.
  // This website is going to use your API to figure out who you are and what kind of data you are trying to access.
  // Creating function with arrow functions.
  // Arrow functions basically allow you to use this keyword independently.
  // So where ever you use this keyword, it is going to mean that it is bound to this funtion.
  // So this keyword always gets called it is still going to bound to the component.
  // Before you declare the function put in the keyword async
  getWeather = async (e) =>
  {
    // To prevent a full page refresh. Give the async function a argument e(event).
    // Attribute e is nothing but an event object in JavaScript.
    // Below statement that is e.preventDefault() will prevent the default behaviour that is a full page refresh, when we press the button
    // e.preventDefault signifies single page applications and we basically use react to create single page applications
    e.preventDefault();
    // Using e(event) object to grab the value from form.js
    // Using constants to grab the values
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // This is the url on which we are making the call
    // If you try to access this url you get an object and this object itself, contains a bunch of more objects, that contain a bunch of data.
    // In the url you have to inject the values of the city, country and your API_KEY.
    // So for injecting values we will use template strings.
    // Template strings are just normal strings but they allow you to inject the variables that you have defined, within your files.
    // So after the appid your API_KEY is injected, which is stored in a variable as a string.
    const url_call = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    // Async await is a great way of making http calls and it just makes web requests easy.
    // And then when you are actually going to make the call type await
    // Using fetch api to make the api call.
    // Fetch api is one of the newer method of JavaScript
    // It takes the http url as its parameter
    // We have made a constant, that is taking a function, that is making an API_CALL and then we are converting the API_CALL to JSON format. And we are assigning that to a constant called data.
    const api_call = await fetch(url_call);
    // Converting data from the API to json data.
    // JSON is a readable format that any programming language can understand.
    const data = await api_call.json();
    // Writting condition for handling the error when, the button is clicked without typing the values.
    // SO we are making a check that if the city and country values have been added, i.e., if they return true. Only then we are going to render out our code.
    // Otherwise go to the esle statement.
    if(city && country)
    {
      console.log(data);
      // Setting values of the state
      // In react there is a method called setState, which contains an object and in there you can describe your state values.
      this.setState({
        // These state attributes have the path from the JSON data, in order to have the values.
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      }) 
    }
    // If no values are entered in the text fields, and the button is clicked. This statement will execute
    // An error message will be displayed, of the error code.
    else
    {
      // Setting values of the state
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the city and the country..!!"
      })
    }
  }
  
  render() {
    return (
      <div>
        <Title></Title>
        {/* Passing props in form component. So the form component will have access to the function getWeather in the form.js file */}
        <Form getWeather={this.getWeather}></Form>
        {/* Using props to pass the data of the state to the weather component. */}
        <Weather 
        temperature={this.state.temperature} 
        city={this.state.city} 
        country={this.state.country} 
        humidity={this.state.humidity} 
        description={this.state.description}
        error={this.state.error} ></Weather>
      </div>
    );
  }
}

export default App;
