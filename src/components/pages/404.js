import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link, useNavigate } from "react-router-dom"
import "./404.scss";
const Page404 = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<div className="app__page not-found">
			<ErrorMessage/>
			<p className="not-found__title">404 NOT FOUND</p>
			<button className="not-found__link" onClick={goBack}>Go Back</button>
		</div>
	)
}

export default Page404;