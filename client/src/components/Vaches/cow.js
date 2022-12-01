import React, { useState, useEffect } from "react";
import CreateMedicalHistories from "./components/CreateMedicalHistories";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useParams } from "react-router-dom";

function Cow() {
  // ***************states********************
  const { id: cowId } = useParams();
  const [cow, setCow] = useState([
    {
      id: "",
      serial_number: "",
      entry_date: "",
      breed: "",
    },
  ]);
  const [medicalHistories, setMedicalHistories] = useState([
    {
      id: "",
      cow: "",
      sickeness: "",
      diagnosis_date: "",
    },
  ]);
  //  ****************axios***********
  useEffect(() => {
    const url = `${BACKEND_URL}/cows/${cowId}`;
    axios.get(url).then((res) => {
      setCow(res.data);
    });

    axios.get(`${BACKEND_URL}/medical_histories/cow/${cowId}`).then((res) => {
      setMedicalHistories(res.data);
    });
  }, []);

  console.log(medicalHistories);
  const entry_date = new Date(cow.entry_date).toLocaleDateString();

  return (
    <div>
      <CreateMedicalHistories />
      <Card>
        <Card.Header>Information</Card.Header>
        <Card.Body>
          Numero de serie: {cow.serial_number}
          <br />
          Race: {cow.breed}
          <br />
          Date d'entree: {entry_date}
        </Card.Body>
      </Card>

      <Card style={{ marginTop: "2rem" }}>
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Historique medicale
          <Button variant="primary">+</Button>
        </Card.Header>
        <Card.Body>
          <Table striped>
            <thead>
              <tr>
                <th>Date de Diagnostic</th>
                <th>Maladie</th>
              </tr>
            </thead>
            <tbody>
              {medicalHistories.map((medical, index) => {
                return (
                  <tr key = {index}>
                    <td>{new Date(medical.diagnosis_date).toLocaleDateString()}</td>
                    <td>{medical.sickeness} </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card style={{ marginTop: "2rem" }}>
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Naissances
          <Button variant="primary">+</Button>
        </Card.Header>
        <Card.Body></Card.Body>
      </Card>
     
    </div>
  );
}

export default Cow;
