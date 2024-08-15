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
        
        </section>
      <section></section>
    </>
  );
}
