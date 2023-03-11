/* Color Theme Swatches in Hex */
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchSection from "../components/SearchSection";
import ShowSection from "../components/ShowSection";

const Home = () => {
  const [advancedData, setAdvancedData] = useState([]);
  const [data, setData] = useState([]);
  const [advancedSearch, setAdvancedSearch] = useState("");
  const [search, setSearch] = useState("");
  const [mealType, setMealType] = useState("Breakfast");
  const [diet, setDiet] = useState("balanced");
  const [cuisine, setCuisine] = useState("American");
  const APP_ID = import.meta.env.REACT_APP_appId;
  const APP_KEY = import.meta.env.REACT_APP_appKey;
  const getDetailedFood = async () => {
    const { data } = await axios(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${advancedSearch}&app_id=e44778be&app_key=500896e362933a61a101f5b90e26f6d1&diet=${diet}&cuisineType=${cuisine}&mealType=${mealType}`
    );

    setAdvancedData(data.hits);
  };

  const getFood = async () => {
    const { data } = await axios(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=e44778be&app_key=500896e362933a61a101f5b90e26f6d1`
    );
    setData(data.hits);
  };

  return (
    <>
      <SearchSection
        setAdvancedSearch={setAdvancedSearch}
        setMealType={setMealType}
        setDiet={setDiet}
        setCuisine={setCuisine}
        advancedSearch={advancedSearch}
        getDetailedFood={getDetailedFood}
        search={search}
        setSearch={setSearch}
        getFood={getFood}
        setAdvancedData={setAdvancedData}
        setData={setData}
      />
      <ShowSection advancedData={advancedData} data={data} />
    </>
  );
};

export default Home;
