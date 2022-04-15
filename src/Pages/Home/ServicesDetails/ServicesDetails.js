import React from "react";
import { useParams } from "react-router-dom";

const ServicesDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>WellCome To Services Details : {serviceId}</h2>
    </div>
  );
};

export default ServicesDetails;
