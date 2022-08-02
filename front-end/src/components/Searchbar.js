import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./Searchbar.css";

//Helen yau dummy data to test out search on

const items = [
  "Ebook",
  "Chat-bot",
  "Quiz Game_Maths",
  "Quiz game_Eng_Vowel",
  "Goal Tracker",
  "Review"
];

export function Searchbar() {
  //Helen Yau at every occurance of the change event
  // const [searchTerm, setSearchTerm] = useState("");

  // const [searchResults, setSearchResults] = useState([]);

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // useEffect(() => {
  //   const results = items.filter((items) =>
  //     items.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);
  // //Helen Yau props < items along with SearchTerm in dependency

  // return (
  //   <div className="searchbar">
  //     <input
  //       type="text"
  //       placeholder="Search"
  //       value={searchTerm}
  //       onchange={handleChange}
  //     />
  //     <ul className="searchbar-list">
  //       {searchResults.map((item) => (
  //         <li>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={items}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
}