

import Form from "../../components/form/Form";
import Notes from "../../components/notes/Notes";
import Alert from "../../components/alert/Alert";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import Loader from "../../components/loader/Loader";

const Home = () => {

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
            fetchNotes()
            // eslint-disable-next-line            
        },[])

    return ( 
        <div>            

            <Alert />

            <Form />

            <div className="py-[10px]">
                <div className="w-[100%] h-[1px] bg-[#887d7d] "></div>
            </div>
            {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}            
        
        </div>
     );
}
 
export default Home;