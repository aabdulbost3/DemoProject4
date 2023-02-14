import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Wrapper, WrapperQuestions } from "./styled-index";
import { WrapperContainer } from "../../App-styled";
import { useTranslation } from "react-i18next";

function Questions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { t, i18n } = useTranslation();
  return (
    <WrapperQuestions>
      <WrapperContainer>
        <Wrapper>
          <h2 className="text">{t("Ques.0")}</h2>
          <p className="subtext">{t("Ques.1")}</p>
          <div className="acords">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2 style={{ margin: 0 }}>Lorem ipsum dolor sit amet.</h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2 style={{ margin: 0 }}>Lorem ipsum dolor sit amet.</h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2 style={{ margin: 0 }}>Lorem ipsum dolor sit amet.</h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              style={{
                background: "#7DBD46",
                color: "white",
                margin: "10px 0 0 0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className="s">
                  <h2 style={{ margin: 0 }}>Lorem ipsum dolor sit amet.</h2>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem recusandae magnam reiciendis assumenda eos! Quisquam!
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </Wrapper>
      </WrapperContainer>
    </WrapperQuestions>
  );
}

export default Questions;
