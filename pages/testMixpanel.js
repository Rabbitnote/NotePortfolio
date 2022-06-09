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
    console.log(name + " " + lastname);
    Mixpanel.identify(name);
    Mixpanel.track("Submit Name");
    Mixpanel.people.set({
      $first_name: name,
      $last_name: lastname,
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
        <button type="submit" style={{ marginTop: "2rem", padding: "0.5rem" }}>
          {" "}
          submit
        </button>
      </form>
      <div>
        <button onSubmit={sumbitNav}>Navbar</button>
        <button onSubmit={sumbitTest1}> Test1</button>
        <button onSubmit={sumbitTest2}>Test2</button>
        <button onSubmit={sumbitTest3}>Test3</button>
      </div>
    </Fragment>
  );
};
export default TestMixpanel;
