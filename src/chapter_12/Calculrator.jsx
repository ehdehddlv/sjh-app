import React, {useState} from 'react';
import TemperatureInput from './TemperatureInput';

// 하위 컴포넌트에서 state 공유하기

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

// 화씨 온도 -> 섭씨 온도
function toCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9;
}

// 섭씨 온도 -> 화씨 온도
function toFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}

// 온도와 온도를 화씨 또는 섭씨로 변경할 함수를 argument로 받아옴
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    
    return rounded.toString();
}

function Calculrator(props){

    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />           
        </div>
    );

}

export default Calculrator;