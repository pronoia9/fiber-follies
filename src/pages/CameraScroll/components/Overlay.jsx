import { forwardRef } from 'react';
import { styled } from 'styled-components';

const data = [
  { title: ``, subtitle: `` },
  { title: ``, subtitle: `` },
  { title: ``, subtitle: `` },
  { title: ``, subtitle: `` },
  { title: ``, subtitle: `` },
  { title: ``, subtitle: `` },
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
    <Section $height='400vh'>
      <Dot className='dot'>
        <h1>headset</h1>
        Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.
      </Dot>
    </Section>

    <Section $height='200vh'>
      <Dot className='dot'>
        <h1>headphone</h1>
        Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.
      </Dot>
    </Section>

    <Section $height='200vh'>
      <Dot className='dot'>
        <h1>rocket</h1>A rocket (from Italian: rocchetto, lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft or other vehicle use
        to obtain thrust from a rocket engine.
      </Dot>
    </Section>

    <Section $height='200vh'>
      <Dot className='dot'>
        <h1>turbine</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary
        mechanical device that extracts energy from a fluid flow and converts it into useful work.
      </Dot>
    </Section>

    <Section $height='200vh'>
      <Dot className='dot'>
        <h1>table</h1>A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or on which
        to place things.[1][2]
      </Dot>
    </Section>

    <Section $height='200vh'>
      <Dot className='dot'>
        <h1>laptop</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric
        keyboard.
      </Dot>
    </Section>

    <Section $height='200vh'>
      <Dot className='dot'>
        <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German pronunciation:
        [ˈt͡sɛpəliːn]) who pioneered rigid airship development at the beginning of the 20th century.
      </Dot>
    </Section>

    <span className='caption' ref={caption}>
      0.00
    </span>
  </Container>
));

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  scroll-snap-type: y proximity;

  & > div {
    scroll-snap-align: start;
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

const Section = styled.div`
  height: ${({ $height }) => $height || '200vh'};
`;

const Dot = styled.div`
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

  & > h1 {
    -webkit-font-smoothing: auto;
    pointer-events: none;
    color: white;
    font-size: 5em;
    font-weight: 100;
    line-height: 1em;
    margin: 0;
    margin-bottom: 0.25em;
  }
`;
