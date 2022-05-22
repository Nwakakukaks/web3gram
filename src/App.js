import React, {useState} from 'react';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';

function App() {
    const [selectedImg, setSelectedImg] = useState(null);

  return <>
  <UploadForm setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
  </>
}

export default App;
