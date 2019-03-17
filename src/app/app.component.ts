import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { UserStore, IUser } from './store/models/user.model';
import { CartStore, ICart } from './store/models/cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserStore, CartStore]
})
export class AppComponent {
  @select() user$: Observable<IUser>;
  @select() cart$: Observable<ICart>;
  title = 'angular-redux-bootstrap';

  constructor(private ngRedux: NgRedux<IUser>, private userStore: UserStore, private cartStore: CartStore){

  }

  updateUser(id: number, name: string){
    this.ngRedux.dispatch(this.userStore.UpdateUser(id,name));
  }

  addOrUpdateProduct(name:string, qty:number){
    this.ngRedux.dispatch(this.cartStore.insertUpdateProduct(name,qty));
  }
}
