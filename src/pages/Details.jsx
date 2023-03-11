import React from "react";
import { useLocation } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

const Details = () => {
  const { state: uri } = useLocation();

  return <DetailsCard uri={uri} />;
};

export default Details;
