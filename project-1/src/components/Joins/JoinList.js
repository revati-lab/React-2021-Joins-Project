import JoinItem from './JoinItem';
import classes from './JoinList.module.css';

function JoinList(props) {
    return (
        <ul className={classes.list}>
            {props.joins.map(join =>
                <JoinItem 
                key={join.id} 
                id={join.id} 
                image={join.image}
                title={join.title}
                address={join.address}
                description={join.description}
                />)}
        </ul>
    );
}

export default JoinList;