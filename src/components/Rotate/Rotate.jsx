import { useState } from 'react';
import './Rotate.css';
import wine from '../Carousel/wine.json';
import { useHistory } from 'react-router';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

const data = wine;

export default function Rotate() {
  const [activeSlide, setactiveSlide] = useState(0);
  const history = useHistory();
  const { setPickedWine } = useContext(LoginContext);

  const next = () =>
    activeSlide < data.length - 1 && setactiveSlide(activeSlide + 1);

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
    setPickedWine(object);
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
        filter: 'blur(2px)',
        animationName: 'myAnim',
      };
    else if (activeSlide - 3 === index)
      return {
        opacity: 1,
        transform: 'translateX(-900px) translateZ(-700px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(5px)',
        animationName: 'myAnim',
        animationDuration: 1,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: 'translateX(600px) translateZ(-500px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(2px)',
      };
    else if (activeSlide + 3 === index)
      return {
        opacity: 1,
        transform: 'translateX(900px) translateZ(-700px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(5px)',
      };
    else if (index < activeSlide - 3)
      return {
        opacity: 0,
        transform: 'translateX(-480px) translateZ(-700px) rotateY(0deg)',
        zIndex: 7,
        filter: 'blur(6px)',
      };
    else if (index > activeSlide + 3)
      return {
        opacity: 0,
        transform: 'translateX(480px) translateZ(-500px) rotateY(0deg)',
        zIndex: 7,
        filter: 'blur(6px)',
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {wine.map((item, i) => (
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
