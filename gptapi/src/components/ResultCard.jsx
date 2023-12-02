import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const ResultCard = ({ data, repoData }) => {

  // destructuring
  const { avatar_url, name, login, followers, following, bio } = data;
  const { name:repoName } = repoData;

  console.log(repoData);

  return (
    <>
      <StDiv>
        <StImg src={avatar_url} alt={`${login}'s avatar`}/>
        <h3>{name}</h3>
        <ul>
          <StList><StText>GitHub ID: {login}</StText></StList>
          <StList><StText>Followers: {followers}</StText></StList>
          <StList><StText>Following: {following}</StText></StList>
          <StList><StText>Bio: {bio}</StText></StList>
        </ul>
      </StDiv>
    </>
  );
};

const StDiv = styled.div`
  display: block;
`;

const StImg = styled.img`
  width: 100;
  height: 100;
  border-radius: 70%;
`;

const StList = styled.li`
  display: block;
  margin-block: 5px;
`;

const StListItem = styled.li`
  display: block;
  margin-block: 5px;
  list-style: none;
`;

const StText = styled.span`
  display: inline-block;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 24px;
  font-size: 14px;
  font-weight: bold;
`;

export default ResultCard;