import React, { createContext, useEffect, useState } from 'react'
import AdminForm from '../pages/adminpage/movieaddform';
import AdminBooks from '../pages/adminpage/movieshowpage';


   export const FormDataContext=createContext();


const BookContext = ({children}) => {
     
    const [formData,setFormData]=useState([]);

    useEffect(()=>{
        const StoredData=JSON.parse(localStorage.getItem('formData'))||[];
        setFormData(StoredData);
        console.log("useeffect working");
    },[]);
       
    const handleSubmit = (values, { resetForm }, indexToDelete) => {
        if (indexToDelete !== undefined) {
            const updatedFormData = formData.filter((_, index) => index !== indexToDelete);
            setFormData(updatedFormData);
            localStorage.setItem('formData', JSON.stringify(updatedFormData));
            console.log("delete worked");
        } else {
            const newFormData = [...formData, values];
            setFormData(newFormData);
            localStorage.setItem('formData', JSON.stringify(newFormData));
            resetForm();
        }
    };


  return (
   <FormDataContext.Provider value={{formData,handleSubmit}}>
    {children}

   </FormDataContext.Provider>
  )
}

export default BookContext