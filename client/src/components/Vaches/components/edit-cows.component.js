import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import { BACKEND_URL } from "../../../config";
class EditStudent extends Component {
  constructor(props) {
      super(props);
      console.log(this.props.id)

    // setting up function
    this.onChangeSerialNumber = this.onChangeSerialNumber.bind(this);
    this.onChangeDateEntry = this.onChangeDateEntry.bind(this);
    this.onChangeBreed = this.onChangeBreed.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // setting up state
    this.state = {
      serial_number: "",
      entry_date: "",
      breed: "",
    };
  }

  onChangeSerialNumber(e) {
    this.setState({ serial_number: e.target.value });
  }

  onChangeDateEntry(e) {
    this.setState({ entry_date: e.target.value });
  }

  onChangeBreed(e) {
    this.setState({ breed: e.target.value });
  }

  showId = () => {
    console.log(this.props.id);
  };

  onSubmit(e) {
    e.preventDefault();
    const { serial_number, entry_date, breed } = this.state;

    // axios.put(`http://localhost:9000/cows/${this.props.id}`, {
    //     serial_number,
    //     entry_date:new Date(entry_date) ,
    //     breed,
    // }).then(res => {
    //     this.showId()
    //     this.props.refresh
    //     ? this.props.setRefresh(false)
    //     : this.props.setRefresh(true);
    //     if (res.status === 500) {
    //         console.log(res.data);
    //     } else if (res.status === 200) {
    //         console.log("updated successfuly" ,this.state)
    //         this.setState({
    //             serial_number: "",
    //             entry_date: "",
    //             breed: "",
    //           });
    //     } else {
    //         console.log("Server error with : "+res.data);
    //     }
    // }).catch(err => console.warn(err));
    this.showId();
  }

    render() {
      console.log('id = ', this.props.id)
    return (
      <div className="form-wrapper">
        <Modal show={this.props.showEdit} onHide={this.props.handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="SerialNumber">
                <Form.Label>numero de serie :</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.serial_number}
                  onChange={this.onChangeSerialNumber}
                  />
              </Form.Group>

              <Form.Group controlId="dateEntry">
                <Form.Label>date d'entrer :</Form.Label>
                <Form.Control
                  type="date"
                  value={this.state.entry_date}
                  onChange={this.onChangeDateEntry}
                  />
              </Form.Group>

              <Form.Group controlId="breed">
                <Form.Label>race :</Form.Label>
                <Form.Select
                  type="text"
                  value={this.state.breed}
                  onChange={this.onChangeBreed}
                  >
                  <option value=""></option>
                  <option value="holstein">holstein</option>
                  <option value="montbéliarde">montbéliarde</option>
                </Form.Select>
              </Form.Group>

                        <Button
                className="m-2 "
                variant="primary"
                size="lg"
                block="block"
                type="submit"
                onClick={() => {
                    this.showId();;
                }}
                >
                  
                Modifier
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <Button
          className="mb-2 "
          variant="primary"
          onClick={() => this.props.handleShowEdit()}
        >
          Edit
        </Button>
      </div>
    );
  }
}

export default EditStudent;
