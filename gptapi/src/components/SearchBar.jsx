import React, { useState } from "react";

const SearchBar = ({ getUser }) => { // getUser 함수 전달 

  // useState - input value 
  const [userName,setUserName] = useState(""); 

  // setUserName
  const handleChange = (event) => {
    setUserName(event.target.value); 
  };

  // getUser
  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(userName);
    // reset
    setUserName("");
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="GitHub ID를 입력해주세요"
          value = {userName}
          onChange={handleChange} 
          />
      </form>
  );
};



export default SearchBar;