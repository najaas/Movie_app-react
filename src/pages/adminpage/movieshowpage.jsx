import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

const MovieForm = () => {
  const [movies, setMovies] = useState([]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    cast: Yup.array().of(Yup.string().required('Cast member is required')),
    image: Yup.mixed().required('Image is required'),
  });

  const initialValues = {
    title: '',
    cast: [''],
    image: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    setMovies([...movies, values]);
    resetForm();
  };

  const handleEdit = (index, values) => {
    const newMovies = [...movies];
    newMovies[index] = values;
    setMovies(newMovies);
  };

  const handleDelete = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };

  return (
    <div>
      <h1>Movie Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Enter movie title"
              />
              {errors.title && touched.title ? (
                <div>{errors.title}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="cast">Cast</label>
              <FieldArray name="cast">
                {({ insert, remove, push }) => (
                  <div>
                    {values.cast.length > 0 &&
                      values.cast.map((cast, index) => (
                        <div key={index}>
                          <Field
                            type="text"
                            name={`cast.${index}`}
                            placeholder="Enter cast member"
                          />
                          {errors.cast &&
                          errors.cast[index] &&
                          touched.cast &&
                          touched.cast[index] ? (
                            <div>{errors.cast[index]}</div>
                          ) : null}
                          <button type="button" onClick={() => remove(index)}>
                            Remove
                          </button>
                        </div>
                      ))}
                    <button
                      type="button"
                      onClick={() => push('')}
                    >
                      Add Cast
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>

            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setFieldValue('image', event.currentTarget.files[0]);
                }}
              />
              {errors.image && touched.image ? (
                <div>{errors.image}</div>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <h2>Movies</h2>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
          <p>Cast: {movie.cast.join(', ')}</p>
          {movie.image && (
            <img
              src={URL.createObjectURL(movie.image)}
              alt={`${movie.title} poster`}
            />
          )}
          <button onClick={() => handleEdit(index, movie)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MovieForm;