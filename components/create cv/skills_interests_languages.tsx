import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";
import styles from "./skills_interests_languages.module.css";
import { Field, FieldArray, useFormikContext } from "formik";
import { CVInformation, LanguageLevels } from "./cv_form";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function SkillsAndInterests() {
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
            Skills, Interests {"&"} Languages
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={sharedStyles.accrodionDetails}>
          <div className={styles.titles}>Skills</div>
          <FieldArray
            name={`skills`}
            render={(arrayHelpers) => (
              <div>
                {values.skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "12px",
                      alignItems: "flex-start",
                      margin: "12px 0px",
                    }}
                  >
                    <Field
                      className={sharedStyles.bulletPointField}
                      name={`skills.${index}`}
                    />

                    {index !== 0 ? (
                      <IconButton
                        color="error"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    ) : null}
                    {index === values.skills.length - 1 ? (
                      <IconButton
                        color="primary"
                        onClick={() => arrayHelpers.push("")}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          />
          <div className={styles.titles}>Interests</div>
          <FieldArray
            name={`interests`}
            render={(arrayHelpers) => (
              <div>
                {values.interests.map((interest, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      alignItems: "flex-start",
                      margin: "12px 0px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px",
                        alignItems: "flex-start",
                        width: "100%",
                      }}
                    >
                      <Field
                        className={sharedStyles.bulletPointField}
                        name={`interests.${index}`}
                      />

                      {index !== 0 ? (
                        <IconButton
                          color="error"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                      ) : null}
                      {index === values.interests.length - 1 ? (
                        <IconButton
                          color="primary"
                          onClick={() => arrayHelpers.push("")}
                        >
                          <AddCircleIcon />
                        </IconButton>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}
          />
          <div className={styles.titles}>Languages</div>
          <FieldArray
            name={`languages`}
            render={(arrayHelpers) => (
              <div>
                {values.languages.map((language, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      alignItems: "flex-start",
                      margin: "12px 0px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px",
                        alignItems: "flex-start",
                        width: "100%",
                      }}
                    >
                      <Field
                        className={sharedStyles.bulletPointField}
                        name={`languages.${index}.language`}
                      />

                      {index !== 0 ? (
                        <IconButton
                          color="error"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                      ) : null}
                      {index === values.languages.length - 1 ? (
                        <IconButton
                          color="primary"
                          onClick={() => arrayHelpers.push("")}
                        >
                          <AddCircleIcon />
                        </IconButton>
                      ) : null}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      {Object.values(LanguageLevels).map(
                        (level, languageIndex) => {
                          return (
                            <label
                              key={languageIndex}
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "8px",
                              }}
                            >
                              <Field
                                type="radio"
                                name={`languages.${index}.level`}
                                value={level}
                                className={sharedStyles.checkbox}
                              />
                              {level}
                            </label>
                          );
                        }
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
