import { IUser } from "./models/user.model";
import { ICart } from "./models/cart.model";

export interface IAppState {
    user: IUser;
    //cart: ICart;
}

export const INITIAL_STATE = {
    user: {
        id: 1,
        name: 'Alpha'
    },
    cart: {
        products: []
    }
}