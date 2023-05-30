function Age(props) {
    if (props.age > 18 && props.age < 65) {return (
        <span>Your age is {props.age || "unknown"}. </span>
    ) }
}



export default function Welcome(props) {
    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <br />
        <Age age={props.age}></Age>
        </p>
    );
}

/*or export default function Welcome(props) {
    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <br />
        {(props.age > 18 && props.age < 65) && <Age age={props.age} />}
        </p>
    );
} */