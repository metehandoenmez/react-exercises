function Age(props) {
    if (props.age > 18) {return (
        <span>Your age is {props.age}. </span>
    )}
    else if (props.age < 18 ) {return (
        <span>You are not old enough. </span>
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
        {props.age > 18 && <Age age={props.age} />}
        </p>
    );
}
*/