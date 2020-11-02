import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import Wrapper, { DefaultBtn, BulletButton } from './Carousel.styled';

type CarouselProps = {
  className?: string;
  children: React.ReactNode;
  options?: object;
  controls?: boolean;
  bullets?: boolean;
  thumbs?: any;
  numberOfBullets?: any;
  prevButton?: React.ReactNode;
  nextButton?: React.ReactNode;
  carouselSelector: string;
};

const Carousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  thumbs,
  numberOfBullets,
  carouselSelector,
}: CarouselProps) => {
  const addAllClasses = ['glide'];
  if (className) {
    addAllClasses.push(className);
  }

  const totalBullets = [];
  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  }

  useEffect(() => {
    const glide = new Glide(
      carouselSelector ? `#${carouselSelector}` : '#glide',
      {
        ...options,
      }
    );
    glide.mount();
  }, [options]);

  return (
    <Wrapper
      className={addAllClasses.join(' ')}
      id={carouselSelector || 'glide'}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>

      {controls && (
        <div className="glide__controls" data-glide-el="controls">
          <div className="glide__prev--area" data-glide-dir="<">
            {prevButton ? prevButton : <DefaultBtn>Prev</DefaultBtn>}
          </div>
          <div className="glide__next--area" data-glide-dir=">">
            {nextButton ? nextButton : <DefaultBtn>Next</DefaultBtn>}
          </div>
        </div>
      )}

      {bullets && (
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {totalBullets.map(index => (
            <BulletButton
              key={index}
              className="glide__bullet"
              data-glide-dir={`=${index}`}
            />
          ))}
        </div>
      )}

      {bullets !== true && thumbs && thumbs.length > 0 && (
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {thumbs.map((item: any, index: number) => (
            <div
              key={index}
              className="glide__thumb"
              data-glide-dir={`=${index}`}
            >
              <img src={item.url} alt="gallery" />
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

const Slide: React.FunctionComponent<{}> = ({ children }) => {
  return <Wrapper className="glide__slide">{children}</Wrapper>;
};

Carousel.defaultProps = {
  controls: true,
  bullets: false,
};

export { Slide };
export default Carousel;
