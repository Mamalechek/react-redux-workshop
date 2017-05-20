import React from 'react';
import { connect } from 'react-redux';

import Input from './Input';
import CityList from './CityList';
import WeatherModal from './WhetherModal';


const App = function (props) {
    return (
        <div className="app">
            <Input getCities={props.getCities} />
            <CityList
                list={props.list}
                getWeather={props.getWeather}/>
            <WeatherModal
                name={props.weather.curName}
                weather={props.weather.forecast}
                visible={props.weather.visible}
                closeWindow={props.closeWindow}
            />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        list: state.cities.list,
        weather: state.weather,
    }
}

function mapActionsToProps(dispatch) {
    return {
        getCities: text => dispatch({
            type: 'GET_CITIES',
            payload: text,
        }),

        getWeather: name => dispatch({
            type: 'GET_WEATHER_BY_CITY',
            payload: name,
        }),
        closeWindow: () => dispatch({
            type: 'CLOSE_WINDOW',
        })
    }
}

export default connect(mapStateToProps, mapActionsToProps)(App);
