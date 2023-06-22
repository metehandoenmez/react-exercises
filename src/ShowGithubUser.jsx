import GithubUser from "./GithubUser"
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";


export default function ShowGithubUser() {

    const {username} = useParams()

    return (
        <div><GithubUser username={username}></GithubUser>
        <br />
        <hr />
        <br />
        <Link to={"/users"}>Back</Link>
        </div>
    )
}