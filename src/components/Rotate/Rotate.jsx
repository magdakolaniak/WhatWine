import { useState } from 'react';
import './Rotate.css';
import wine from '../Carousel/wine.json';
import { useHistory } from 'react-router';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext, useEffect } from 'react';
import axios from 'axios';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

export default function Rotate(wines) {
  const [activeSlide, setactiveSlide] = useState(0);

  const history = useHistory();
  const { setDetailed, query, mainData } = useContext(LoginContext);

  const BASEUrl = process.env.REACT_APP_API;
  const searchURL = BASEUrl + `/search/${query}`;

  // useEffect(() => {
  //   const getWines = async () => {
  //     if (!query) {
  //       let wines = await axios(BASEUrl);
  //       console.log('no query here', wines.data);
  //       setData(wines.data);
  //     } else {
  //       let wines = await axios(searchURL);
  //       console.log('with query here', wines.data);
  //       setData(wines.data);
  //     }
  //   };
  //   getWines();
  // });

  const next = () =>
    activeSlide < mainData.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  // function handleTouchStart(evt) {
  //   const firstTouch = evt.touches[0];
  //   settouches({
  //     ...touches,
  //     xDown: firstTouch.clientX,
  //   });
  // }

  // function handleTouchEnd(evt) {
  //   const firstTouch = evt.changedTouches[0];
  //   settouches({
  //     ...touches,
  //     xUp: firstTouch.clientX,
  //   });
  //   if (touches.xDown > touches.xUp) {
  //     next();
  //   } else {
  //     prev();
  //   }
  // }
  const myFunc = (e) => {
    e.preventDefault();

    let id = e.currentTarget.id;
    const object = wine.filter((wine) => {
      return wine._id === id;
    });
    history.push(`/detail/${id}`);
    console.log(object);
    setDetailed(object);
  };
  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        // opacity: 1,
        transform: 'translateX(0px) translateZ(0px) rotateY(0deg)',
        zIndex: 10,
        animationName: 'myAnim',
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: 'translateX(-300px) translateZ(-300px) rotateY(0deg)',
        zIndex: 9,
        filter: 'blur(1px)',
        animationName: 'myAnim',
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: 'translateX(300px) translateZ(-300px) rotateY(0deg)',
        zIndex: 9,
        filter: 'blur(1px)',
        animationName: 'myAnim',
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: 'translateX(-600px) translateZ(-500px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(1px)',
        animationName: 'myAnim',
      };
    else if (activeSlide - 3 === index)
      return {
        opacity: 1,
        transform: 'translateX(-900px) translateZ(-700px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(2px)',
        animationName: 'myAnim',
        animationDuration: 1,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: 'translateX(600px) translateZ(-500px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(1px)',
      };
    else if (activeSlide + 3 === index)
      return {
        opacity: 1,
        transform: 'translateX(900px) translateZ(-700px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(2px)',
      };
    else if (index < activeSlide - 3)
      return {
        opacity: 0,
        transform: 'translateX(-480px) translateZ(-700px) rotateY(0deg)',
        zIndex: 7,
        filter: 'blur(2px)',
      };
    else if (index > activeSlide + 3)
      return {
        opacity: 0,
        transform: 'translateX(480px) translateZ(-500px) rotateY(0deg)',
        zIndex: 7,
        filter: 'blur(2px)',
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {mainData.map((item, i) => (
          <div className="slide" style={getStyles(i)} key={item._id}>
            <img
              id={item._id}
              src={item.image}
              alt="bottle"
              className="img-height new"
              onClick={myFunc}
            />
          </div>
        ))}
      </div>
      {/* carousel */}

      <RiArrowRightSLine onClick={next} className="btn-next" />

      <RiArrowLeftSLine onClick={prev} className="btn-prev" />
    </>
  );
}
