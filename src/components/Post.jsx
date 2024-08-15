import { FaRegUserCircle } from "react-icons/fa";
import styles from "@/components/styles/Post.modules.css"
import Link from 'next/link'
import Image from "next/image";
import image from "@/image/teste.jpg"
import { FaCommentDots } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";

export default function Post(props){
    return (<>
        <article className="post-card" key={props.id}>
            <div className="header">
                <div id="userIdent">
                    <FaRegUserCircle className="iconUser"/>
                    <h3>@{props.username}</h3>
                </div>
                <h2 id="namePage">
                    <strong>
                        página:  
                        <Link href="/"> {props.pagName}</Link>
                    </strong>
                </h2>
            </div>

            <p id="postText">{props.postText}</p>

            <div id="postImage">
                
                <img id="img" src={props.img} alt="" />
            </div>

        </article>
        <div id="interaction">
            <div id="click">
                <div className="inte icon"><AiOutlineLike /> {props.likes}</div> 
                <div className="inte icon"><FaCommentDots /> {props.comments}</div>
            </div>
            <div className="share2"><CiShare2 size={35} color={"black"} id="share"/></div> 
        

        </div>
        </>
    )
}