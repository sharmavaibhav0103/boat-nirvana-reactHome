import React from 'react';
import Sidebar from './Sidebar';
import '../styles/headerStyles.css';

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      cartValue: '',
      sidebarOpen: 'none'
    }
  }
  hello = () => {
    this.setState({
      sidebarOpen: 'block'
    })
  }

  render(){
      return(
        <>
          <Sidebar sidebarSty={this.state.sidebarOpen}/>
          <div className="header-container">
            <div className="hamburger-container"
              onClick={this.hello}>
              <div className='hamburger'>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>

            <div className="header-logo-container">     <img    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x.png?v=1572853713"
                alt="icon"
                className="header-logo"
                />
            </div>

            <div className="cart-container">
              <div className="cart-value">
              (({ this.state.cartValue }))
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-bag"><title>Cart</title><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
          </div>
      </>
      )
  }
}

export default Header;