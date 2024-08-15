import Image from "next/image";
import Header from "@/components/Header";
import TrendingSlider from "@/components/TrendingSlider";
import Post from "@/components/Post";

export default function Home() {
  return (
    <>
      <section></section>
      <section>
        <div>
          <TrendingSlider />
        </div>
        <div id="feed"><Post username="itallo" pagName="IFPB" postText="oiiiiiiiiiiiiiiiiiiiiii" image="h" 
        likes="30" comments=" 30"/></div>
        
        </section>
      <section></section>
    </>
  );
}
