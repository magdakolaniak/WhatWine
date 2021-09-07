import { useState } from 'react';
import './Rotate.css';

import { useHistory } from 'react-router';
import { LoginContext } from '../GlobalState/GlobalState.jsx';
import { useContext } from 'react';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

export default function Rotate() {
  const [activeSlide, setactiveSlide] = useState(0);

  const history = useHistory();
  const { setDetailed, mainData } = useContext(LoginContext);

  const next = () =>
    activeSlide < mainData.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const myFunc = (e) => {
    e.preventDefault();

    let id = e.currentTarget.id;
    const object = mainData.filter((wine) => {
      return wine._id === id;
    });
    history.push(`/detail/${id}`);
    console.log(object);
    setDetailed(object);
  };

  const getClassName = (index) => {
    if (activeSlide === index) return 'slide-in-right img-height';
    if (activeSlide + 1 === index) return 'slide-in-right img-height';
    if (activeSlide + 2 === index) return 'slide-in-right img-height';
    if (activeSlide + 3 === index) return 'slide-in-right img-height';
    if (activeSlide + 4 === index) return 'slide-in-right img-height';
    else return 'img-height';
  };
  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        // opacity: 1,
        transform: 'translateX(0px) translateZ(50px) rotateY(0deg)',
        zIndex: 10,
        animationName: 'myAnim',
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: 'translateX(-300px) translateZ(-300px) rotateY(0deg)',
        zIndex: 9,
        filter: 'blur(1px)',
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: 'translateX(300px) translateZ(-300px) rotateY(0deg)',
        zIndex: 9,
        filter: 'blur(1px)',
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: 'translateX(-600px) translateZ(-500px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(1px)',
      };
    else if (activeSlide - 3 === index)
      return {
        opacity: 1,
        transform: 'translateX(-900px) translateZ(-700px) rotateY(0deg)',
        zIndex: 8,
        filter: 'blur(2px)',
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
      <div className="rotateContainer">
        <div className="slideC">
          {mainData.map((item, i) => (
            <div className="slideRotate" style={getStyles(i)} key={item._id}>
              <img
                id={item._id}
                src={item.image}
                alt="bottle"
                className={getClassName(i)}
                onClick={myFunc}
              />
            </div>
          ))}
        </div>
      </div>
      {/* carousel */}

      <RiArrowRightSLine onClick={next} className="btn-next" />

      <RiArrowLeftSLine onClick={prev} className="btn-prev" />
    </>
  );
}
