import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './redux-phonebook/phonebook-reducer';
import { contactsApi } from './redux-phonebook/phonebook-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
