
import TrendingSlider from "@/components/TrendingSlider";
import Post from "@/components/Post";
import DropDown from "@/components/DropDown";
import {posts} from "@/app/data/seed"
import LoginModal from "@/components/LoginModal";

export default function Home() {
  return (
    <>
      <section></section>
      <section>
        <div>
          <TrendingSlider />
        </div>
        <div>
          <DropDown />
        </div>
        <div id="feed">
          {posts.map((post) => (<Post id={post.id} username={post.username} postText={post.postText} img={post.img} likes={post.likes} comments={post.comments} pagName={post.pagName}/>))}
          <Post username="itallo" pagName="IFPB" postText="oiiiiiiiiiiiiiiiiiiiiii" image="https://www.ifpb.edu.br/exposicao-112-anos/fotos/etapa-8/ifpb.jpg/@@images/113992bf-f519-434d-93db-87a789341b83.jpeg" 
        likes="30" comments=" 30"/>
        </div>
        
        </section>
      <section></section>
    </>
  );
}
