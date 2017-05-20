import store from './store';

const citiesReducer = function (
    state = {},
    action
) {
  switch (action.type) {
    case 'ADD_CITY_LIST': {
        let newState;
        newState = Object.assign({}, state, {
            list: extractCityNames(action.payload),
        });

        return newState;
    }
  default:
      return state;
  }
}

const extractCityNames = function (obj) {
    let cityList;
    if (obj.list.length) {
        cityList = obj.list.map((city) => {
                const { name } = city;
                return name;
            }
        );

        return cityList;
    }

    return null;
};

const weatherReducer = function (
    state = {},
    action
) {
  switch (action.type) {
    case 'GET_WEATHER_BY_CITY': {
       let newState;
        newState = Object.assign({}, state, {
            curName: action.payload,
        });
        return newState;
    }
    case 'ADD_WEATHER': {
        let newState;
        newState = Object.assign({}, state, {
            forecast: extractWhetherData(action.payload),
            visible: true,
        });

        return newState;
    }
    case 'CLOSE_WINDOW': {
        let newState;
        newState = Object.assign({}, state, {
            visible: false,
        });

        return newState;
    }
    default:
      return state;
  }
}

const extractWhetherData = function (obj) {
    const { weather, main, name, coord } = obj;
    const temp =  Math.round((main.temp - 273) * 100) / 100;

    return {
        icon: weather[0].icon,
        description: weather[0].description,
        temp,
    };
}

export {
    citiesReducer,
    weatherReducer,
};
