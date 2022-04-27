import React, { createContext, useEffect, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(async () => {
        // console.log(userData);
        var user = await JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
            setIsLoggedIn(true);
        }
    }, []);

    return (

        <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
