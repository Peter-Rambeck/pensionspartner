import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import { initialValues } from "../initialDTO/InitialInputData";
import { initialResponse } from "../initialDTO/InitialResponse";

export default function PensionCalc() {
  const [clientData, setClientData] = useState(initialValues);
  const [responseData, setResponseData] = useState(initialResponse);

  function handleChange(event) {
    clientData.data.customer.pensionIncome = event.target.value;
    setClientData({ ...clientData });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify({ ...clientData });

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: body,
    };

    // CORS: Use proxy "proxy": "https://minitoolsapi.azurewebsites.net/" in package.json for dev.
    // "proxy": "https://minitoolsapi.azurewebsites.net",
    const proxyUrl = "api/PublicPension";
    const url = "https://minitoolsapi.azurewebsites.net/api/PublicPension";

    let ignore = false;

    fetch(proxyUrl, requestOptions)
      .then((responseData) => responseData.json())
      .then((responseData) => {
        if (!ignore) {
          setResponseData(responseData);
          console.log("responseData: " + JSON.stringify(responseData));
          initialValues.data.customer.pensionIncome = " ";
          setClientData(initialValues);
        }
      })
      .catch((err) => console.log(err));
    return () => {
      ignore = true;
    };
  }

  return (
    <>
      <Container
        className="d-flex justify-content-center"
        style={{ minHeight: "90vh", flexDirection: "column" }}
      >
        <Row>
          {/*className={["spacing", "separator", "separator-center"].join(" ")}*/}
          <Col lg={true}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="clientData">
                <Form.Label>Pensionpartner licenseKey</Form.Label>
                <br />
                <Form.Control
                  type="text"
                  name="clientData.licenseKey"
                  value={clientData.licenseKey}
                  onChange={handleChange}
                  //placeholder=""
                />
                <br />
                <br />
                <Form.Label>Enter required pension income</Form.Label>
                <Form.Control
                  type="number"
                  name="data.customer.pensionIncome"
                  value={clientData.data.customer.pensionIncome}
                  onChange={handleChange}
                  placeholder="Enter value"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
          <Col>
            <div>
              <h4>Your data request:</h4>
              <ul>
                {Object.entries(responseData.base.log).map(
                  ([key, value], i) => (
                    <li key={i}>
                      {key} : {value}
                    </li>
                  )
                )}
              </ul>
              <h4>Your data:</h4>
              <ul>
                {Object.entries(responseData.publicPension.customer).map(
                  ([key, value], i) => (
                    <li key={i}>
                      {key} : {value}
                    </li>
                  )
                )}
              </ul>
              <h4>Your spouse data:</h4>
              <ul>
                {Object.entries(responseData.publicPension.spouse).map(
                  ([key, value], i) => (
                    <li key={i}>
                      {key} : {value}
                    </li>
                  )
                )}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
