import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import {Post , Patch } from "./crud";
import { Button, FormField, Input, Label } from "../styles";

function NewNovel({onSaved, defaultData }) {
  const history = useHistory()
  const [inputData, setInputData]= useState({
    title:defaultData ? defaultData.title : '',
    author:defaultData ? defaultData.author: '',
    description:defaultData ? defaultData.description: '',
    read:defaultData ? defaultData.read: '',

  })

  const [saving, setSaving] = useState(false)

  function handleChange(event) {
		setInputData({
			...inputData,
			[event.target.name]: event.target.value
		})
	}

  function addNovel(event) {
		event.preventDefault();
		setSaving(true)
		// if defaultData is defined update,if not defined create
		if (defaultData) {
			Patch({ ...inputData, id: defaultData.id }).then((updatedNovel) => {
				setSaving(false);
        onSaved(updatedNovel);
        history.push("/");
				console.log(updatedNovel);
        history.push("/novels");
			})
		} else {
			Post(inputData).then(NewNovel => {
				setSaving(false);
        onSaved(NewNovel);
        history.push("/novels");
				console.log(NewNovel);

			});
    }
  }

  return (
    <Wrapper>
      <WrapperChild className="form-input">
        <h1>Welcome Novel Love! Keep a record of your pages.</h1>
        <h2>Add A Novel</h2>
        <form onSubmit={addNovel}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={inputData.title}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="author">Author</Label>
            <Input
              type="text"
              id="author"
              value={inputData.author}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              id="description"
              value={inputData.description}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="read">Read</Label>
            <select 
            type="text"
            id="read"
            >
              value={inputData.read}
            <option>Fully Read</option>
            <option>Patially Read</option>
            onChange={handleChange}
            </select>
          </FormField>

          <FormField>
            <Button color="primary" type="submit" disabled={saving}>
              {saving? "Loading..." : "Submit Novel"}
            </Button>
          </FormField>
        </form>
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
