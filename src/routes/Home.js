import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";

// ============================================= graphql query
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

//============================================== styled-components

const Container = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: tomato;
`;
const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 42px;
`;
const SubTitle = styled.h3`
  font-size: 24px;
`;
const Loading = styled.p`
  font-size: 36px;
  margin-top: 20px;
  color: #adb5bd;
`;
export default () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <>
      <Container>
        <Header>
          <Title>Apollo 2020</Title>
          <SubTitle>I Love GraphQL</SubTitle>
        </Header>
        {loading && <Loading>Loading...</Loading>}
        {!loading &&
          data.movies &&
          data.movies.map((m) => <Movie key={m.id} id={m.id} />)}
      </Container>
    </>
  );
};
