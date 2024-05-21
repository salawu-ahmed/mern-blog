import { useState } from "react"
import { UserContext } from "./UserContex"

// THIS IS A COMPONENT BECAUSE IT RETURNS JSX
export default function UserContextProvider({ children }) {
    const [userInfo, setUserInfo] = useState({})
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}