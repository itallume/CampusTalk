import Image from "next/image";
import Header from "@/components/Header";
import TrendingSlider from "@/components/TrendingSlider";
import Post from "@/components/Post";
import DropDown from "@/components/DropDown";
import LoginModal from "@/components/LoginModal";

export default function Home() {
  return (
    <>
      <section></section>
<<<<<<< HEAD
        <section>
          <div>
              <TrendingSlider />
          </div>


          <div className="flex items-center justify-center h-screen">
      <LoginModal />
    </div>


          <div>
              <DropDown />
          </div>
          <div id="feed">
            <Post username="itallo" pagName="IFPB"/>
          </div>
=======
      <section>
        <div>
          <TrendingSlider />
        </div>
        <div>
          <DropDown />
        </div>
        <div id="feed">
          <Post username="itallo" pagName="IFPB" postText="oiiiiiiiiiiiiiiiiiiiiii" image="h" 
        likes="30" comments=" 30"/>
        </div>
>>>>>>> 07a19f6200e20c8f69487324df9235192af1e5e0
        
        </section>
      <section></section>
    </>
  );
}
