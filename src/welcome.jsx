function Age(props) {
    if (props.age) {return (
        <span>Your age is {props.age}. </span>
    )}
}



export default function Welcome(props) {
    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <br />
        <Age age={props.age}></Age>
        </p>
    );
}


/*or
 export default function Welcome(props) {
    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <br />
        {props.age && <Age age={props.age} />}
        </p>
    );
}
*/