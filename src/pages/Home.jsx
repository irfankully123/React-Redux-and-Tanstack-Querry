import { useState } from "react";
import SneatLayout from "../layouts/SneatLayout"

const Home = () => {


  const [show, setShow] = useState("");


  const fakeApiCall = new Promise((resolve, reject) => {
    const isApiConnectionOk = true;
    if (isApiConnectionOk) {
      setTimeout(() => {
        resolve("Api Connection Successfull");
      }, 5000);
    } else {
      setTimeout(() => {
        reject("Connection Error");
      },5000);
    }
  });


  fakeApiCall.then(response => {
    setShow(response);
  }).catch(error => {
    setShow(error);
  });



  return (
    <SneatLayout>
      <h1>{show}</h1>
    </SneatLayout>
  );
}

export default Home
