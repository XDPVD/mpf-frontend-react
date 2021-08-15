import React, { useState, useMemo } from 'react';

// create context
export const UserContext = React.createContext();

export function UserProvider(props) {
    // ###########################
    // ## user object structure ##
    // ###########################
    // googleId: '',
    // name: '',
    // email: '',
    // familyName: '',
    // givenName: '',
    // imageUrl: '',
    // token: '',

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const currentUser = useMemo(() => {
        return {
            user,
            loading,
            setUser,
            setLoading,
        };
    }, [user, loading]);

    return <UserContext.Provider value={currentUser} {...props} />;
}
