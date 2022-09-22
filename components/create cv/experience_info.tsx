import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";
import { Field, FieldArray, useFormikContext } from "formik";
import { CVInformation } from "./cv_form";
import { Button } from "@mui/material";

export default function ExperienceInfo() {
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
            Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FieldArray
            name="experienceList"
            render={(arrayHelpers) => (
              <div>
                {values.experienceList.map((experience, index) => (
                  <div className={sharedStyles.gridLayout} key={index}>
                    <div className={sharedStyles.singleCell}>
                      <label htmlFor="jobTitle">Job Title</label>
                      <Field
                        id="jobTitle"
                        className={sharedStyles.inputField}
                        name={`experienceList.${index}.jobTitle`}
                      />
                    </div>
                    <div className={sharedStyles.singleCell}>
                      <label htmlFor="company">Company</label>
                      <Field
                        id="company"
                        className={sharedStyles.inputField}
                        name={`experienceList.${index}.company`}
                      />
                    </div>
                    <div className={sharedStyles.singleCell}>
                      <label htmlFor="from">From</label>
                      <Field
                        id="from"
                        className={sharedStyles.inputField}
                        name={`experienceList.${index}.from`}
                      />
                    </div>
                    {experience.isCurrent ? (
                      <div className={sharedStyles.singleCell}>
                        <label>
                          <Field
                            type="checkbox"
                            name={`experienceList.${index}.isCurrent`}
                          />
                          Current
                        </label>
                      </div>
                    ) : (
                      <div className={sharedStyles.singleCell}>
                        <label htmlFor="to">To</label>
                        <Field
                          id="to"
                          className={sharedStyles.inputField}
                          name={`experienceList.${index}.to`}
                        />
                        <label>
                          <Field
                            type="checkbox"
                            name={`experienceList.${index}.isCurrent`}
                          />
                          Current
                        </label>
                      </div>
                    )}

                    <div className={sharedStyles.singleCell}>
                      <label htmlFor="email">points</label>
                      <Field
                        id="email"
                        className={sharedStyles.inputField}
                        name="personalInformation.email"
                      />
                    </div>
                    {index > 0 ? (
                      <div className={sharedStyles.singleCell}>
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
                  </div>
                ))}
                <Button
                  sx={{ width: "100%", margin: "16px 0px" }}
                  type="button"
                  variant="contained"
                  onClick={() =>
                    arrayHelpers.push({
                      jobTitle: "",
                      company: "",
                      isCurrent: false,
                      from: "",
                      to: "",
                      points: [],
                    })
                  }
                >
                  Add Experience
                </Button>
              </div>
            )}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
