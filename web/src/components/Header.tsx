import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from "react-router-dom";

interface ComponentState  {
  history: any
}

const Header = ({history} : ComponentState) => {
  const [menusDown, setMenusDown] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [menuType, setTypeOnHover] = useState("")
  
  useEffect(() => {
    const unlisten = history.listen((location: any, action: any) => {
      setMenusDown(false)
      setBurgerMenu(false)
    });
    return () => {
      unlisten();
    }
  }, [history])
  const dropDownMenuSelection = () => {
    if(menusDown === false) {
      setMenusDown(true)
    } else {
      setMenusDown(false)
    }
  }

  const openMenu = () => {
    console.log("Clicked");
    if(burgerMenu === false) {
      setBurgerMenu(true)
    } else {
      setBurgerMenu(false)
    }
  }
  

  return (
    <header className="header">
        <div className="wrapper">
          <NavLink to="/" className="logo">
            <img src="/assets/logo.svg" alt="Pitchers Logo"/>  
          </NavLink>  
          <nav>
            <ul>
              <li><NavLink activeClassName="link-active" exact to="/">Home</NavLink></li>
              <li><NavLink activeClassName="link-active" exact to="/gallery">Gallery</NavLink></li>
              <li>
                <button onClick={() => dropDownMenuSelection()}>Menus</button>
          
              { menusDown === true && 
                  <div className="menus-drop-down">
                    <div className="menu-triangle"></div>
                  <ul>
                    <li
                      onMouseOver={() => setTypeOnHover("food")}
                      onMouseOut={() => setTypeOnHover("")}
                    ><NavLink to="/menus/food">
                      { menuType === "food" ?  
                        <img src="/assets/menu/cutlery-p.svg" alt="Food"/>
                        :
                        <img src="/assets/menu/cutlery.svg" alt="Food"/>
                      }
                      <span>
                        <h2>Food</h2>
                        <p>Burgers, Pizza, Grill, vegetaraian and more.</p> 
                      </span>
                    </NavLink></li>
                    <li
                      onMouseOver={() => setTypeOnHover("drinks")}
                      onMouseOut={() => setTypeOnHover("")}
                    ><NavLink to="/menus/drinks">
                     { menuType === "drinks" ?  
                        <img src="/assets/menu/cocktail-p.svg" alt="Drinks"/>
                        :
                        <img src="/assets/menu/cocktail.svg" alt="Drinks"/>
                      }
                    <span>
                      <h2>Drinks</h2>
                      <p>Beers, Cocktails, Spirits and more.</p>  
                    </span>                   
                      </NavLink></li>
                  </ul>
                </div>
                }</li>
              <li className="contact-link">
                <span className="btn-bg"></span>
                <a href="#booking">Contact</a>
              </li>
            </ul>
          </nav>
          <span className="burger-menu">
            <button onClick={() => openMenu()}>
              {
                burgerMenu === false ? 
                 <img src="/assets/icons/burger-menu.svg" alt="Burger Menu"/>
                
                 :
                <img src="/assets/icons/burger-exit.svg" alt="Burger Exit"/>
              }
               
            </button>
          </span>
          <nav className="responsive-menu" 
              style={ burgerMenu === false ? {height: "0px"} : { height: "250px"}}
               > 
            <ul>
              <li><NavLink activeClassName="link-active" exact to="/">Home</NavLink></li>
              <li><NavLink activeClassName="link-active" to="/gallery">Gallery</NavLink></li>
              <li><NavLink activeClassName="link-active" to="/menus">Menus</NavLink></li>
              <li><NavLink activeClassName="link-active" exact to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>   
    </header>
  )
}
export default withRouter(Header);
