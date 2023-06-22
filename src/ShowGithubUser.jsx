import GithubUser from "./GithubUser"
import {useParams} from "react-router-dom"


export default function ShowGithubUser() {

    const {username} = useParams()

    return (
        <GithubUser username={username}></GithubUser>
    )
}