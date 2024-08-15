"use client";
import Image from "next/image";
import Header from "@/components/Header";
import TrendingSlider from "@/components/TrendingSlider";
import Post from "@/components/Post";
import DropDown from "@/components/DropDown";
import LoginModal from "@/components/LoginModal";
import React, { useState } from 'react';

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
          <Post username="itallo" pagName="IFPB" postText="oiiiiiiiiiiiiiiiiiiiiii" image="h" 
        likes="30" comments=" 30"/>
        </div>
        
        </section>
      <section></section>
    </>
  );
}
