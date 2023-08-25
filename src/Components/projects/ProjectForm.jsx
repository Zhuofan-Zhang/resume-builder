import React from "react";
import Grid from "@mui/material/Grid";
import InputField from "../InputField";
import "../../css/style.css";
import "../../css/reset.css";
import { InputLabel, TextField } from "@mui/material";
import { getIn } from "formik";

const ProjectForm = ({ index, formik }) => {

    const descriptionError = getIn(formik.errors, `projects[${index}].description`);
    const descriptionTouch = getIn(formik.touched, `projects[${index}].description`);
    const descriptionValue = getIn(formik.values, `projects[${index}].description`);

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6} className="item">
                    <InputField
                        label="Project Name"
                        type="text"
                        placeholder=" e.g. Online Retail Platform"
                        name={`projects[${index}].title`}
                        value
                        id="title"
                        index={index}
                        formik={formik}
                    ></InputField>
                </Grid>
                <Grid item xs={12} className="item">

                    {/* write input label component */
                        <InputLabel
                            shrink
                            htmlFor={`projects[${index}].description`}
                            className="text-input"
                            sx={{ marginLeft: "1.5rem" }}
                        >
                            Description
                        </InputLabel>}

                    <TextField
                        placeholder="Write Your Project Description Here"
                        name={`projects[${index}].description`}
                        id={`projects[${index}].description`}
                        className=""
                        type="text"
                        multiline
                        rows={3}
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={descriptionValue}
                    />

                    {/* write error message code here */descriptionError && descriptionTouch && <p className="error-text">{descriptionError}</p>}

                </Grid>
            </Grid>
        </>
    );
};

export default ProjectForm;