import error from "./error.gif";
import "./errorMessage.scss";

const ErrorMessage = () => {
	return (
		<div className="error">
			<div className="error__image">
				<img src={error} alt="Error" />
			</div>
		</div>
	)
}

export default ErrorMessage;