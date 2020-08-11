import React, { useState } from 'react';
import '../styles/sidebarStyles.css';

import TwitterSvg from './TwitterSvg';
import FacebookSvg from './FacebookSvg';
import YoutubeSvg from './YoutubeSvg';
import InstagramSvg from './InstagramSvg';
import ArrowdownSvg from './ArrowdownSvg';
 
class Sidebar extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        dProp: props.sidebarSty,
        dropdownStyle: 'none'
      }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      this.setState({
        dProp: nextProps.sidebarSty
      })
    }
    changeDprop = () => {
      console.log(this.state);
      this.setState({
        dProp: 'none'
      }, () => console.log('hello'))
    }

    changeStyle = () => {

      if(this.state.dropdownStyle === 'none'){
              this.setState({
                  dropdownStyle: 'block'
                })
      }
      else{
              this.setState({
            dropdownStyle: 'none'
        })
      }

    }
    render(){
      return(
        <div className="sidebar-container"
          style={{display: this.state.dProp}}>
          <span class="cross"
            onClick={this.changeDprop}
          >X</span>
          <div className="sidebar"
            >
          <div className="search-form">
            <form>
              <input type="text" placeholder="Search"
              />
            </form>
            </div>

            <div className="shopNfeatures">
              <ul>
                <li className="shop"
                  onClick={this.changeStyle}><a>Shop<ArrowdownSvg /></a>
                  <ul 
                    className="shop-dropdown"
                    style={{display: this.state.dropdownStyle}}>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_720x.png?v=1579871992" className="d-img"/></a></li>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_720x.png?v=1579872011" className="d-img"/></a></li>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_720x.png?v=1579871956" className="d-img"/></a></li>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_720x.jpg?v=1579872033" className="d-img"/></a></li>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_720x.png?v=1579871901" className="d-img"/></a></li>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_720x.jpg?v=1594185739" className="d-img"/></a></li>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_720x.png?v=1579871975" className="d-img"/></a></li>
                    <li><a><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_720x.png?v=1579872074" className="d-img"/></a></li>
                  </ul>
                </li>
                <li><a>Meet the boatheads</a></li>
                <li><a>Boat x sunburn</a></li>
                <li><a>Boat x lfw</a></li>
              </ul>
            </div>

            <div className="socialLinks">
              <ul>
                <li><a><TwitterSvg /></a></li>
                <li><a><FacebookSvg /></a></li>
                <li><a><YoutubeSvg /></a></li>
                <li><a><InstagramSvg /></a></li>
              </ul>
            </div>

            <div className="other-links">
              <ul>
                <li><a>Track your order</a></li>
                <li><a>Log in</a></li>
              </ul>
            </div>
        </div>
        </div>
      )
    }
}

export default Sidebar;