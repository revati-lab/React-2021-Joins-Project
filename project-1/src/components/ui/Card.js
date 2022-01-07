import classes from './Card.module.css';

function Card(props) {
    return(
        <div className={classes.card}>
            {props.children} 
            {/* In the JoinItem.js we are wrapping the JSX inside the Card component.
             As the Card has to render the JSX it is rendered using the children element above */}
        </div>
    );
}

export default Card;