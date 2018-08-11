import {
    ActionReducer,
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
    MetaReducer
} from "@ngrx/store"

import {storeFreeze} from "ngrx-store-freeze"
import {environment } from "../../environments/environment"
import { WebDriverLogger } from "../../../node_modules/blocking-proxy/built/lib/webdriver_logger";


export interface State{
    layout : null;
    router : null;
}

export const reducers : ActionReducerMap<State>= {
    layout:null,
    router:null
}

export function loger(reducer: ActionReducer<State>): ActionReducer<State>{
    return function(state : State, action: any): State {
        console.log("state")
        console.log("action")
        return reducer(state,action);
    }
}
/*
export const MetaReducer: MetaReducer<State>[] = !environment.production?[logger, storeFreeze]: {

}*/