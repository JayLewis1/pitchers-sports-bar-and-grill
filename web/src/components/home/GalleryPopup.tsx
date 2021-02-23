import React, { useState } from 'react'
//Redux
import { connect, ConnectedProps } from "react-redux";

interface ComponentProps {
  gallery: {
    toggle: boolean
  }
}

const mapState = (state:ComponentProps ) => ({
  gallery: state.gallery
})

const mapDispatch = {
  toggleGallery : (payload: boolean) => ({type: "TOGGLE_GALLERY", payload: payload})
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  index : number
}

const GalleryPopup = ({index, toggleGallery}:Props ) => {
  const [imgIndex, setImgIndex] = useState(index);

  const changeImgLeft = () => {
    let newIndex = imgIndex - 1;
    if(newIndex < 1) {
      newIndex = 5;
      setImgIndex(newIndex);
    } else {
      setImgIndex(newIndex);
    }
  }
  const changeImgRight = () => {
    let newIndex = imgIndex + 1;
    if(newIndex > 5) {
      newIndex = 1;
      setImgIndex(newIndex);
    } else {
      setImgIndex(newIndex);
    }
  }
  const exitGallery = () => {
    console.log("exit gallery");
    toggleGallery(false)
  }

  return (
    <div className="gallery-popup">
        <div className="img-wrapper">
            <img src={`/assets/photos/g${imgIndex}@2x.jpg`} alt="Gallery photo"/>
            <span className="button-wrapper">
              <button onClick={() => changeImgLeft()}>left</button>
              <button onClick={() => exitGallery()} className="exit-btn">exit gallery</button>
              <button onClick={() => changeImgRight()}>right</button>
            </span>
        </div>
    </div>
  )
}
export default connector(GalleryPopup);