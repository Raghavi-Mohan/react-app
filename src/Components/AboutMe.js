import React from 'react'
import AboutMeContent from './AboutMeContent';
import Header from './Header';
import Footer from './Footer';
import ab from '../Asset/AB_1.png'
import abme from '../Asset/my_2.png'


export default function AboutMe() {
  return (
    <div>
       <Header />
       <AboutMeContent text="Welcome!" src={ab}>
        <p className="d-flex w-75 ms-3">
        I'm Raghavi Mohan. I am a abstract artist exploring Indian painiting and combining it with textures. I specialize in creating textured, one-of-a-kind art that adds a rich sense of depth and tactile beauty to any space. Each piece is carefully crafted to tell a story through layers, colors, and unique textures, offering a dynamic visual experience that evolves with every viewing angle.
        </p>
       </AboutMeContent>
       <AboutMeContent text="Artist Statement" src={abme}>
        <p className="d-flex justify-content-center align-items-center w-75 ms-5">
        As an abstract artist, my work explores the dynamic interplay between traditional Indian painting and contemporary textural techniques. I am deeply inspired by the rich history and symbolism of Indian art, yet I seek to redefine it by merging it with innovative textures, creating pieces that are both tactile and visually captivating. 
        </p>
       </AboutMeContent>
       <Footer />
    </div>
  )
}
