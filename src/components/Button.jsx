import React from 'react';

    const Button = ({onStart,onStop,onReset,status}) => {
      
        return (
            <div className="button">
                <button className={status === 'start' ? status === 'reset' ? 'disable' : 'disable' : 'able'} onClick={onStart}>Start</button>
                <button className={status === 'start' ? status === 'stop' ? 'disable' : 'able' : 'disable'} onClick={onStop}>Stop</button>
                <button className={status === 'stop' ? status === 'reset' ? 'disable' : 'able' : 'disable'} onClick={onReset}>Reset</button>
            </div>
        );
    };

export default Button;