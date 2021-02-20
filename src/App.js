import React,{useState}  from 'react';
import Button from './components/Button';

let startTime;

let timeoutId;

let elapsedTime = 0;

const GameStatus = Object.freeze({
  init:'init',
  start:'start',
  reset:'reset',
  stop:'stop'
});


function App() {
  
  const [time,timeChange] = useState('00:00.000');

  const [status,statusChange] = useState(GameStatus.init);

  const countUp = () => {
    
    const d = new Date(Date.now() - startTime+elapsedTime);
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0');

    timeChange(`${m}:${s}.${ms}`);

    timeoutId = setTimeout(()=>{
      countUp();
    },10);
  };

  const start = () => {

    startTime = Date.now();

    countUp();

    statusChange(GameStatus.start);
  };

  const stop = () => {
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    statusChange(GameStatus.stop);
  }
  
  const reset = () => {
    timeChange('00:00.000');
    elapsedTime = 0;
    statusChange(GameStatus.init);
  };
  
  return (
    <div className="App">
      <h1 className="title">ストップウォッチ</h1>
    <div className="time">{time}</div>
      <Button 
        onStart={start}
        onStop={stop}
        onReset={reset}
        status={status}
      />
    </div>
  );
}

export default App;


