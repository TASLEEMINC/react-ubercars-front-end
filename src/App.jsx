import { useState, useEffect } from "react";

import * as ubercarService from "./services/ubercarService";

import UbercarList from "./components/UbercarList/UbercarList";
import UbercarDetail from "./components/UbercarDetail/UbercarDetail";
import UbercarForm from "./components/UbercarForm/UbercarForm";

function App() {
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
    setSelected(ubercar);
    setIsFormOpen(false);
  };

  const handleFormView = (ubercar) => {
    if (!ubercar.id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddUbercar = async (formData) => {
    try {
      const newUbercar = await ubercarService.create(formData);

      if (newUbercar.err) {
        throw new Error(newUbercar.err);
      }

      setUbercars([newUbercar, ...ubercars]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateUbercar = async (formData, ubercarId) => {
    try {
      const updatedUbercar = await ubercarService.update(formData, ubercarId);

      if (updatedUbercar.err) {
        throw new Error(updatedUbercar.err);
      }

      const updatedUbercarList = ubercars.map((ubercar) =>
        ubercar.id !== updatedUbercar.id ? ubercar : updatedUbercar
      );

      setUbercars(updatedUbercarList);
      setSelected(updatedUbercar);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteUbercar = async (ubercarId) => {
    try {
      const deletedUbercar = await ubercarService.deleteUbercar(ubercarId);

      if (deletedUbercar.err) {
        throw new Error(deletedUbercar.err);
      }
      setUbercars(
        ubercars.filter((ubercar) => ubercar.id !== deletedUbercar.id)
      );
      setSelected(null);
      setIsFormOpen(false);
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
        <UbercarForm
          handleAddUbercar={handleAddUbercar}
          selected={selected}
          handleUpdateUbercar={handleUpdateUbercar}
        />
      ) : (
        <UbercarDetail
          selected={selected}
          handleFormView={handleFormView}
          handleDeleteUbercar={handleDeleteUbercar}
        />
      )}
    </>
  );
}

export default App;
