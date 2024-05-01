import React, { createContext, useContext, useState } from 'react'


const UserContext = createContext();

export default function UserProvider({children}) {
    const [user,setUser] = useState(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
  
  )
}

export function useUser (){
    const currentUser = useContext(UserContext);
    if(currentUser === undefined) throw new Error ("was used outside of UserProvider");
    return currentUser;
}