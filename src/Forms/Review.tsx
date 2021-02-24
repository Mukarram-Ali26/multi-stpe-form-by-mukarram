import React, { FC } from "react";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { Formik, Form } from "formik";




interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  formValues: any;
}





const Review: FC<Props> = ({ formValues, submit }) => {
  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values) => {
        // console.log(values);
        alert("Your Account has created!");
        window.location.reload(true);
        submit(0);
      }}
    >
      <Form className="form_Content">
        <h1>Review</h1>
        <Grid container spacing={3} justify="center">
          <Grid item sm={8} xs={11}>

              <AccordionSummary className="review_Accordion">
                <Typography variant="h4">Personal Information</Typography>
              </AccordionSummary>

              <AccordionDetails className="review_Content">
                <p>Name </p>
                <p>{formValues.firstName.concat(formValues.lastName)}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Father Name </p>
                <p>{formValues.fatherName}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Father CNIC </p>
                <p>{formValues.fatherID}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Age </p>
                <p>{formValues.age}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>City </p>
                <p>{formValues.city}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Phone Number </p>
                <p>{formValues.phoneNumber}</p>
              </AccordionDetails>

          </Grid>

          <Grid item sm={8} xs={11}>

              <AccordionSummary>
                <Typography variant="h4">Account Information</Typography>
              </AccordionSummary>

              <AccordionDetails className="review_Content">
                <p>Email ID </p>
                <p>{formValues.emailID}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>User Name </p>
                <p>{formValues.userName}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Password</p>
                <p>{formValues.password}</p>
              </AccordionDetails>

          </Grid>

        </Grid>

        <div className="buttons">

          <Button variant="contained" color="primary" onClick={() => submit(1)}>
            Back
          </Button>

          <Button variant="contained" color="primary" type="submit">
            Create Account
          </Button>

        </div>
        
      </Form>
    </Formik>
  );
};

export default Review;
