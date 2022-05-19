import React from 'react';

import {PrimaryInput} from './Input.js';

export class FromCalculateMark extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        };

        this.mathAttribute = {
            idField: 'math-mark',
            nameField: 'Math',
            typeField: 'text'
        }
        this.literaryAttribute = {
            idField: 'literary-mark',
            nameField: 'Literary',
            typeField: 'text'
        }
        this.englishAttribute = {
            idField: 'english-mark',
            nameField: 'English',
            typeField: 'text'
        }
    }

    componentDidMount() {
        /*document.getElementById()*/
    };

    render() {
        return(
            <form action="">
                <PrimaryInput
                    htmlAttribute={this.mathAttribute}/>
                <PrimaryInput
                    htmlAttribute={this.literaryAttribute}/>
                <PrimaryInput
                    htmlAttribute={this.englishAttribute}/>
            </form>
        );
    }
}