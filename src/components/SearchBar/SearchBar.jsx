import { Field, Formik, Form } from "formik";
// import { useEffect, useState } from "react";
// import { getSearchMovies } from "../../tmdb-api";
// import { Form } from "react-router-dom";

export default function SearchBar({ handleChangeQuery }) {
  // const [movies, setMovies] = useState([]);

  const onSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
  };

  const initialValues = { query: "" };

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getSearchMovies(query);
  //     setMovies(data);
  //   };
  //   getData();
  // }, [query]);

  // console.log(movies);

  //   const { movies } = useContext(MyContext);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="query"></Field>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
