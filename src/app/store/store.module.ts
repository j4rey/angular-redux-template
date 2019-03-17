import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { IAppState, INITIAL_STATE } from "./IAppState.model";
import { rootReducer } from "./reducer.store";
@NgModule({
    declarations: [
      
    ],
    imports: [
      
    ],
    providers: [],
    exports: [NgReduxModule]
  })
  export class StoreModule { 
    constructor (ngRedux: NgRedux<IAppState>,devTools: DevToolsExtension) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE,[],
            devTools.isEnabled() ? [devTools.enhancer()] : []);
    }
  }