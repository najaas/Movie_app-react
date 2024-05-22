// AdminForm.jsx
import React, { useContext } from 'react';
import AdminNavbar from "../../components/navbar";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { FormDataContext } from '../../context/moviecontext'; // Correct import

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
                  {/* Your form fields */}
                </div>

                {/* Right section */}
                <div className='w-[400px] h-[550px] bg-white flex flex-col justify-start items-center shadow-lg'>
                  {/* Your form fields */}
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
