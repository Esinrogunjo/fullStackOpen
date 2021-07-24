import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./index.css";

// import Input from "./Input";
// API KEY = 3fd3fdf3407353066c55f3ca910b214f

const App = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showDetails = (code) => {
    return setProperty(
      countries.filter((country) => country.alpha3Code === code)
    );
  };

  const filteredCountries = query.trim()
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(query.toLocaleLowerCase())
      )
    : [];

  useEffect(() => {
    console.log({ query, filteredCountries });
    if (filteredCountries.length !== 1) return;
    const baseUrl = "http://api.weatherstack.com/current";
    const api_key = `3fd3fdf3407353066c55f3ca910b214f`;
    const countryName = filteredCountries[0].name;
    axios
      .get(`${baseUrl}?access_key=${api_key}&query=${countryName}`)
      .then((response) => console.log(response.data));
  }, [query]);

  return (
    <>
      <h1>This is country phone book</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value.trim())} />

      {filteredCountries.length === 1 ? (
        filteredCountries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <li>Name {country.name}</li>
              <li>Native {country.nativeName}</li>
              <li>Population {country.population}</li>
              <img src={country.flag} alt={`${country.name} flag`} />
            </div>
          );
        })
      ) : filteredCountries.length > 10 ? (
        <p>Too many countries</p>
      ) : (
        filteredCountries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <li className="note">{country.name}</li>
              <button onClick={() => showDetails(country.alpha3Code)}>
                Details
              </button>
            </div>
          );
        })
      )}

      <br />
      <input type="text" name="country" />
      <br />
      <input type="text" name="phonebook" />
    </>
  );
};

export default App;
