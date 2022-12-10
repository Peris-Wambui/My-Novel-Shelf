import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
// import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label } from "../styles";

function NewNovel({bookworm }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [read, setRead] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("novels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        description,
        read,
        
        // instructions,
        // minutes_to_complete: minutesToComplete,
        bookworm_id: bookworm.id,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild className="form-input">
        <h1>Welcome Novel Love! Keep a record of your pages.</h1>
        <h2>Add A Novel</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="author">Author</Label>
            <Input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="read">Read</Label>
            <select 
            type="text"
            id="read"
            >
            <option>Fully Read</option>
            <option>Patially Read</option>
            onChange={(e) => setRead(e.target.value)}
            </select>
          </FormField>

          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Novel"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{title}</h1>
        <h1>{author}</h1>
        <h1>{description}</h1>
        <h1>{read}</h1>
        <cite>By {bookworm.email}</cite>     
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewNovel;
