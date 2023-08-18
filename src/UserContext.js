import React, { createContext, useContext, useState, useEffect } from 'react';
import data from './data';
import Loader from './components/Loader';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // I would have implemented it in this way if I had an API

        //     axios.get('API_ENDPOINT_URL')
        //   .then(response => {
        //     setUsers(response.data);
        //     setLoading(false);
        //   })
        //   .catch(error => {
        //     console.error('Error fetching data:', error);
        //     setLoading(false);
        //   });

        setTimeout(() => {
            setUsers(data);
            setLoading(false);
        }, 2000);
    }, [])

    const updateUser = (index, updateUserData) => {
        const updatedUsers = [...users];
        updatedUsers[index] = { ...updateUserData };
        console.log("This is updated", updatedUsers[index]);
        setUsers(updatedUsers);
    }
    const deleteUser = (index) => {
        const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];
        setUsers(updatedUsers);
    }


    const contextValue = {
        users,
        loading,
        updateUser,
        deleteUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {loading ? <Loader /> : children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext);
}