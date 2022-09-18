import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";
import { useState } from "react";

export interface ExperienceInfo {
  jobTitle: string;
  company: string;
  isCurrent: boolean;
  from: string;
  to: string;
  points: Array<string>;
}

export default function ExperienceInfo() {
  const [experienceInfo, setExperienceInfo] = useState<ExperienceInfo>({
    jobTitle: "",
    company: "",
    isCurrent: false,
    from: "",
    to: "",
    points: [],
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
            Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>Job Title</div>
          <div>Company</div>
          <div>From</div>
          <div>To</div>
          <div>Bullet Points</div>
          <div>Is Current?</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
