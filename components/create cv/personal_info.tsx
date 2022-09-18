import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";
import CustomInputField from "./input_field";
import styles from "./personal_info.module.css";
import { useState } from "react";

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  major: string;
}

export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInformation>({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    major: "",
  });

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
              <div>First Name</div>
              <CustomInputField
                onBlur={(val) => {
                  setPersonalInfo((prevState) => ({
                    ...personalInfo,
                    firstName: val.target.value,
                  }));
                  console.log(personalInfo);
                }}
              />
            </div>
            <div className={styles.singleCell}>
              <div>Last Name</div>
              <CustomInputField
                onBlur={(val) => {
                  setPersonalInfo((prevState) => ({
                    ...personalInfo,
                    lastName: val.target.value,
                  }));
                  console.log(personalInfo);
                }}
              />
            </div>
            <div className={styles.singleCell}>
              <div>Location</div>
              <CustomInputField
                onBlur={(val) => {
                  setPersonalInfo((prevState) => ({
                    ...personalInfo,
                    location: val.target.value,
                  }));
                  console.log(personalInfo);
                }}
              />
            </div>

            <div className={styles.singleCell}>
              <div>Major</div>
              <CustomInputField
                onBlur={(val) => {
                  setPersonalInfo((prevState) => ({
                    ...personalInfo,
                    major: val.target.value,
                  }));
                  console.log(personalInfo);
                }}
              />
            </div>

            <div className={styles.singleCell}>
              <div>Email</div>
              <CustomInputField
                onBlur={(val) => {
                  setPersonalInfo((prevState) => ({
                    ...personalInfo,
                    email: val.target.value,
                  }));
                  console.log(personalInfo);
                }}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
