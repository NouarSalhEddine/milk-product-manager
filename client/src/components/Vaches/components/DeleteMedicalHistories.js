import React from 'react'
import Button from "react-bootstrap/Button";
import axios from "axios";

function DeleteMedicalHistories({id}) {

  const handleDelete = () => {

    axios
        .delete(`http://localhost:9000//medical_histories/${id}`)
        .then((res) => {
          this.props.refresh
            ? this.props.setRefresh(false)
            : this.props.setRefresh(true);
          console.log("Cows Account successfully deleted with : " + res.data);
        })
      .catch((err) => console.warn(err));
    
  }
  return (
    <div>
       <Button className='pt-0 pb-0 fw-bold' size="sm" variant="danger" onClick={() => handleDelete()}>
          Supprimer
        </Button>
    </div>
  )
}

export default DeleteMedicalHistories