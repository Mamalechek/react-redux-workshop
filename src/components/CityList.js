import React from 'react';
import ListItem from './ListItem';

export default class CityList extends React.Component {
    render() {
        if (!this.props.list) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <h3 className="choose">Choose the city:</h3>
                <ul className="list">
                    {
                    this.props.list.map((item, index) => (
                        <ListItem
                            key={index}
                            name={item}
                            getWeather={this.props.getWeather}
                        />
                    ))
                    }
                </ul>

                <style jsx>{`
                    .choose {
                        text-align: center;
                    }
                    .list {
                        padding: 0;
                        margin: auto;
                        text-align: center;
                        list-style: none;
                    }
                `}</style>
            </div>
        );
    }
}

