import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";
import { Field, FieldArray, useFormikContext } from "formik";
import { CVInformation } from "./cv_form";
import { IconButton, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

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
                    <div
                      className={sharedStyles.wholeWidth}
                      style={{ margin: "12px 0px" }}
                    >
                      <label
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Field
                          type="checkbox"
                          name={`experienceList.${index}.isCurrent`}
                          className={sharedStyles.checkbox}
                        />
                        I am currently working here
                      </label>
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
                        name={`experienceList.${index}.from`}
                      />
                    </div>

                    {experience.isCurrent ? null : (
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
                          name={`experienceList.${index}.to`}
                        />
                      </div>
                    )}

                    <div className={sharedStyles.wholeWidth}>
                      <label htmlFor="email">Bullet Points</label>
                      <FieldArray
                        name={`experienceList.${index}.points`}
                        render={(arrayHelpers) => (
                          <div>
                            {values.experienceList[index].points.map(
                              (point, pointIndex) => (
                                <div
                                  key={pointIndex}
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "12px",
                                    alignItems: "center",
                                    margin: "12px 0px",
                                  }}
                                >
                                  <div>{pointIndex + 1}-</div>
                                  <Field
                                    className={sharedStyles.bulletPointField}
                                    name={`experienceList.${index}.points.${pointIndex}`}
                                  />
                                  {pointIndex !== 0 ? (
                                    <IconButton
                                      color="error"
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      <RemoveCircleIcon />
                                    </IconButton>
                                  ) : null}
                                  {pointIndex ===
                                  values.experienceList[index].points.length -
                                    1 ? (
                                    <IconButton
                                      color="primary"
                                      onClick={() => arrayHelpers.push("")}
                                    >
                                      <AddCircleIcon />
                                    </IconButton>
                                  ) : null}
                                </div>
                              )
                            )}
                          </div>
                        )}
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
                      jobTitle: "",
                      company: "",
                      isCurrent: false,
                      from: "",
                      to: "",
                      points: [""],
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
