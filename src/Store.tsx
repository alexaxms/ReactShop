import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "./Product/ProductsReducer";
import {IProductsState} from "./Product/ProductsTypes";
import { basketReducer } from "./Basket/BasketReducer";
import { IBasketState } from "./Basket/BasketTypes";

export interface IApplicationState {
    products: IProductsState;
    basket: IBasketState;
}

const rootReducer = combineReducers<IApplicationState>({
    basket: basketReducer,
    products: productsReducer
});

export default function configureStore(): Store<IApplicationState> {
    return createStore(rootReducer, undefined, applyMiddleware(thunk));
}