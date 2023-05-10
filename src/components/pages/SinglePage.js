
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import AppBanner from "../appBanner/AppBanner";
import setContent from "../../utils/setContent";

const SinglePage = ({Component, dataType}) => {

	const {id} = useParams();

	const [data, setData] = useState(null);

	const {getComics, getCharacter, clearError, setProcess, process} = useMarvelService();

	useEffect(() => {
		updateData();
	}, [id])


	const updateData = () => {
		
		clearError();
		
		switch(dataType) {
			case "comic":
				getComics(id).then(onDataLoaded)
					.then(() => setProcess('confirmed'));
				break;
			case "char":
				getCharacter(id).then(onDataLoaded)
					.then(() => setProcess('confirmed'));
				break;
			default:
				break;
		}

	}

	const onDataLoaded = (data) => {
		setData(data);
	}

	return (
		<>
			<AppBanner/>
			{setContent(process, Component, data)}
		</>
	);
}

export default SinglePage;