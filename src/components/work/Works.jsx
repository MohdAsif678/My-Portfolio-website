import React, { useEffect, useState } from "react";
import { projectsNav, projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
  const [active, setActive] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const category = projectsNav[active].name;

    const filteredProjects = projectsData.filter(
      (project) => project.category === category
    );

    setProjects(filteredProjects);
  }, [active]);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={() => handleClick(index)}
              className={`${active === index ? "active_work" : ""} work_item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work_container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;