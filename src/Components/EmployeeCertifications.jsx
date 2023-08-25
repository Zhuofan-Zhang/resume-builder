import React from "react";
import { TagsInput } from "react-tag-input-component";
import { InputLabel, Box, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepperSlice";
import { saveCertification } from "../features/certificationsSlice";
import "../css/style.css";

const EmployeeCertifications = () => {
    const { certifications } = useSelector((store) => store);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            certifications: certifications.certifications,
        },
        // formik validation here
        validationSchema: Yup.object({
            certifications: Yup.array().of(Yup.string()).min(3).max(7).required("Required!"),
        }),
        onSubmit: (values) => {
            // save skills code here
            if (formik.isValid) {
                dispatch(saveCertification(values));
                dispatch(nextStep());
            }
        },
    });
    return (
        <div className="skills">
            <InputLabel className="text-input">Certifications</InputLabel>
            <TagsInput
                rows={3}
                placeHolder="e.g. Reading Books"
                onChange={(value) => {
                    formik.setFieldValue("certifications", value);
                }}
                formik={formik}
                onBlur={formik.handleBlur}
                value={formik.values.certifications}
                name="Certification"
                id="Certification"
            />
            {formik.touched.certifications && formik.errors.certifications && (
                <p className="error-text">{formik.errors.certifications}</p>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                    color="inherit"
                    // previous step code
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
        </div>
    );
};

export default EmployeeCertifications;