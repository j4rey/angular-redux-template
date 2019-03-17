import { Injectable } from "@angular/core";

export interface ICart {
    products: IProducts[];
}

export interface IProducts {
    productname: string;
    quantity: number
}

export const INSERTUPDATE_CART = 'INSERTUPDATE_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const DELETE_ALL_CART = 'DELETE_ALL_CART';

const INITIAL_CART_STATE = { products: [] };

interface CartAction{
    type: string,
    product: IProducts
}

export function cartReducer(state: ICart = INITIAL_CART_STATE, action:CartAction): ICart {
    console.log('cart:');
    console.log(state);
    console.log(action)
    switch (action.type) {
        case INSERTUPDATE_CART:
            let prod: IProducts = state.products.find(x => x.productname === action.product.productname);
            if (prod) {
                prod.quantity += action.product.quantity;
            }
            else {
                state.products.push(action.product);
            }
            return state;
        default:
            return state;
    }
}

@Injectable()
export class CartStore {
    insertUpdateProduct(name: string, qty: number) {
        return { type: INSERTUPDATE_CART, product: { productname: name, quantity: +qty } };
    }
}