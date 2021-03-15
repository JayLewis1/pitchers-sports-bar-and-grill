import React, { useState, useEffect, useRef } from 'react'

const Map = () => {
  // const [stickyDiv, setStickyDiv] = useState(false);
  // const stickDiv = (ev: MouseEvent) => {
  //   document.getElementById('stick-to-cursor')!.style.transform = 'translateY('+(ev.clientY-540)+'px)';
  //   document.getElementById('stick-to-cursor')!.style.transform += 'translateX('+(ev.clientX-650)+'px)';  
  // } 

  // useEffect(() => {
  //   if(stickyDiv === true) {
  //     document.addEventListener('mousemove', (ev) => stickDiv(ev));
  //   }
  // }, [stickyDiv])
  

  return (
    <div className="map-container">
      <div className="wrapper" >
        <a href="https://www.google.com/maps/place/Pitchers+Sports+Bar+%26+Grill/@51.6426644,-2.6711341,14z/data=!4m12!1m6!3m5!1s0x0:0x2992ebe1c4b69754!2sPitchers+Sports+Bar+%26+Grill!8m2!3d51.6417775!4d-2.6745352!3m4!1s0x0:0x2992ebe1c4b69754!8m2!3d51.6417775!4d-2.6745352" target="_blank" rel="noreferrer">
          <img src="/assets/map/map@2x.jpg" alt="Map"/>
        </a>
          {/* <div id="stick-to-cursor" style={ stickyDiv === true ? {display: "block"} : {display: "none" }}>
            <p>Click the map to see us on google maps.</p>
          </div> */}
      </div>
    </div>
  )
}

export default Map;