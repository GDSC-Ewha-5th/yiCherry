import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const ResultCard = ({ data, repoData }) => {

  // destructuring
  const { avatar_url, name, login, followers, following, bio } = data;

  console.log(repoData);

  return (
    <>
      <ResultContainer>
        <UserAvartar src={avatar_url} alt={`${login}'s avatar`}/>
        <h3>{name}</h3>
        <InfoList>
          <InfoItem>GitHub ID : {login}</InfoItem>
          <InfoItem>Followers : {followers}</InfoItem>
          <InfoItem>Following : {following}</InfoItem>
          <InfoItem>Bio : {bio}</InfoItem>
        </InfoList>
        <RepoTitle>Repositories</RepoTitle>
        <RepoList>
        {repoData.map(repo => (
            <RepoItem>
              <a href={repo.html_url}>
                {repo.name}
              </a>
            </RepoItem>
        ))}
        </RepoList>
      </ResultContainer>
    </>
  );
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px; 
  border-radius: 10px;
  background-color: #fff; 
  margin-top: 100px; 
`;

const UserAvartar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const InfoList = styled.ul`
  list-style: none; 
  padding: 0; 
  margin: 0; 
  width: 100%; 
`;

const InfoItem = styled.li`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin-bottom: 10px; 
`;

const RepoList = styled.ul`
  list-style: none; 
  padding: 0; 
  margin: 0; 
  width: 100%; 
`;

const RepoTitle = styled.p`
  margin-bottom: 10px; 
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: #ff8b88;
`;

const RepoItem = styled.li`
  margin: 5px 0;
  text-align: center;

  a {
    text-decoration: none;
    font-style: oblique;
    color: #000000;
    &:hover {
      color: #662fbe;
      text-decoration:underline;
    } 
  }
`;

export default ResultCard;