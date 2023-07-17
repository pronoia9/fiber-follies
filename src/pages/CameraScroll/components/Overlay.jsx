import { forwardRef } from 'react';
import { styled } from 'styled-components';

const data = [
  {
    title: `headset`,
    subtitle: `Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.`,
  },
  { title: `headphone`, subtitle: `Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.` },
  {
    title: `rocket`,
    subtitle: `A rocket (from Italian: rocchetto, lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft or other vehicle use to obtain thrust from a rocket engine.`,
  },
  {
    title: `turbine`,
    subtitle: `A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary mechanical device that extracts energy from a fluid flow and converts it into useful work.`,
  },
  {
    title: `table`,
    subtitle: `A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which to place things.[1][2]`,
  },
  {
    title: `laptop`,
    subtitle: `A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.`,
  },
  {
    title: `zeppelin`,
    subtitle: `A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn]) who pioneered rigid airship development at the beginning of the 20th century.`,
  },
];

export const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <Container
    ref={ref}
    className='scroll'
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
  >
    {data.map(({ title, subtitle }, index) => (
      <div key={`camera-scroll-overlay-${index}`}>
        <div className='dot'>
          <h1>{title}</h1>
          {subtitle}
        </div>
      </div>
    ))}

    <span className='caption' ref={caption}>
      0.00
    </span>
  </Container>
));

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-snap-type: y proximity;
  user-select: none;

  & > div {
    scroll-snap-align: start;
    height: 200vh;

    &:first-child {
      height: 400vh;
    }
  }

  .caption {
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0;
    margin: 80px;
    color: white;
    font-size: 8em;
    font-weight: 100;
    line-height: 1em;
    font-variant-numeric: tabular-nums;
    -webkit-font-smoothing: auto;
  }

  .dot {
    pointer-events: none;
    position: sticky;
    top: 0px;
    display: inline-block;
    max-width: 600px;
    padding: 0;
    padding: 80px;
    color: #a0a0a0;
    line-height: 1.6em;
    font-size: 15px;
    letter-spacing: 1.5px;
  }

  .dot > h1 {
    -webkit-font-smoothing: auto;
    pointer-events: none;
    color: white;
    font-size: 5em;
    font-weight: 100;
    line-height: 1em;
    margin: 0;
    margin-bottom: 0.25em;
  }

  @media only screen and (max-width: 1000px) {
    .caption {
      font-size: 4em;
    }
  }

  @media only screen and (max-width: 800px) {
    .caption {
      font-size: 3em;
    }
    .dot > h1 {
      font-size: 3em;
    }
  }

  @media only screen and (max-width: 700px) {
    .caption {
      font-size: 2em;
    }
    .dot > h1 {
      font-size: 3em;
    }
  }

  @media only screen and (max-width: 600px) {
    .caption {
      font-size: 1em;
    }
    .dot > h1 {
      font-size: 3em;
    }
  }
`;
