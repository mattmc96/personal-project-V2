import { createStore } from 'redux';
import { userReducer } from './reducers/userReducer';
import { types } from './types';

const store = createStore<types>({});
