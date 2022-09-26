import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import sharedStyles from "./shared_styles.module.css";

export default function SkillsAndInterests() {
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
            Skills And Interests
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className={sharedStyles.accrodionDetails}
        ></AccordionDetails>
      </Accordion>
    </div>
  );
}
