import React from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

import Demo from './demo'



const ModalDemo = () => {
    return <BrowserRouter>
        123
      <Routes>
        <Route path="gallery" element={<Demo />} />
      </Routes>
    </BrowserRouter>
}
export default ModalDemo