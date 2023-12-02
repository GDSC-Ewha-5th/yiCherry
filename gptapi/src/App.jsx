import { useState } from 'react';
import { getUserData,getUserRepo } from './lib/api.js';
import SearchBar from './components/SearchBar.jsx'
import { Result } from './Result.jsx'

function App() {
    
    // [useState] - loading status & data
    const [userState,setUserState] = useState({
        status:"idle",
        data:null,
        repoData:null,
    })


    // getUserData 
    const getUser = async (name) => {

        //console.log("getUser called with name:",name)
        
        // * pending 
        setUserState({ 
            ...userState, 
            status:"pending" 
        });

        try {

            // userData 
            const data = await getUserData(name);
            if(data === null) throw Error;

            // userRepoData 
            const repoData = await getUserRepo(name);

            // * success 
            setUserState({ 
                status: "resolved", 
                data: data , 
                repoData: repoData 
            });
        }
        catch (e) {
            // * rejected 
            setUserState({ 
                status: "rejected", 
                data:null 
            });
            console.log(e);
        }
    }

    return (
        <>
            <SearchBar getUser={getUser}/>
            <Result userState={userState}/>
        </>
    );
}
export default App;
