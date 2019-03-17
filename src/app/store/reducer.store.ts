import { IAppState } from "./IAppState.model";

export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const DELETE_ALL = 'DELETE_ALL'; 

export function rootReducer(state:IAppState, action): IAppState {
    console.log('state:');
    console.log(state);
    console.log('actiont');
    console.log(action)
    switch(action.type){
        case INSERT:
            return state;
        break;
        case UPDATE:
        return {...{user:action.user}};
        break;
        default:
        return state;
    }
}