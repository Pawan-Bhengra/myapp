import "./App.css";
// import Profile from "./Components/Profile";
// import Text from "./Components/Text";
import React from "react";
// import Boiler from "./Components/Boiler";
import TempInput from "./Components/TempInput";

// Function section
// function App() {
//   // define obj names and its property fname contains names
//   const names = {
//     fname: "this is to check",
//   };

//   // getGreeting checks the condition and returns output
//   function getGreeting(names) {
//     // return names.fname + " " + names.lname

//     // define getLen which keeps the lenght of the fname
//     const getLen = Object.keys(names.fname).length;
//     if (names.fname && getLen > 1 && getLen < 20) {
//       return `${names.fname}`;
//     } else {
//       return `Enter proper user name`;
//     }
//   }
//   function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

//   function TestCompo(props) {
//     return <h1>test, {props.ad}</h1>;
//   }

//   // This prevent to reload whole page on submit and perform submit action
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("You clicked submit.");
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* greetings pass to the jsx */}

//         <form onSubmit={handleSubmit}>
//           <button type="submit">Submit</button>
//         </form>
//         <h1>hello{getGreeting(names)} </h1>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//         <TestCompo ad="Tony" />
//         <Text nam="test" />
//         <Profile />
//       </header>
//     </div>
//   );
// }

// class section
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timeId = setInterval(() => {
//       this.tick();
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timeId);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { temperature: "" };
//   }

//   handleChange(e) {
//     this.setState = { temperature: e.state.value };
//   }

//   render() {
//     const temperature = this.state.value;
//     return (
//       <div>
//         <div>
//           Enter temprature in celcius:
//           <input value={temperature} onChange={this.handleChange} />
//           <Boiler celcius={parseFloat(temperature)} />
//         </div>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { temperature: "" };
//   }

//   handleChange(e) {
//     this.setState({ temperature: e.target.value });
//   }

//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <div>
//         <fieldset>
//           <legend>Enter temperature in Celsius:</legend>
//           <input value={temperature} onChange={this.handleChange} />
//         </fieldset>
//         <Boiler celsius={parseFloat(temperature)} />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     const temperature = this.props.temperature
//     return (
//       <div>
//         <TempInput scale="c" />
//         <TempInput scale="f" />
//       </div>
//     );
//   }
// }

function Boiler(props) {
  // lifting state up
  // this is boiler function
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  // to calculate fahrenheit to celsius
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  // to calculate celsius to fahrenheit
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TempInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TempInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <Boiler celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default App;
