import React from "react";
import ResultCard from "./components/ResultCard";

export const Result = ({ userState }) => {

    // destructuring 
    const { status, data, repoData } = userState; 
  
    // for each case of promise 
    // (API request)
    switch (status) { 

        // loading
      case "pending": 
        return (
        <div style={{ 
            color: "white", 
            fontSize: "24px" }}>
            Loading...</div>
        );
  
        // success 
      case "resolved": 
        return <ResultCard data={data} repoData={repoData}/>;
  
        // fail 
      case "rejected": 
        return (
          <div style={{ 
            color: "white", 
            fontSize: "24px" }}>
            User Not Found</div>
        );
  
        // default 
      case "idle": 
      default:
        return <div></div>;
    }
};

