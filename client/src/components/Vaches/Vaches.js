import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import CreateCows from "./components/create-cows.component";
import EditCows from "./components/edit-cows.component";
import DeleteCows from "./components/delete-Cows.component";
import { BACKEND_URL } from "../../config";

function Vaches() {
  // *********formsState*************
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showToastAdd, setShowToastAdd] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  // *********States*************

  const [refresh, setRefresh] = useState(false);
  const [addCows, setAddCows] = useState([
    {
      id: "",
      serial_number: null,
      entry_date: "",
      breed: "",
    },
  ]);

  useEffect(() => {
    const url = `${BACKEND_URL}/cows`;
    axios.get(url).then((res) => {
      setAddCows(res.data);
    });
  }, [refresh]);
  //  ***********************function Edit ****************************
  const funEdit = () => {};

  return (
    <div>
      {/* *****************toast***************** */}
      {
        <Col
          xs={6}
          style={{
            position: "absolute",
            left: "10px",
            top: "10px",
          }}
        >
          <Toast
            onClose={() => setShowToastAdd(false)}
            show={showToastAdd}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Add Successful</strong>
              <small>11 sec ago</small>
            </Toast.Header>
            <Toast.Body>Cows has been successfully uploaded</Toast.Body>
          </Toast>
        </Col>
      }
      {/* ********************************** */}
      <Button className="mb-2 " variant="primary" onClick={handleShow}>
        Ajouter
      </Button>
      {/* ***************add*************** */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une vache</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCows
            showToast={showToastAdd}
            setShowToast={setShowToastAdd}
            handleClose={handleClose}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Numéro De Serie</th>
            <th>Date d'entrer</th>
            <th>Race</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addCows.map((cow, index) => {
          
            return (
              <tr key={index}>
                <td>{cow.serial_number}</td>
                <td>{cow.entry_date}</td>
                <td>{cow.breed}</td>
                <td>
                  <DeleteCows
                    id={cow.id}
                    setRefresh={setRefresh}
                    refresh={refresh}
                  />
                  <EditCows
                    showToast={showToastAdd}
                    setShowToast={setShowToastAdd}
                    handleCloseEdit={handleCloseEdit}
                    handleShowEdit={handleShowEdit}
                    showEdit={showEdit}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    id = {cow.id}
                  />
                 
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Vaches;
