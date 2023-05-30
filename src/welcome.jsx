function Age(props) {
    return (
        <span>Your age is {props.age || "unknown"}. </span>
    ) }



export default function Welcome(props) {

    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <br />
        {(props.age > 18) && <Age age={props.age} />}
        {(props.age < 18) && <p>You are very young! </p>}
        </p>
    );
    }