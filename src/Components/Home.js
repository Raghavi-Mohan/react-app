import React, { Component } from 'react'
import Header from './Header';
import Headings from './Headings';
import ContentBlock from './ContentBlock';
import ContentBlockleftImg from './ContentBlockleftImg';
import Footer from './Footer';
import T_ALL_1 from '../Asset/T_ALL_1.png'
import ALL_2 from '../Asset/ALL_2.png'
import me from '../Asset/my.png'




export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
       <Headings  heading="Crafted with Passion, Painted with Purpose"/>
       <ContentBlock text="Step Into the Studio" buttonText="View Studio" src={T_ALL_1} route="products"/>
       <Headings  heading="Mini Treasures, Handcrafted with Heart"/>
       <ContentBlockleftImg text="Pocket & Page Collection" buttonText="View Collection" src={ALL_2} route="crafts">
       <p className="me-1 w-75 text-center">Handcrafted magnets, bookmarks, and keychains—small in size, rich in story.</p>
       </ContentBlockleftImg>
       <Headings  heading="Behind the Brush"/>
       <ContentBlock text="Hi there, I’m Raghavi!!" buttonText="About Me" src={me} route="aboutme">
       <p className="text-center w-75 ms-1">I am a self representing abstract artist from my home studio just outside of Naples, Florida. My artistic process is driven by spontaneity and layered techniques. I create artwork using acrylics and textures to show peaceful and lively moments together.</p>
       </ContentBlock>
       <Footer />
      </div>
    )
  }
}
