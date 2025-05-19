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
        <p className="d-flex justify-content-center align-items-center w-75 ms-5">
        I'm Raghavi Mohan. I am a abstract artist exploring Indian painiting and combining it with textures. I specialize in creating textured, one-of-a-kind art that adds a rich sense of depth and tactile beauty to any space. Each piece is carefully crafted to tell a story through layers, colors, and unique textures, offering a dynamic visual experience that evolves with every viewing angle. My work is designed to evoke emotion, spark conversation, and transform your home or office into a gallery of personal expression. Whether it's abstract, contemporary, or nature-inspired, my art is all about creating a connection between texture, light, and space. Every brushstroke is a step towards bringing a fresh perspective to your walls, inviting you to interact with the artwork in a way that flat, traditional paintings cannot.
        </p>
       </AboutMeContent>
       <AboutMeContent text="Artist Statement" src={abme}>
        <p className="d-flex justify-content-center align-items-center w-75 ms-5">
        As an abstract artist, my work explores the dynamic interplay between traditional Indian painting and contemporary textural techniques. I am deeply inspired by the rich history and symbolism of Indian art, yet I seek to redefine it by merging it with innovative textures, creating pieces that are both tactile and visually captivating. Through the use of layers, colors, and intricate textures, my art tells stories that are not just seen, but felt. Each piece is a reflection of my exploration into the complex relationship between light, space, and form. I strive to evoke emotion and spark conversation, inviting the viewer to engage with the work from different angles, allowing it to evolve and shift with each encounter.        
        </p>
       </AboutMeContent>
       <Footer />
    </div>
  )
}
