import { Fragment } from "react";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Styles from "../styles/about.module.scss";
import Footer from "../components/Footer";
import { Mixpanel } from "../components/Mixpanel";
const TestMixpanel = () => {
  useEffect(() => {
    Mixpanel.track("Landing Page");
  });
  const sumbitTest1 = () => {
    Mixpanel.track("Test1");
  };
  const sumbitTest2 = () => {
    Mixpanel.track("Test2");
  };
  const sumbitTest3 = () => {
    Mixpanel.track("Test3");
  };
  const sumbitNav = () => {
    Mixpanel.track("navbar");
  };
  const submit = (event) => {
    event.preventDefault();
    const name = event.target.fname.value;
    const lastname = event.target.lname.value;
    const age = event.target.age.value;
    const email = event.target.email.value;
    const gender = event.target.gender.value;
    console.log(name + " " + lastname+" "+age+" "+email+" "+gender);
    Mixpanel.identify(name);
    Mixpanel.track("Submit Name");
    Mixpanel.people.set({
      $first_name: name,
      $last_name: lastname,
      $age:age,
      $email:email,
      $gender:gender
    });
  };
  return (
    <Fragment>
      <form onSubmit={submit} style={{ margin: "2rem" }}>
        <label htmlFor="fname" style={{ color: "white" }}>
          First name:
        </label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="lname" style={{ color: "white" }}>
          Last name:
        </label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <label htmlFor="lname" style={{ color: "white" }}>
          Gender:
        </label>
        <br />
        <input type="text" id="gender" name="gender" />
        <br />
        <label htmlFor="lname" style={{ color: "white" }}>
          Email:
        </label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="lname" style={{ color: "white" }}>
          Age:
        </label>
        <br />
        <input type="text" id="age" name="age" />
        <br />
        <button type="submit" style={{ marginTop: "2rem", padding: "0.5rem" }}>
          {" "}
          submit
        </button>
      </form>
      <div>
        <button onClick={sumbitNav}>Navbar</button>
        <button onClick={sumbitTest1}> Test1</button>
        <button onClick={sumbitTest2}>Test2</button>
        <button onClick={sumbitTest3}>Test3</button>
      </div>
    </Fragment>
  );
};
export default TestMixpanel;
