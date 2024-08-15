import { FaRegUserCircle } from "react-icons/fa";
import styles from "@/components/styles/Post.modules.css"
import Link from 'next/link'

export default function Post(props){


    return (
        <article className="post-card">
            <div>
                <div id="userIdent">
                    <FaRegUserCircle className="icon"/>
                    <h3>@{props.username}</h3>
                </div>
                <h2>
                    <strong>
                        página: 
                        <Link href="/">
                            {props.pagName}
                        </Link>
                    </strong>
                </h2>
            </div>
        </article>
    )
}