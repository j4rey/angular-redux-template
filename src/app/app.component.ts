import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IUser } from './store/models/user.model';
import { IAppState } from './store/IAppState.model';
import { UPDATE } from './store/reducer.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() user$;
  title = 'angular-redux-bootstrap';

  constructor(private ngRedux: NgRedux<IAppState>){

  }

  updateUser(id, name){
    console.log(`${id} ${name}`);
    this.ngRedux.dispatch({type:UPDATE,user:{id: id,name:name}});
  }
}
