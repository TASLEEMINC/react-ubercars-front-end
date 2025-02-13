const UbercarDetail = (props) => {
    if (!props.selected) {
      return (
        <div>
          <h1>NO DETAILS</h1>
        </div>
      );
    }
  
    return (
      <div>
        <h1>{props.selected.model}</h1>
        <h2>Make: {props.selected.make}</h2>
        <h2>
          Year: {props.selected.year}
        </h2>
      </div>
    );
  };
  
  export default UbercarDetail;
  