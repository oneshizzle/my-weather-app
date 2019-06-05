import {Action} from "redux";
import {Weather} from "../../model/weather.model";

export type FetchWeatherAction = Action & {
    longitude: string;
    latitude: string;
}

export type WeathedLoadedAction = FetchWeatherAction & {
    weather : Weather
}