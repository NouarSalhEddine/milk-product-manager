import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { BACKEND_URL } from "../../../config";
import Modal from "react-bootstrap/Modal";

function CreateCowsComponent() {
  //  **************states*************
  const [cows, setCows] = useState({
    serial_number: "",
  entry_date: "",
    breed: "",
  })
  // ************statesForm********
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //  **************HandleFunction*************
 
 const  onChangeSerialNumber = (e) => {
    setCows({...cows, serial_number: e.target.value });
  }
 const  onChangeDateEntry = (e) => {
    setCows({...cows, entry_date: e.target.value });
  }
 const  onChangeBreed = (e) => {
    setCows({...cows, breed: e.target.value });
  }

  
  //  **************axios*************
  const handleSubmit = (e) => {
    e.preventDefault();
    const { serial_number, entry_date, breed } = cows;
    const url = `${BACKEND_URL}/cows`;
    
    axios.post(url, {
      serial_number,
      entry_date: new Date(entry_date),
      breed,
    })
      .then((response) => {
        this.props.refresh
          ? this.props.setRefresh(false)
          : this.props.setRefresh(true);
        console.log("refresh");
       setCows({
        serial_number: "",
      entry_date: "",
        breed: "",
      })
        if (response.status === 500) {
        } else if (response.status === 200 && response.data.status === 200) {
        } else if (response.status === 200 && response.data.status !== 200) {
          console.log(
            "Error inserted new data because : " + response.data.message
          );
        } else {
          console.log("Server error with : " + response.data);
        }
      })
      .catch((err) => console.warn(err));
     
    console.log("submit");
  }
  //  **************axios*************
  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
      +
    </Button>

    <Modal  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter Une Vache</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3">
            <Form.Label>numero de serie :</Form.Label>
            <Form.Control value={cows.serial_number} onChange={()=>onChangeSerialNumber()}  type="text"  />
          </Form.Group>

          <Form.Label>date d'entrer :</Form.Label>
          <Form.Select
            aria-label="Default select example"
           
            value={medical.sicknesse}
            onChange={handleChangeSicknesse}
          >
            <option>Selectioner La Maladie</option>
            <option value="Diarrh??e virale">Diarrh??e virale</option>
            <option value="Enc??phalopathie spongiforme bovine">
              Enc??phalopathie spongiforme bovine
            </option>
            <option value="Rhinotrach??ite infectieuse">
              Rhinotrach??ite infectieuse
            </option>
            <option value="campylobact??riose">campylobact??riose</option>
            <option value="dermatite nodulaire"> dermatite nodulaire</option>
            <option value="paragrippe-3">paragrippe-3</option>
            <option value="peste bovine">peste bovine</option>
            <option value="avortement chlamydiose">
              avortement chlamydiose
            </option>
            <option value="gangr??ne emphys??mateuse">
              gangr??ne emphys??mateuse
            </option>
          </Form.Select>
          <hr />

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Fermer
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Valider
            </Button>
          </Modal.Footer>
        </Form >
      </Modal.Body>
    </Modal>
  </div>
  )
}

export default CreateCowsComponent