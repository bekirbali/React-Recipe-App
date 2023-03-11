import React, { useState } from "react";
import styles from "./SearchSection.module.scss";

const SearchSection = ({
  setAdvancedSearch,
  setMealType,
  setDiet,
  setCuisine,
  advancedSearch,
  getDetailedFood,
  getFood,
  search,
  setSearch,
  setAdvancedData,
  setData,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showBasic, setShowBasic] = useState(false);
  const advancedSearchSubmitHandler = (e) => {
    e.preventDefault();
    setData([]);
    getDetailedFood();
    setSearch("");
  };
  const basicSearchSubmitHandler = (e) => {
    e.preventDefault();
    setAdvancedData([]);
    getFood();
    setSearch("");
  };

  return (
    <div className={styles.search}>
      {showAdvanced && (
        <div className={styles.advanced}>
          <div className={styles["advanced-title"]}>
            <h2>ADVANCED SEARCH</h2>
          </div>
          <form
            onSubmit={advancedSearchSubmitHandler}
            className={styles["advanced-form"]}
          >
            <div className={styles["advanced-query-sect"]}>
              <label htmlFor="advancedSearch">Search</label>
              <input
                type="search"
                name="advancedSearch"
                id="advancedSearch"
                value={advancedSearch}
                required
                onChange={(e) =>
                  setAdvancedSearch(e.target.value.toLowerCase())
                }
              />
            </div>
            <div className={styles.options}>
              <div className={`${styles.diet} ${styles.opts}`}>
                <label htmlFor="diet">Diet</label>
                <select
                  name="diet"
                  id="diet"
                  onChange={(e) => setDiet(e.target.value)}
                >
                  <option value="balanced">Balanced</option>
                  <option value="high-fiber">High-Fiber</option>
                  <option value="high-protein">High-Protein</option>
                  <option value="low-carb">Low-Carb</option>
                  <option value="low-fat">Low-Fat</option>
                  <option value="low-sodium">Low-Sodium</option>
                </select>
              </div>
              <div className={`${styles.cuisine} ${styles.opts}`}>
                <label htmlFor="cuisine">Cuisine Type</label>
                <select
                  name="cuisine"
                  id="cuisine"
                  onChange={(e) => setCuisine(e.target.value)}
                >
                  <option value="American">American</option>
                  <option value="Asian">Asian</option>
                  <option value="British">British</option>
                  <option value="Caribbean">Caribbean</option>
                  <option value="Central Europe">Central Europe</option>
                  <option value="Eastern Europe">Eastern Europe</option>
                  <option value="Chinese">Chinese</option>
                  <option value="French">French</option>
                  <option value="Indian">Indian</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Kosher">Kosher</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Middle Eastern">Middle Eastern</option>
                  <option value="Nordic">Nordic</option>
                  <option value="South American">South American</option>
                  <option value="South East Asian">South East Asian</option>
                </select>
              </div>
              <div className={`${styles.meal} ${styles.opts}`}>
                <label htmlFor="mealType">Meal Type</label>
                <select
                  name="meal"
                  id="meal"
                  onChange={(e) => setMealType(e.target.value)}
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Snack">Snack</option>
                  <option value="Teatime">Teatime</option>
                </select>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      )}

      {showBasic && (
        <div className={styles.basic}>
          <div className={styles["basic-title"]}>
            <h2>BASIC SEARCH</h2>
          </div>
          <form
            onSubmit={basicSearchSubmitHandler}
            className={styles["basic-form"]}
          >
            <label htmlFor="search">Search</label>
            <input
              type="search"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      )}
      {showAdvanced || (
        <button
          onClick={() => {
            setShowAdvanced(true);
            setShowBasic(false);
          }}
          className="btn btn-primary"
        >
          Advanced Search
        </button>
      )}
      {showBasic || (
        <button
          onClick={() => {
            setShowBasic(true);
            setShowAdvanced(false);
          }}
          className="btn btn-primary"
        >
          Basic Search
        </button>
      )}
    </div>
  );
};

export default SearchSection;
