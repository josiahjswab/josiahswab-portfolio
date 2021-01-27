import React from 'react';
import Encode from './Encode';
import Decode from './Decode';

export default class Cipher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encodedValue: '',
            encodedMess: '84, 104, 97, 110, 107, 115, 32, 102, 111, 114, 32, 112, 108, 97, 121, 105, 110, 103, 32, 97, 108, 111, 110, 103, 33, 32, 10, 77, 121, 32, 110, 97, 109, 101, 32, 105, 115, 32, 74, 111, 115, 105, 97, 104, 46, 32, 10, 10, 84, 104, 105, 115, 32, 105, 115, 32, 97, 110, 32, 97, 112, 112, 32, 73, 32, 98, 117, 105, 108, 116, 32, 119, 105, 116, 104, 32, 82, 101, 97, 99, 116, 33, 0, 10, 73, 116, 32, 104, 111, 108, 100, 115, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 115, 116, 97, 116, 101, 115, 32, 97, 110, 100, 32, 119, 97, 115, 32, 109, 111, 100, 105, 102, 105, 101, 100, 32, 105, 110, 116, 111, 32, 97, 32, 99, 111, 109, 112, 111, 110, 101, 110, 116, 32, 116, 111, 32, 115, 104, 111, 119, 99, 97, 115, 101, 32, 104, 101, 114, 101, 46, '
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.clickHandler2 = this.clickHandler2.bind(this);
        this.clearEncoded = this.clearEncoded.bind(this);
        this.clearDecoded = this.clearDecoded.bind(this);
        this.travel = this.travel.bind(this);
    }

    travel(event) { //callback fucntion to populate state across the components.
        if(!!event.encodedValue) {
            this.setState({encodedValue: event.encodedValue});
        } else if(!!event.encodedMess) {
            this.setState({encodedMess: event.encodedMess});
        }
    }

    clickHandler() {
        let encodedMess = '';
        let encodeThis = this.state.encodedValue.split('');
        for(var i=0; i < encodeThis.length; i++) {
            encodedMess += encodeThis[i].charCodeAt() + ', ';
        }
        this.setState({encodedMess: encodedMess});
    }
    clickHandler2() {
        let encodedValue = '';
        let decodeThis = this.state.encodedMess.split(',');
        for(var i=0; i < decodeThis.length; i++) {
            encodedValue += String.fromCharCode(decodeThis[i]);
        }
        this.setState({encodedValue: encodedValue});
    }
    clearEncoded() {
        this.setState({
            encodedValue: ''
        });
    }
    clearDecoded() {
        this.setState({
            encodedMess: ''
        });
    }
 
    render() {
        return (
            <div className='container'>
                <div className='row-this'>
                    <Encode 
                        encodedValue={this.state.encodedValue}
                        travel={this.travel}
                        clickHandler={this.clickHandler}
                        clearEncoded={this.clearEncoded}
                    />
                    <Decode 
                        encodedMess={this.state.encodedMess}
                        travel={this.travel}
                        clickHandler2={this.clickHandler2}
                        clearDecoded={this.clearDecoded}
                    />
                </div>
                <div className='footer'>
                    <p>104, 116, 116, 112, 115, 58, 47, 47, 103, 105, 116, 104, 117, 98, 46, 99, 111, 109, 47, 106, 111, 115, 105, 97, 104, 106, 115, 119, 97, 98, 47, 99, 105, 112, 104, 101, 114, </p>
                    <button 
                        className='footer-button' 
                        onClick={() => {navigator.clipboard.writeText("104, 116, 116, 112, 115, 58, 47, 47, 103, 105, 116, 104, 117, 98, 46, 99, 111, 109, 47, 106, 111, 115, 105, 97, 104, 106, 115, 119, 97, 98, 47, 99, 105, 112, 104, 101, 114, ")}}>Copy
                    </button>
                </div>
            </div>
        );
    }
}

