const UbercarList = (props) => {
    return (
        <div>
          <h1>Ubercar List</h1>
          <div>
            {!props.ubercars.length ? (
              <h2>No Ubercars Yet!</h2>
            ) : (
              <ul>
                {props.ubercars.map((ubercar) => 
                  <li 
                    key={ubercar.id}
                    onClick={() => props.handleSelect(ubercar)}
                  >
                    {ubercar.model}
                  </li>
                )}
              </ul>
            )}
          </div>
          {/* Our new button! */}
          <button onClick={props.handleFormView}>
            {props.isFormOpen ? 'Close Form' : 'New Ubercar'}
          </button>
        </div>
      );

  };
  
  export default UbercarList;