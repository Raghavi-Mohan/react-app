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
       <ContentBlock text="Explore Paintings" buttonText="View Collection" src={T_ALL_1} route="products"/>
       <Headings  heading="New Ideas"/>
       <ContentBlockleftImg text="Explore Crafts" buttonText="View Collection" src={ALL_2} route="crafts">
       <p>View the latest collection of Original Art</p>
       </ContentBlockleftImg>
       <Headings  heading="Meet The Artist"/>
       <ContentBlock text="Hi there, I’m Raghavi" buttonText="About Me" src={me} route="aboutme">
       <p className="text-center w-75 ms-5">I am a self representing abstract artist from my home studio just outside of Naples, Florida.</p>
       </ContentBlock>
       <Footer />
      </div>
    )
  }
}
