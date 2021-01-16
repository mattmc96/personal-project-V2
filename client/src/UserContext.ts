import React, { createContext, useEffect, useState } from 'react';

import * as api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;

    Login(user: object): promise<void>;

    Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
};

useEffect(() => {
    const storageUser = sessionStorage.getItem('@App:user');
    const storageToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
});
