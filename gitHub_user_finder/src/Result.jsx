import React from "react";
import ResultCard from "./components/ResultCard";
import styled from 'styled-components';


export const Result = ({ userState }) => {

    // destructuring 
    const { status, data, repoData } = userState; 
  
    // for each case of promise 
    // (API request)
    switch (status) { 

        // loading
      case "pending": 
        return (
          <>
          <StateContainer>
            <StateText>
            Loading...
            </StateText>
          </StateContainer>
            </>
        )
        // success 
      case "resolved": 
        return <ResultCard data={data} repoData={repoData}/>;
  
        // fail 
      case "rejected": 
        return (
          <StateContainer>
            <StateText>
            User Not Found
            </StateText>
          </StateContainer>
        );
  
        // default 
      case "idle": 
      default:
        return <div></div>;
    }
};

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StateText = styled.p`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  color: #ee5853;
`;