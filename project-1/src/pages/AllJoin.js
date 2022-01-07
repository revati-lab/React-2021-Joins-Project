import { useState, useEffect } from 'react';
//useEffect is a hook which is used to run some code under some conditions.
//The function passed to useEffect will run after the render is committed to the screen. 
//By default, effects run after every completed render, but you can choose to fire them only
//when certain values have changed.
import JoinList from "../components/Joins/JoinList";

// const DUMMY_DATA = [
//     {
//         id: 'r1',
//         title: 'This is a first Join',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Joinstreet 6, abcde Join City',
//         description: 'This is a first, amazing join which you definetly should not miss. It will be lot of fun!',
//     },
//     {
//         id: 'r2',
//         title: 'This is a second Join',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Joinstreet 7, abcd Join City',
//         description: 'This is a second, amazing join which you definetly should not miss. It will be lot of fun!',
//     },
//     {
//         id: 'r3',
//         title: 'This is a third Join',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Joinstreet 8, abc Join City',
//         description: 'This is a third, amazing join which you definetly should not miss. It will be lot of fun!',
//     },
// ];

//we can render the array of JSX expressions like we did below h1 tag.

function AllJoinPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedJoins, setLoadedJoins] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        //we don't have to configure the object to fetch data as it is defaulted to get.
    fetch(
        'https://react-join-app-default-rtdb.firebaseio.com/joins.json'
        ).then(response => {
            //.json() will also return a promise as well so we will write return in front.
            return response.json();// gives accees to data that automatically converted from json to plain text.
        }).then(data => {
            //we get data in array format and we have to chnage that into json format in below way
            const arrjoins = [];

            for(const key in data) {
                const jsonobjjoins = {
                    id: key,
                    ...data[key]
                };

                arrjoins.push(jsonobjjoins);
            }

            // we can use error handling here after completing the promise if there is any prob fetching data.
            setIsLoading(false);
            setLoadedJoins(arrjoins);
        });
    }, []);// if you add any dependency in [] then that value should change in order to useEffect to execute. we have to add external props or external dependencies if we have any 
   
    if(isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Join page</h1>
            {/* <ul>
                {DUMMY_DATA.map((join) => {
                    return <li key={join.id}>{join.title}</li>;
                })}
            </ul> */}
            <JoinList joins={loadedJoins} />
        </section>
    );
}

export default AllJoinPage;