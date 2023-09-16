import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types'; 
import axios from "axios";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
    name: "",
    image:"",
    services: [],
}

const AppProvider = ({ children }) => {
   const [ state, dispatch ] = useReducer(reducer, initialState);
   
   const options = {
    method: 'GET',
    url: 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby=%7Blat%7D,%7Blng%7D,%7Bradius%7D',
    params: {
      lang: 'en',
      show: 'webcams:image,location'
    },
    headers: {
      'X-RapidAPI-Key': '6591fb0682msh4c5c25fab2bbea7p1b04acjsn28f88eb35d95',
      'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
    }
  };

  const getServices = async (url) => {
    try {
        const response = await  axios.request(url);
    const Data = await response.data.result.webcams
      console.log(Data);
      return dispatch({type: "SERVICES_DATA", payload: Data})
    } catch (error) {
        console.log(error);
    }
    
  }
  

  useEffect(() => { 
    getServices(options);
    },[])

    return (
        <AppContext.Provider
        value={{...state}} >
            { children }
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return ( useContext(AppContext));
}


AppProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export { AppProvider, useGlobalContext}