//with Redux Toolkit
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';
import authReducer from './contacts/auth-reducer';

//for watching prevState, action, nextState in console
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    logger]

//localStorage
// const persistConfig = {
//     key: 'contacts',
//     storage
// }

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        auth: persistedReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

//обертка над store, которая реализует обновление LocalStorage
export const persistor = persistStore(store);

// export default { store, persistor };

