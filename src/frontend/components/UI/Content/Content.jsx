import React from 'react';
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "../../Home/Home";
import NoteList from "../../Note/List";
import NoteEditor from "../../Note/Editor";
import OutfitList from "../../Outfit/List";
import OutfitForm from "../../Outfit/Form";
import Comparision from "../Comparision/Comparision";
import NameList from "../../Name/List";
import ImageList from "../../Image/List";
import ImageForm from "../../Image/Form";

const StyledContent = styled('div')`
    float: left;
    height: 90%;
    width: 90%;
`;

const Content = () => {
	return (
		<StyledContent>
			<Route exact path="/" component={Home} />
			<Route exact path="/notes" component={NoteList} />
			<Route exact path="/note/:noteId" component={NoteEditor} />
			<Route exact path="/outfits" component={OutfitList} />
			<Route exact path="/outfit" component={OutfitForm} />
			<Route exact path="/comparision" component={Comparision} />
			<Route exact path="/names" component={NameList} />
			<Route exact path="/images" component={ImageList} />
			<Route exact path="/image/:imageId" component={ImageForm} />
		</StyledContent>
	);
};

export default Content;