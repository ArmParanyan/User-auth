import React, {createContext, FC, useContext, useState} from "react";

interface UserContextProps {
    user: User | null;
    login: (email: string, password: string) => void;
    register: (user: User) => void;
}

interface User {
    name: string;
    email: string;
    password: string;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be within a UserProvider");
    }
    return context;
};

const UserProvider: FC = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {
        const storedUser = JSON.parse(localStorage.getItem(email) || "null");
        if (storedUser && storedUser.password === password) {
            setUser(storedUser);
        } else {
            console.log("invalid login");
        }
    };

    const register = (newUser: User) => {
        localStorage.setItem(newUser.email, JSON.stringify(newUser));
        setUser(newUser);
    }

    return (
        <UserContext.Provider  value={{user, login, register}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, useUser };