//with Redux Toolkit
import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
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
import authReducer from './auth/auth-slice';

//for watching prevState, action, nextState in console
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    logger]

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

//обертка над store, которая реализует обновление LocalStorage
export const persistor = persistStore(store);


