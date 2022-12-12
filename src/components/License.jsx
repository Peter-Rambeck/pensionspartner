import React, { useState, useEffect } from "react";

// This component is an initial Test component

export default function License() {
  const [data, setData] = useState(" ");

  useEffect(() => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
    };

    //"https://swapi.dev/api/people/1/")
    // https://minitoolsapi.azurewebsites.net/

    const proxyUrl = "api/License?licenseKey=3QXT-W5B3-GYAE-ABJ2-X5S6-FQ27-DQ";

    fetch(proxyUrl, requestOptions)
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div>
      {" "}
      {/*className="App">*/}
      <ul>
        {Object.entries(data).map(([key, value], i) => (
          <li key={i}>
            {key} : {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
