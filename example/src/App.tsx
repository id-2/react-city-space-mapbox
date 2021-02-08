import React, {useRef} from 'react'
import CitySpaceMap from 'react-city-space-mapbox'
import styled from 'styled-components/macro';
import OptionsBar from './components/OptionsBar';
import useLayoutData from './useLayoutData';

const Root = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const accessToken =
  'pk.eyJ1IjoiaGFydmFyZGdyb3d0aGxhYiIsImEiOiJja2tpaXkya2IwOW5mMnBvaTNjMHlsYjNpIn0.3xPcnwP6dHcC5HGXyoKDIQ';

const App = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const {data} = useLayoutData();
  return (
    <React.Fragment>
      <CitySpaceMap
        accessToken={accessToken}
        rootRef={rootRef}
        cityGeoJson={data ? data.cityGeoJson : undefined}
        cityUMapJson={data ? data.cityUMapJson : undefined}
      >
        <OptionsBar />
      </CitySpaceMap>
      <Root ref={rootRef} />
    </React.Fragment>
  );
}

export default App
