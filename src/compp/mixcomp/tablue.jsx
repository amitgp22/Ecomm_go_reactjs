import { TableauViz } from "@tableau/embedding-api";
import { useEffect, useRef } from "react";

const TableauDashboard = () => {
  const vizRef = useRef(null);

  useEffect(() => {
    const viz = new TableauViz();
viz.src='https://public.tableau.com/shared/3CM7FGX8R?:display_count=n&:origin=viz_share_link'
    viz.toolbar = "bottom";
    viz.hideTabs = true;

    vizRef.current.appendChild(viz);

    return () => {
      viz.dispose();
    };
  }, []);

  return <div ref={vizRef} style={{ width: "100%", height: "800px" }} />;
};

export default TableauDashboard;
