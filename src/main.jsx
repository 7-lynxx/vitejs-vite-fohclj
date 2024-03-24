import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';

// mounting - initial rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    function tick() {
      // trigger
      setTime(new Date());
    }
    // repeat calling of tick function every 1s
    let timer = setInterval(tick);

    // clean up
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

// function tick() {
root.render(<Clock />);
// }

// setInterval(tick, 1000);

// explain the class implementation
// componentDidMount
// componentWillUnmount
