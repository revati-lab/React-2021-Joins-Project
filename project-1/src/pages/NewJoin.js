//Once we are done with sending the HTTP request we have to navigate programmatically
//In React it is easy doing the above navigation using built-in react hook called "useHistory". we import that from react-router-dom.
//we can also create our own react hook.

//import { useHistory } from 'react-router-dom';// In react-router-dom V6 useHistory is replaced by useNavigate()
import { useNavigate } from 'react-router-dom';
import NewJoinForm from "../components/Joins/NewJoinForm";

function NewJoinPage() {
    //const history = useHistory(); //This gives us history object which simply exposes certain methods that allow us to manipulate the browser history for example to away.
    const navigate = useNavigate();

    function addJoinHandler(meetupData) {
        //below is the firebase url which gives access to database we can add our extension to the
        //url below which creates a folders in the database like we did '/joins.json' in the below url
        // '.json' is something firebase required.
        // Important Note: fetch() method by default do "get" request but in order to store data in db 
        //we have to use "post" request. 
        //we have to add data to body and data should typically be JSON format. The most popular data format for 
        //transmitting data through http request.
        //In javascript we can easily create a JSON by using a built-in JSON object and calling the stringify() method.
        //To stringify() method we can pass default JS objects or arrays or values in general
        fetch(
            'https://react-join-app-default-rtdb.firebaseio.com/joins.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json' // this will make crystal clear that request has json data
                }
            }
        ).then(() => { //then() method is used once the request(promise) is completed.
            //.push() method is used to navigate to previous page using back button. This method will stack page on the other pages.
            //.replace method will replace the page to go away but not be used to go back to previous page as push() method.
           // history.replace('/');
           //navigate doesnot require replace method.
           navigate('/');
        });
    }

    return(
        <section>
            <h1>NewJoin page</h1>
            <NewJoinForm onAddJoin={addJoinHandler} />
        </section>
    );
}

export default NewJoinPage;