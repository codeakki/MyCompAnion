import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    repassword: ""
  };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  render() {
    return (
      <div
        className="auth-layout-wrap"
        style={{
          backgroundImage: "url(/assets/images/photo-wide-4.jpg)"
        }}
      >
        <div className="auth-content">
          <div className="card o-hidden">
            <div className="row">
              <div
                className="col-md-6 text-center "
                style={{
                  backgroundSize: "cover",
                  backgroundImage: "url(/assets/images/photo-long-3.jpg)"
                }}
              >
                <div className="pl-3 auth-right">
                  <div className="auth-logo text-center mt-4">
                    <img src="assets/images/logo.png" alt="" />
                  </div>
                  <div className="flex-grow-1"></div>
                  <div className="w-100 mb-4">
                    <Link
                      to="/session/signin"
                      className="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                    >
                      <i className="i-Mail-with-At-Sign"></i> Sign in with Email
                    </Link>

                    <Button className="btn btn-outline-google btn-block btn-icon-text btn-rounded">
                      <i className="i-Google-Plus"></i> Sign in with Google
                    </Button>
                    <Button className="btn btn-outline-facebook btn-block btn-icon-text btn-rounded">
                      <i className="i-Facebook-2"></i> Sign in with Facebook
                    </Button>
                  </div>
                  <div className="flex-grow-1"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4">
                  <h1 className="mb-3 text-18">Sign Up</h1>
                  <Formik
                    initialValues={this.state}
                    validationSchema={SignupSchema}
                    onSubmit={this.handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="username">Your name</label>
                          <input
                            className="form-control form-control-rounded"
                            name="username"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />
                          {errors.username && touched.username && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.username}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            name="email"
                            className="form-control form-control-rounded"
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            name="password"
                            className="form-control form-control-rounded"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {errors.password && touched.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="repassword">Retype password</label>
                          <input
                            name="repassword"
                            className="form-control form-control-rounded"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.repassword}
                          />
                          {errors.repassword && touched.repassword && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.repassword}
                            </div>
                          )}
                        </div>
                        <button
                          className="btn btn-primary btn-block btn-rounded mt-3"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const SignupSchema = yup.object().shape({
  username: yup.string().required("email is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character long")
    .required("password is required"),
  repassword: yup
    .string()
    .required("repeat password")
    .oneOf([yup.ref("password")], "Passwords must match")
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {})(Signup);
