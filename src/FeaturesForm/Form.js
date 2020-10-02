import React from 'react';
import Features from './Features';

export default function Form(props) {
    return <form className='main__form'>
            <h2>Customize your laptop</h2>
            <Features updateFeats={props.updateFeats} selectedState={props.selectedState} features={props.features} />
          </form>
}