import { Route, Routes } from 'react-router-dom';
import { Home, ThreejsJourneyLv1 } from '.';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/threejs-journey-lv1' element={<ThreejsJourneyLv1 />} />
      <Route exact path='/' element={<Home />} />
    </Routes>
  );
}
