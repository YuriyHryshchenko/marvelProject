import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik"
import "./charForm.scss";
import * as Yup from 'yup';
import useMarvelService from "../../services/MarvelService";
import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";


const CharForm = () => {
	const [char, setChar] = useState(null);
	const {getCharacterByName, error, loading, clearError} = useMarvelService();


	const onCharLoaded = (char) => {
		setChar(char);
	}

	
	const results = !char ? null : char.length > 0 ?
			<>
				<div className="char-form__successful">There is! Visit {char[0].name} page?</div>
				<Link to={`/characters/${char[0].id}`} className="char-form__page-button button button-secondary">TO PAGE</Link>
			</>
			:
			<div className="char-form__notfound">The character was not found. Check the name and try again</div>
		
	const errorMessage = error ? <ErrorMessage/> : null;
	return(
		<div className="content-app__form char-form">
			<h2 className="char-form__title">Or find a character by name:</h2>
			<Formik
				initialValues={{
					char: ''
				}}
				validationSchema={Yup.object({
					char: Yup.string().required('This field is required')
				})
				}
				onSubmit={(values, {setSubmitting}) => {
					clearError();
					getCharacterByName(values.char)
						.then(onCharLoaded)
						.finally(setSubmitting(false));
				}}
			>
				{({isSubmitting}) => (
					<Form className="char-form__form">
						<Field type="text" className="char-form__input" name='char' placeholder="Enter name"/>
						<button type="submit" className="char-form__button button button-main" disabled={isSubmitting}>FIND</button>
						<FormikErrorMessage name="char" className="char-form__error char-form-error" component="div" />
						{results}
					</Form>

				)}
			</Formik>
			{errorMessage}
		</div>
	)
}
export default CharForm;