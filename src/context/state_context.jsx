import { createContext,useContext,useState } from "react";
const StateContext=createContext()


export const StateProvider=({children})=>{
  const [closeSideBar,setCloseSideBar]=useState(false)
    const [selectedLink, setSelectedLink] = useState('Home')
return( <StateContext.Provider value={{setCloseSideBar,closeSideBar,selectedLink, setSelectedLink}}>
    {children}
</StateContext.Provider>)
}

export const useStateContext=()=>{
    return useContext(StateContext)
}
 