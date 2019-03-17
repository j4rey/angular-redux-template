import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { rootReducer } from "./reducer.store";
import { createStore } from "redux";

declare const window: any;

@NgModule({
    declarations: [
      
    ],
    imports: [
      
    ],
    providers: [],
    exports: [NgReduxModule]
  })
  export class StoreModule { 
    constructor (ngRedux: NgRedux<any>) {
        ngRedux.provideStore(createStore(
            rootReducer,
            window.devToolsExtension && window.devToolsExtension()
          ));
    }
  }