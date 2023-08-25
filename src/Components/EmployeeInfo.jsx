import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as msg from "../utilities/validationMessages";
import "../css/style.css";
import "../css/reset.css";
import InputField from "./InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nextStep, prevStep } from "../features/stepperSlice";
import { saveInfo } from "../features/infoSlice";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import { countriesList } from "../utilities/countriesList";
import "../css/style.css";
import { getIn } from "formik";


const phoneRegexExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const EmployeeInfo = () => {
    const { info } = useSelector((store) => store);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: info.firstName,
            lastName: info.lastName,
            phone: info.phone,
            email: info.email,
            city: info.city,
            country: info.country,
            summary: info.summary,
        },
        // formik validation here
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, msg.minFname)
                .max(16, msg.maxFname)
                .required("Required!"),
            lastName: Yup.string()
                .min(3, msg.minLname)
                .max(16, msg.maxLname)
                .required("Required!"),
            phone: Yup.string()
                .matches(phoneRegexExp, msg.phone)
                .required("Required!"),
            email: Yup.string().email(msg.email).required("Required!"),
            city: Yup.string()
                .min(3, msg.minCity)
                .max(28, msg.maxCity)
                .required("Required!"),
            country: Yup.object().nullable().required("Required!"),
        }),

        onSubmit: (values) => {
            // saveinfo code here
            if (formik.isValid) {
                dispatch(saveInfo(values));
                dispatch(nextStep());
            }
            // next step code here
        },
    });
    const countryValues = getIn(formik.values, "country");
    const summaryValues = getIn(formik.values, "summary");
    const countryError = getIn(formik.errors, "country");
    const countryTouch = getIn(formik.touched, "country");
    const summaryError = getIn(formik.errors, "summary");
    const summaryTouch = getIn(formik.touched, "summary");

    return (
        <>
            <form>
                {/* write code for grid layout */<Grid container spacing={4}>
                    <Grid item xs={6} className="item">
                        <InputField
                            label="First Name"
                            type="text"
                            placeholder="e.g John"
                            name="firstName"
                            id="firstName"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        <InputField
                            label="Last Name"
                            type="text"
                            placeholder="e.g Smith"
                            name="lastName"
                            id="lastName"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        <InputField
                            label="Phone Number"
                            type="tel"
                            placeholder="e.g 3427881111"
                            name="phone"
                            id="phone"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        <InputField
                            label="Email"
                            type="email"
                            placeholder="e.g John@gmail.com"
                            name="email"
                            id="email"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        <InputField
                            label="City"
                            type="text"
                            placeholder="e.g New York"
                            name="city"
                            id="city"
                            formik={formik}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} className="item">
                        {/* country code here*/}
                        <InputLabel
                            shrink
                            htmlFor="input"
                            className="text-input lable-margin"
                            type="select"
                        >
                            Country
                        </InputLabel>

                        {/* write autocomplete and textfield code here */}
                        {formik && (
                            <Autocomplete
                                className="countries-input"
                                options={countriesList}
                                autoHighlight
                                name={"country"}
                                id="country"
                                onChange={(e, value) => formik.setFieldValue("country", value)}
                                value={countryValues}
                                renderInput={(params) => (
                                    <TextField
                                        onBlur={formik.handleBlur}
                                        {...params}
                                        placeholder="Choose a Country"
                                        inputProps={{
                                            ...params.inputProps,
                                        }}
                                    />
                                )}
                            />
                        )}
                        {/* write error message code here */countryError && countryTouch && <p className="error-text">{countryError}</p>}

                    </Grid>
                </Grid>}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                        color="inherit"
                        // previous step here
                        onClick={() => dispatch(prevStep())}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />

                    <Button
                        onClick={() => formik.handleSubmit()}
                        variant="contained"
                        sx={{ background: "#4951F5" }}
                    >
                        Next
                    </Button>
                </Box>
            </form>
        </>
    );
};
export default EmployeeInfo;