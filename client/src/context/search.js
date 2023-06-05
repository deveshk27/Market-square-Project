import { useState,useContext,createContext} from "react";


const SearchContext=createContext();

//using context api for providing tokens to all the components globally without using props to send data

const SearchProvider = ({ children }) => {
    const [auth,setAuth]=useState({
        keyword:"",
        results: [],
    });
    
    return (
        <SearchContext.Provider value={[auth,setAuth]}>
            {children}
        </SearchContext.Provider>
    );
};

//custom hook
const useSearch = () => useContext(SearchContext);

export{ useSearch, SearchProvider };

