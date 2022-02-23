import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "../config";
import { useNavigate } from "react-router-dom";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";

const HomePage = ({countries, setCountries}) => {
  
  
  const navigate = useNavigate();
  console.log(countries);

  useEffect(() => {
    if (!countries.length) 
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                discription: c.population.toLocaleString(),
              },
              {
                title: "Region",
                discription: c.region,
              },
              {
                title: "Capital",
                discription: c.capital,
              },
            ],
          };

          return <Card key={c.name} onClick={()=>navigate(`/country/${c.name}`)} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
