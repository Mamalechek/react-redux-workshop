import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(e) {
        if (e.nativeEvent.keyCode === 13) {
            this.props.getCities(e.target.value);
        }
    }

    render() {
        return (
            <div className="header">
                <h3>Enter city name:</h3>
                <input type="text" onKeyPress={this.onKeyPress} />

                <style jsx>{`
                    .header {
                        padding: 20px;
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    input {
                        padding: 10px;
                        width: 80%;
                        font-size: 18px;
                    }
                `}</style>
            </div>
        )
    }
}
