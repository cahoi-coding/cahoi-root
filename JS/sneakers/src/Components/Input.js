import React from 'react';
import PropTypes from 'prop-types';

PrimaryInput.propTypes = {
    htmlAttribute: PropTypes.shape({
        idField: PropTypes.string.isRequired,
        nameField: PropTypes.string.isRequired,
        typeField: PropTypes.string.isRequired,
        placeHolder: PropTypes.string
    }).isRequired,
};

export function PrimaryInput(props){
    return(
        <label htmlFor={props.htmlAttribute.idField}>
            <div className="nameFiled-primary">{props.htmlAttribute.nameField}</div>
            <input className="" type={props.htmlAttribute.typeField} name={props.htmlAttribute.idField} id={props.htmlAttribute.idFiled}/>
        </label>
    );
}