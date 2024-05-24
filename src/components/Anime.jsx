import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Animate = () => {
  const myElementRef = useRef(null);

  useEffect(() => {
    anime({
      targets: myElementRef.current,
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 3000,
      delay: anime.stagger(100, {direction: 'reverse'})
    });
  }, []);

  return (
    <div ref={myElementRef}>Hello, Anime.js!</div>
  );
};

export default Animate;
