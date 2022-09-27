import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";
import { Field, FieldArray, useFormikContext } from "formik";
import { CVInformation } from "./cv_form";
import { Button } from "@mui/material";

export default function EducationInfo() {
  const { values, submitForm } = useFormikContext<CVInformation>();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          className={sharedStyles.accrodionTile}
          expandIcon={<ExpandMoreIcon className={sharedStyles.expandIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={sharedStyles.accrodionTitle}>
            Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FieldArray
            name="educationList"
            render={(arrayHelpers) => (
              <div>
                {values.educationList.map((education, index) => (
                  <div className={sharedStyles.gridLayout} key={index}>
                    {index > 0 ? (
                      <div className={sharedStyles.removeButton}>
                        <Button
                          type="button"
                          variant="contained"
                          color="error"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : null}
                    <div className={sharedStyles.singleCell}>
                      <label htmlFor="major">Major</label>
                      <Field
                        id="major"
                        className={sharedStyles.inputField}
                        name={`educationList.${index}.major`}
                      />
                    </div>
                    <div className={sharedStyles.singleCell}>
                      <label htmlFor="university">University</label>
                      <Field
                        id="university"
                        className={sharedStyles.inputField}
                        name={`educationList.${index}.university`}
                      />
                    </div>
                    <div className={sharedStyles.singleCell}>
                      <div className={sharedStyles.labelPlaceholderRow}>
                        <label htmlFor="from">From</label>
                        <span className={sharedStyles.placeholder}>
                          MM/YYYY
                        </span>
                      </div>

                      <Field
                        id="from"
                        className={sharedStyles.inputField}
                        name={`educationList.${index}.from`}
                      />
                    </div>
                    <div className={sharedStyles.singleCell}>
                      <div className={sharedStyles.labelPlaceholderRow}>
                        <label htmlFor="to">To</label>
                        <span className={sharedStyles.placeholder}>
                          MM/YYYY
                        </span>
                      </div>

                      <Field
                        id="to"
                        className={sharedStyles.inputField}
                        name={`educationList.${index}.to`}
                      />
                    </div>

                    <div className={sharedStyles.singleCell}>
                      <div className={sharedStyles.labelPlaceholderRow}>
                        <label htmlFor="gpa">GPA</label>
                        <span className={sharedStyles.placeholder}>X.XX</span>
                      </div>

                      <Field
                        id="gpa"
                        className={sharedStyles.inputField}
                        name={`educationList.${index}.gpa`}
                      />
                    </div>
                  </div>
                ))}
                <Button
                  sx={{ width: "100%", margin: "16px 0px" }}
                  type="button"
                  variant="contained"
                  onClick={() =>
                    arrayHelpers.push({
                      major: "",
                      university: "",
                      from: "",
                      to: "",
                      gpa: "",
                    })
                  }
                >
                  Add Education
                </Button>
              </div>
            )}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
