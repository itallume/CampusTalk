
"use client";
import Image from "next/image";
import Header from "@/components/Header";
import TrendingSlider from "@/components/TrendingSlider";
import Post from "@/components/Post";
import DropDown from "@/components/DropDown";
import {posts} from "@/app/data/seed"
import LoginModal from "@/components/LoginModal";
import React, { useState } from 'react';
import { IoIosInformationCircle } from "react-icons/io";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Header setShowModal={setShowModal} />
      <section></section>
      <section>
        <div>
          <TrendingSlider />
        </div>
        <div>
              <LoginModal showModal={showModal} setShowModal={setShowModal} />
          </div>
        <div>
          <DropDown />
        </div>
        <div id="feed">
          {posts.map((post) => (<Post id={post.id} username={post.username} pagName={post.pagName} postText={post.postText} img={post.img} likes={post.likes} comments={post.comments}  key={post.id}/>))}
          
        </div>
        <div id="paiIuToast">
           
          <p id="uiToast"> <IoIosInformationCircle size={25} />  Recarregue a página para ver novas publicações  <h1 id="uiToast">X</h1>   </p>
          
         
        </div>

        
        </section>
      <section></section>
    </>
  );
}
