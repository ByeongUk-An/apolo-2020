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
      isLiked @client
    }
  }
`;

//============================================== styled-components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
`;
const Subtitle = styled.h3`
  font-size: 35px;
  color: white;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <>
      <Container>
        <Header>
          <Title>Apollo 2020</Title>
          <Subtitle>I Love GraphQL</Subtitle>
        </Header>
        {loading && <Loading>Loading...</Loading>}

        <Movies>
          {data?.movies?.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              isLiked={m.isLiked}
              bg={m.medium_cover_image}
            />
          ))}
          {/* {console.log(data.movies)} */}
        </Movies>
      </Container>
    </>
  );
};
