//React allows us to keep references to direct DOM Elements.
//In order to access those references we have to import "useRef" which is a React hook.
import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewJoinForm.module.css';


function NewJoinForm(props) {
    const titleInputRef = useRef(); // this is to get title value
    const imageInputRef = useRef(); // this is to get image value
    const addressInputRef = useRef(); //this is to get address value
    const descriptionRef = useRef(); //this is to get description value

    function submitHandler(event) {
        event.preventDefault(); // By doing this we are preventing the browser default behaviour of loading when gets form submit
        
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddJoin(meetupData);
    }


    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Join Tilte</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Join Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Join Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Join Description</label>
                    <textarea id="description" required rows="5" ref={descriptionRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Join</button>
                </div>
            </form>
        </Card>
    );
}

export default NewJoinForm;