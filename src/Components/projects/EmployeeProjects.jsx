import React from "react";
import "../../css/style.css";
import "../../css/reset.css";
import { FieldArray, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import * as msg from "../../utilities/validationMessages";
import ProjectForm from "./ProjectForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../../features/stepperSlice";
import {saveProject} from "../../features/projectSlice";

const EmployeeExperience = () => {
    const { projects } = useSelector((store) => store);
    const dispatch = useDispatch();

    const projectEmpty = {
        title: "",
        description: "",
    };

    const formik = useFormik({
        initialValues: {
            projects: projects.project,
        },
        // formik validation here
        validationSchema: Yup.object().shape({
            projects: Yup.array().of(
                Yup.object().shape({
                    title: Yup.string()
                        .required("Required!"),
                    description: Yup.string()
                        .required("Required!"),
                })
            ),
        }),
        onSubmit: (values) => {
            // save work code
            if (formik.isValid) {
                dispatch(saveProject(values));
                dispatch(nextStep());
            }
        },
    });

    return (
        <React.Fragment>
            <FormikProvider value={formik}>
                <FieldArray
                    name="project"
                    render={(arrayHelpers) => (
                        <AddCircleIcon
                            sx={{
                                float: "right",
                                marginTop: "10px",
                                fontSize: "30px",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                arrayHelpers.insert(formik.values.projects.length, projectEmpty);
                            }}
                        />
                    )}
                ></FieldArray>
                <FieldArray
                    name="project"
                    render={(arrayHelpers) => (
                        <div>
                            {formik.values.projects.map((project, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {index > 0 && (
                                            <CloseIcon
                                                sx={{
                                                    float: "right",
                                                    fontSize: "30px",
                                                    marginTop: "10px",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                    arrayHelpers.remove(index);
                                                }}
                                            />
                                        )}
                                        <form className="form-group">
                                            <ProjectForm
                                                project={project}
                                                index={index}
                                                formik={formik}
                                            ></ProjectForm>
                                        </form>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    )}
                ></FieldArray>
            </FormikProvider>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                    color="inherit"
                    // previous step code here
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
        </React.Fragment>
    );
};

export default EmployeeExperience;