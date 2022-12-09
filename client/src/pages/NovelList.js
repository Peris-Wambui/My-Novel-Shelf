import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function NovelList() {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    fetch("/novels")
      .then((r) => r.json())
      .then(setNovels);
  }, []);

  return (
    <Wrapper>
      {novels.length > 0 ? (
        novels.map((novel) => (
          <Recipe key={novel.id}>
            <Box>
              <h2>{novel.title}</h2>
              <p>
                <em>Time to Complete: {novel.minutes_to_complete} minutes</em>
                &nbsp;·&nbsp;
                <cite>By {novel.email}</cite>
              </p>
              <ReactMarkdown>{novel.instructions}</ReactMarkdown>
            </Box>
          </Recipe>
        ))
      ) : (
        <>
          <h2>No Novels Found</h2>
          <Button as={Link} to="/new">
            Make a New Novels
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default NovelList;
