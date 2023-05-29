export default function Welcome(props) {
    return (
        <p>Welcome, {props.name || "User"}!
        <p>Your age is {props.age || "unknown"}.</p>
        </p>
    );
}