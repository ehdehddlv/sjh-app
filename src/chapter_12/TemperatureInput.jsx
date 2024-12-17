const scaleNames = {
    c: "섭씨",
    f: "화씨"
};

function TemperatureInput(props){

    // input의 온도값이 변경되면 props를 통하여 상위 컴포넌트의 onTemperatureChange 함수를 호출하여 값을 전달함
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요.(단위 : {scaleNames[props.scale]}) : 
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );

}

export default TemperatureInput;