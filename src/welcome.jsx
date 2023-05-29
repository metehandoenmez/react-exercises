export default function Welcome(props) {
    return (
        <p>Welcome, <strong>{props.name || "User"}</strong>!
        <p>Your age is {props.age || "unknown"}.</p>
        </p>
    );
}