import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import PropTypes from "prop-types";

const AppContext = React.createContext();
const API = "https://thapareactapi.up.railway.app"

const initialState = {
    name:"",
    image:"",
    services: [],
};

export
const AppProvider = ( {children}) => {
     const [state, dispatch] = useReducer(reducer, initialState);

     const updateHomePage = () => {
        return dispatch({ type: "HOME_UPDATE" , payload: {
            name: "Virgin - River",
            image: "https://watermark.lovepik.com/photo/50080/9652.jpg_wh1200.jpg",
        }})
     };
     const updateAboutPage = () => {
        return  dispatch({ type: "ABOUT_UPDATE", payload: {
            name: "Alpine Reign",
            image:"https://img.staticmb.com/mbcontent/images/uploads/2022/5/kaveri-online-services-portal.jpg",
        }})
     }
     
     const getServices = async(url) => {
      try { const res = await axios.get(url);
        const data1 = await res.data;
         dispatch({ type:"GET_SERVICES", payload: data1})
      } catch (error) {
        console.log(error);
      }
     }

        useEffect(() => {
         getServices(API);
        },[])
    return (
     <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage  }}>
     {children}
   </AppContext.Provider>
    )
     
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
    return  useContext(AppContext);
}

AppProvider.propTypes = {
    children: PropTypes.object.isRequired, // Add the missing prop type validation
  };