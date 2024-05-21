import React, { useContext } from 'react';
import AdminNavbar from "../../components/navbar";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { FormDataContext } from '../../context/moviecontext';

const AdminForm = () => {
  const { handleSubmit } = useContext(FormDataContext);

  const handleFileChange = (event, setFieldValue) => {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () => {
      setFieldValue("image", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validationSchema = yup.object({
    name: yup.string().required("Movie name is required"),
    director: yup.string().required("Director is required"),
    genre: yup.string().required("Genre is required"),
    releaseDate: yup.date().required("Release date is required"),
    studio: yup.string().required("Studio is required"),
    duration: yup.number().required("Duration is required").positive("Enter a positive number"),
    synopsis: yup.string().required("Synopsis is required"),
    language: yup.string().required("Language is required"),
    price: yup.number().required("Price is required").positive("Enter a positive number"),
    discount: yup.number().required("Discount is required").positive("Enter a positive number"),
    image: yup.mixed().required("Poster image is required")
  });

  const initialValues = {
    name: "",
    director: "",
    genre: "",
    releaseDate: "",
    studio: "",
    duration: "",
    synopsis: "",
    language: "",
    price: "",
    discount: "",
    image: ""
  };

  return (
    <div>
      <AdminNavbar />
      <div className='w-full h-[600px] flex justify-center items-center'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div className='w-[800px] h-[550px] bg-white flex'>
                {/* Left section */}
                <div className='w-[400px] h-[550px] bg-white flex flex-col justify-start items-center border shadow-lg'>
                  <div className='w-[350px] h-[75px] bg-white flex flex-col mt-6'>
                    <label htmlFor="name" className='font-bold'>Movie Name</label>
                    <Field type="text" name="name" placeholder="Enter movie name" className={`adminform_input`} />
                    {errors.name && touched.name ? <div className='text-red-600'>{errors.name}</div> : null}
                  </div>
                  {/* Director */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="director" className='font-bold'>Director</label>
                    <Field type="text" name="director" placeholder="Enter director" className={`adminform_input`} />
                    {errors.director && touched.director ? <div className='text-red-600'>{errors.director}</div> : null}
                  </div>
                  {/* Genre */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="genre" className='font-bold'>Genre</label>
                    <Field type="text" name="genre" placeholder="Enter genre" className={`adminform_input`} />
                    {errors.genre && touched.genre ? <div className='text-red-600'>{errors.genre}</div> : null}
                  </div>
                  {/* Release Date */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="releaseDate" className='font-bold'>Release Date</label>
                    <Field type="date" name="releaseDate" className={`adminform_input`} />
                    {errors.releaseDate && touched.releaseDate ? <div className='text-red-600'>{errors.releaseDate}</div> : null}
                  </div>
                  {/* Studio */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="studio" className='font-bold'>Studio</label>
                    <Field type="text" name="studio" placeholder="Enter studio" className={`adminform_input`} />
                    {errors.studio && touched.studio ? <div className='text-red-600'>{errors.studio}</div> : null}
                  </div>
                  {/* Duration */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="duration" className='font-bold'>Duration (mins)</label>
                    <Field type="number" name="duration" placeholder="Enter duration" className={`adminform_input`} />
                    {errors.duration && touched.duration ? <div className='text-red-600'>{errors.duration}</div> : null}
                  </div>
                </div>

                {/* Right section */}
                <div className='w-[400px] h-[550px] bg-white flex flex-col justify-start items-center shadow-lg'>
                  {/* Synopsis */}
                  <div className='w-[350px] h-[80px] bg-white flex flex-col mt-6'>
                    <label htmlFor="synopsis" className='font-bold'>Synopsis</label>
                    <Field type="text" name="synopsis" as="textarea" placeholder="Enter synopsis..." className={`adminform_input`} />
                    {errors.synopsis && touched.synopsis ? <div className='text-red-600'>{errors.synopsis}</div> : null}
                  </div>
                  {/* Language */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="language" className='font-bold'>Language</label>
                    <Field type="text" name="language" placeholder="Enter language" className={`adminform_input`} />
                    {errors.language && touched.language ? <div className='text-red-600'>{errors.language}</div> : null}
                  </div>
                  {/* Price */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="price" className='font-bold'>Price</label>
                    <Field type="number" name="price" placeholder="Enter price" className={`adminform_input`} />
                    {errors.price && touched.price ? <div className='text-red-600'>{errors.price}</div> : null}
                  </div>
                  {/* Discount */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="discount" className='font-bold'>Discount</label>
                    <Field type="number" name="discount" placeholder="Enter discount" className={`adminform_input`} />
                    {errors.discount && touched.discount ? <div className='text-red-600'>{errors.discount}</div> : null}
                  </div>
                  {/* Poster Image */}
                  <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                    <label htmlFor="image" className='font-bold'>Poster Image</label>
                    <input
                      type="file"
                      name="image"
                      className='adminform_input'
                      onChange={(event) => handleFileChange(event, setFieldValue)}
                    />
                    {errors.image && touched.image ? <div className='text-red-600'>{errors.image}</div> : null}
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-center mt-4'>
                <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminForm;
