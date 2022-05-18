import React,{useContext,createContext,useState} from 'react';

const ScoreContext = createContext()

export const ScoreContextProvider = ({children}) => {
    const [leaderboard,setleaderboard] = useState([])
    const [dnd,setdnd] = useState({
        showdraggable: true,
        dropzone:null,
        dropzoneone:null,
        dropzonetwo:null,
        dropzonethree:null,
        dropzonefour:null,
    })
    const [userData,setuserData] = useState({
        score:0,
        correctAnswers:0,
        wrongAnswers:0,
        userName:""
    })

    const [dropzoneone,setdropzoneone] = useState(null)
    const [dropzonetwo,setdropzonetwo] = useState(null)
    const [dropzonethree,setdropzonethree] = useState(null)
    const [dropzonefour,setdropzonefour] = useState(null)

    const [draggableoptionone,setdraggableoptionone] = useState('')
    const [draggableoptiontwo,setdraggableoptiontwo] = useState('')
    const [draggableoptionthree,setdraggableoptionthree] = useState('')
    const [draggableoptionfour,setdraggableoptionfour] = useState('')

    const [draggableoptiononecolor,setdraggableoptiononecolor] = useState(false)
    const [draggableoptiontwocolor,setdraggableoptiontwocolor] = useState(false)
    const [draggableoptionthreecolor,setdraggableoptionthreecolor] = useState(false)
    const [draggableoptionfourcolor,setdraggableoptionfourcolor] = useState(false)

    const [dragscore,setdragscore] = useState(0)

    return(
        <ScoreContext.Provider
        value={{
            leaderboard,
            setleaderboard,
            userData,
            setuserData,
            dnd,
            setdnd,
            dropzoneone,
            setdropzoneone,
            dropzonetwo,
            setdropzonetwo,
            dropzonethree,
            setdropzonethree,
            dropzonefour,
            setdropzonefour,
            draggableoptionone,
            setdraggableoptionone,
            draggableoptiontwo,
            setdraggableoptiontwo,
            draggableoptionthree,
            setdraggableoptionthree,
            draggableoptionfour,
            setdraggableoptionfour,
            draggableoptiononecolor,
            setdraggableoptiononecolor,
            draggableoptiontwocolor,
            setdraggableoptiontwocolor,
            draggableoptionthreecolor,
            setdraggableoptionthreecolor,
            draggableoptionfourcolor,
            setdraggableoptionfourcolor,
            dragscore,
            setdragscore
        }}
        >
            {children}
        </ScoreContext.Provider>
    )
}

export const useScore = () => useContext(ScoreContext)