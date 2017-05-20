import { createStore, combineReducers, applyMiddleware } from 'redux';
import { citiesReducer, weatherReducer } from './reducers';
import { request } from './middleware';

const store = createStore(combineReducers({
    cities: citiesReducer,
    weather: weatherReducer
}), applyMiddleware(
    request,
));

window.store = store;
Object.defineProperty(window, 'state', {
    get() {
        return store.getState();
    }
});

export default store;
