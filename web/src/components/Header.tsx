import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menusDown, setMenusDown] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [menuType, setTypeOnHover] = useState("")
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  const [ windowSize, setWindowSize] = useState(getWindowDimensions())

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
  }, [])


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
          <span className="logo">
            <img src="/assets/logo.svg" alt="Pitchers Logo"/>  
          </span>  
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li>
                <button onClick={() => dropDownMenuSelection()}>Menus</button>
          
              { menusDown === true && 
                  <div className="menus-drop-down">
                    <div className="menu-triangle"></div>
                  <ul>
                    <li
                      onMouseOver={() => setTypeOnHover("food")}
                      onMouseOut={() => setTypeOnHover("")}
                    ><Link to="/">
                      { menuType === "food" ?  
                        <img src="/assets/menu/cutlery-p.svg" alt="Food"/>
                        :
                        <img src="/assets/menu/cutlery.svg" alt="Food"/>
                      }
                      <span>
                        <h2>Food</h2>
                        <p>Burgers, Pizza, Grill, vegetaraian and more.</p> 
                      </span>
                    </Link></li>
                    <li
                      onMouseOver={() => setTypeOnHover("drinks")}
                      onMouseOut={() => setTypeOnHover("")}
                    ><Link to="/">
                     { menuType === "drinks" ?  
                        <img src="/assets/menu/cocktail-p.svg" alt="Drinks"/>
                        :
                        <img src="/assets/menu/cocktail.svg" alt="Drinks"/>
                      }
                    <span>
                      <h2>Drinks</h2>
                      <p>Beers, Cocktails, Spirits and more.</p>  
                    </span>                   
                      </Link></li>
                  </ul>
                </div>
                }</li>
              <li className="contact-link">
                <span className="btn-bg"></span>
                <Link to="/">Contact</Link>
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
              style={windowSize.width >= 620 || burgerMenu === false ? {height: "0px"} : { height: "200px"}}
               > 
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Menus</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </nav>
        </div>   
    </header>
  )
}
export default Header;
