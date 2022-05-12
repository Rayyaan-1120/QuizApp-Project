import React,{useContext,createContext,useState} from 'react';

const ScoreContext = createContext()

export const ScoreContextProvider = ({children}) => {
    const [leaderboard,setleaderboard] = useState([])
    const [userData,setuserData] = useState({
        score:0,
        correctAnswers:0,
        wrongAnswers:0,
        userName:""
    })

    return(
        <ScoreContext.Provider
        value={{
            leaderboard,
            setleaderboard,
            userData,
            setuserData
        }}
        >
            {children}
        </ScoreContext.Provider>
    )
}

export const useScore = () => useContext(ScoreContext)