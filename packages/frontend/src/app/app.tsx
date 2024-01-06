import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

import {LibPublicBuildable} from '@fsg/lib-public-buildable'
import {LibNonPublicBuildable} from 'lib-non-public-buildable'
import {LibNonPublicNonBuildable} from 'lib-non-public-non-buildable'



const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>

			{/* THIS WILL BLOW UP THE APP */}
			{/* <LibPublicBuildable /> */}
			{/* <LibNonPublicBuildable /> */}
			
			<LibNonPublicNonBuildable />


      <NxWelcome title="frontend" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
