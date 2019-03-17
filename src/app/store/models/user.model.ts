import { NgRedux } from "@angular-redux/store";
import { Injectable } from "@angular/core";

export interface IUser{
    id: number;
    name: string;
}

export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const DELETE_ALL = 'DELETE_ALL';

const INITIAL_USER_STATE = {id: 1, name:'Charlie'};

export interface UserAction {
    type:string,
    user: IUser
}

export function userReducer(state:IUser = INITIAL_USER_STATE, action:UserAction): IUser {
    console.log('user:');
    console.log(state);
    console.log(action)
    switch(action.type){
        case INSERT:
            return state;
        break;
        case UPDATE:
        return {...action.user};
        break;
        default:
        return state;
    }
}

@Injectable()
export class UserStore{
    UpdateUser(id,name){
        return {type:UPDATE,user:{id: id,name:name}};
    }
}