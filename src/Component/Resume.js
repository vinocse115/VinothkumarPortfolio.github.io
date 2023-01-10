import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";

const Resume = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2003 - 2004"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Madras Matriculation School, Kannamanalam
          </h3>
         
          <p> Secondary School Leaving Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2006"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desia Matriculation Hiher Secondary School, Vellore
          </h3>
      
          <p> Hiher Secondary School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Oxford Enineerin Collee, Trichy, TamilNadu
          </h3>

          <p> Bachelor's of Enineerin in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Quality Controller - RR Donnelly
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai, Tamilnadu
          </h4>
          <p>Proofreadin and Qualitycheck process</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Executive - Scope Knowlede center
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai, TamilNadu
          </h4>
          <p>Start as Web-Analyst in US project and done Mutliple project and Team Handlin</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diital Marketin Executive - Tejus
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vellore, TamilNadu
          </h4>
          <p>Developed and handle social media website for several customer's.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Project Co-ordinator - Straive (Scope knowle center)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai, TamilNadu
          </h4>
          <p>Production and Team handle for multiple projects</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer, Trainee
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vellore, TamilNadu
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Resume