import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import {itemReducer} from "./itemReducer";
import thunk from 'redux-thunk'
import {commentsReducer} from "./commentsReducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'main-root',
    storage
}
const rootReducer = combineReducers({
    items: itemReducer,
    comments:commentsReducer,
    prevItems:itemReducer
})
const persistedReducer=persistReducer(persistConfig, rootReducer)






const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
const Persistor=persistStore(store)
export {Persistor}
export default store