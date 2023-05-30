function Age(props) {
    return (
        <span>Your age is {props.age || "unknown"}. </span>
    ) }



export default function Welcome(props) {

    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <br />
        {(props.age > 18 && props.age < 65 && props.name === "John") && <Age age={props.age} />}
        </p>
    );
    }