
import { useReducer } from "react"
import { FirebaseContext } from "./firebaseContext"
import { firebaseReduser } from "./firebaseReducer"
import axios from "axios"
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types"

const url = 'https://to-do-react-learn-default-rtdb.europe-west1.firebasedatabase.app'

export const FirebaseState =({children}) => {

    const initialState = {
        notes:[],
        loading: true,
    }

    const [state, dispatch] = useReducer(firebaseReduser, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()

        const res = await axios.get(`${url}/notes.json`)
        

        const payload = Object.keys(res.data).map(item => {
            return{
                ...res.data[item],
                id: item,
            }
        })

        dispatch({
            type: FETCH_NOTES, payload
        })
    }

    const addNote = async title => {

        const note = {
            title, date: new Date().toLocaleString()
        }

        try{
            const res = await axios.post(`${url}/notes.json`, note)

            const payload = {
                ...note,
                id: res.data.name
            }

            dispatch({
                type: ADD_NOTE,
                payload
            })
        }catch (e){
            throw new Error(e.message)
        }

        fetchNotes()
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id,
        })
    }

    return(
        <FirebaseContext.Provider value={{
            showLoader, addNote, fetchNotes, removeNote,
            loading: state.loading,
            notes: state.notes,            
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}