import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";
import styles from "./personal_info.module.css";
import { Field } from "formik";

export default function PersonalInfo() {
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
            Personal Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={sharedStyles.accrodionDetails}>
          <div className={styles.gridLayout}>
            <div className={styles.singleCell}>
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                className={sharedStyles.inputField}
                name="personalInformation.firstName"
              />
            </div>
            <div className={styles.singleCell}>
              <label htmlFor="lastName">Last Name</label>
              <Field
                id="lastName"
                className={sharedStyles.inputField}
                name="personalInformation.lastName"
              />
            </div>
            <div className={styles.singleCell}>
              <label htmlFor="location">Location</label>
              <Field
                id="location"
                className={sharedStyles.inputField}
                name="personalInformation.location"
              />
            </div>

            <div className={styles.singleCell}>
              <label htmlFor="job">Job</label>
              <Field
                id="job"
                className={sharedStyles.inputField}
                name="personalInformation.job"
              />
            </div>

            <div className={styles.singleCell}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                className={sharedStyles.inputField}
                name="personalInformation.email"
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
