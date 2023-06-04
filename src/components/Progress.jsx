import React, { useState} from 'react'
import './progress.css'

const arr = [
    {
        name: 'HTML',
        link: 'html.com'
    },
    {
        name: 'CSS',
        link: 'css.com'
    },
    {
        name: 'JavaScript',
        link: 'javascript.com'
    },
    {
        name: 'ReactJs',
        link: 'reactjs.com'
    }
]

function Step(props) {
    return (
        <div className={"stepBlock" + (props.selected ? " selected" : "")}>
            <div className="circleWrapper">
                <div className="circle">{props.index + 1}</div>
                <div className='course'>
                    {arr[props.index].name}<br />
                    <a href='/'>{arr[props.index].link}</a>
                </div>
            </div>
            <span>{props.label}</span>
        </div>
    )
}

function StepNavigation(props) {
    return (
        <div className="stepWrapper">
            {props.labelArray.map((item, index) => <Step key={index} index={index} label={item} updateStep={props.updateStep} selected={props.currentStep === index + 1}></Step>)}
        </div>
    )
}

const labelArray = [1, 2, 3, 4]


const Progress = () => {
    const [currentStep, updateCurrentStep] = useState(1);

    function updateStep(step) {
        updateCurrentStep(step);
    }

    const [certificateUrl, SetCertificateUrl] = useState('');
    function handleChange(e) {
        e.preventDefault();
        SetCertificateUrl(e.target.value);
    }
    console.log(certificateUrl)
    return (
        <div>
            <div className="App">
                <StepNavigation labelArray={labelArray} currentStep={currentStep} ></StepNavigation>
                <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
                <input onChange={handleChange} />
                <button className="primaryButton" disabled={currentStep === labelArray.length || !certificateUrl} onClick={() => updateStep(currentStep + 1)}>Next Step</button>
            </div>

        </div>
    )
}

export default Progress