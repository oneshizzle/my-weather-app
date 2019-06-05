import {Weather} from "./weather.model";

export type WeatherState = {
    weather: Weather
}

export interface StoreState {
    weatherState: WeatherState
}