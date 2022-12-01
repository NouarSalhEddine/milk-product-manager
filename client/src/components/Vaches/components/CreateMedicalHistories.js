import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateMedicalHistories() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Date de Diagnostic</Form.Label>
          <Form.Control type="date" placeholder="Date" />
        </Form.Group>

        <Form.Label>Maladies</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Selectioner La Maladie</option>
          <option value="Diarrhée virale">Diarrhée virale</option>
          <option value="Encéphalopathie spongiforme bovine">Encéphalopathie spongiforme bovine</option>
          <option value="Rhinotrachéite infectieuse">Rhinotrachéite infectieuse</option>
          <option value="campylobactériose">campylobactériose</option>
          <option value="dermatite nodulaire"> dermatite nodulaire</option>
          <option value="paragrippe-3">paragrippe-3</option>
          <option value="peste bovine">peste bovine</option>
          <option value="avortement chlamydiose">avortement chlamydiose</option>
          <option value="gangrène emphysémateuse">gangrène emphysémateuse</option>
        </Form.Select>
        <hr />
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
}

export default CreateMedicalHistories;
