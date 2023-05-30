function Age(props) {
    return (
        <span>Your age is {props.age || "unknown"}. </span>
    );
}



export default function Welcome(props) {
    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <br />
        <Age age={props.age}></Age>
        </p>
    );
}

