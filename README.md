# AngularReduxBootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Step 1:
 install `@angular-redux/store` with `npm install redux @angular-redux/store —save`

## Step 2:
Redux has 3 main structure:
1. State/Store
2. Actions
3. Reducers

create your application state `IAppState` and its initial state
export interface IAppState {
}
export interface IAppState {
  userState: UserState;
  cartState: CartState;
}

export const INITIAL_STATE: IAppState = {
}
create your root reducer
export function rootReducer(state, action) {
    return state;
}
export const reducers: ActionReducerMap<AppState> = {
  userState: userReducer,
  cartState: cartReducer
};

create your application models

## Activating the application store in app.module.ts

import { NgRedux, NgReduxModule } from '@angular-redux/store';

export class AppModule {
    constructor (ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}

## Define your actions
export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const DELETE_ALL = 'DELETE_ALL'; 

## update your Reducers to handle the actions

export function rootReducer(state:IAppState, action): IAppState {
    switch(action.type){
        case INSERT:
            return state;
        break;
        case UPDATE:
        break;
        ...
    }
}