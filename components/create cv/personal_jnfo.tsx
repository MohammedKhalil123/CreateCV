import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  major: string;
}

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
          <div>First Name</div>
          <div>Last Name</div>
          <div>Location</div>
          <div>Major</div>
          <div>Email</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
