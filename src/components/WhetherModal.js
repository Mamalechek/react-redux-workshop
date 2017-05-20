import React from 'react';

class WeatherModal extends React.Component {
    render() {
        if (!this.props.weather)  {
            return (
                <div className="block-modal"></div>
            );
        }

        let forecast = this.props.weather;
        let visible = this.props.visible;

        return (
            <div>
                <div className={"block-modal " + (visible ? "" : "none")}>
                    <div className="window">
                        <button
                            className="close"
                            onClick={this.props.closeWindow}
                        >×</button>
                        <h2>{this.props.name}</h2>
                        <p className="description">
                            <img className="icon"
                                src={`http://openweathermap.org/img/w/${forecast.icon}.png`}
                            />
                            <span>
                                Now: {forecast.description}
                            </span>
                        </p>
                        <p>
                            Temperature: {forecast.temp} C°
                        </p>
                    </div>
                </div>

                <style jsx>{`
                    .block-modal {
                        position: fixed;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .window {
                        position: relative;
                        width: 500px;
                        height: 300px;
                        text-align: center;
                        border: 1px solid rgba(0, 0, 0, .2);
                        background-color: white;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
                    }

                    .close {
                        position: absolute;
                        right: 11px;
                        top: 8px;
                        font-size: 19px;
                        font-weight: bold;
                        color: silver;
                        border: 0;
                        outline: 0;
                        background-color: transparent;
                        cursor: pointer;
                    }

                    .icon {
                        width: 50px;
                        height: 50px;
                        margin-right: 5px;
                    }

                    .description {
                        display: inline-flex;
                        line-height: 50px;
                    }

                    .none {
                        display: none;
                    }

                `}</style>
            </div>
        );
    }
}

export default WeatherModal;
