import { useState, useEffect } from 'react';
import * as ubercarService from './services/ubercarService';
import UbercarList from './components/UbercarList/UbercarList';
import UbercarDetail from './components/UbercarDetail/UbercarDetail';
import UbercarForm from './components/UbercarForm/UbercarForm';

const App = () => {
  const [ubercars, setUbercars] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchUbercars = async () => {
      try {
        const fetchedUbercars = await ubercarService.index();
        if (fetchedUbercars.err) {
          throw new Error(fetchedUbercars.err);
        }
        setUbercars(fetchedUbercars);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUbercars();
  }, []);

  const handleSelect = (ubercar) => {
    setSelected(ubercar)
    setIsFormOpen(false);
  }

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleAddUbercar = async (formData) => {
    try {
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <UbercarList
        ubercars={ubercars}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <UbercarForm handleAddUbercar={handleAddUbercar} />
      ) : (
        <UbercarDetail selected={selected} />
      )}
    </>
  );
};


export default App;
