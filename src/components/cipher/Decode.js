import React from 'react';

export default class Decode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            encodedMess: '78, 111, 32, 102, 111, 111, 108, 105, 110, 103, 32, 121, 111, 117, 32, 59, 41, 55357, 56613, '
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({encodedMess: props.encodedMess});
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.props.travel(this.state);
        });
    }

    render() {

        return (
            <div className='code-box'>
                <div>
                    <h4>Decode:</h4>
                </div>
                <textarea name='encodedMess' value={this.state.encodedMess} onChange={this.handleChange} placeholder='Type some code into the other box and click `Encode`'></textarea>
                <div className='row-this-static'>
                    <button className='copy-textarea' onClick={() => {navigator.clipboard.writeText(this.state.encodedMess)}}>Copy</button>
                    <button className='copy-textarea yellow-button' onClick={this.props.clearDecoded}>Clear</button>
                    <button className='copy-textarea green-button' onClick={this.props.clickHandler2}>Decode</button>
                </div>

            </div>
        );
    }
}
