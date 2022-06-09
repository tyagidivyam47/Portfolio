import React, { useState } from "react";

const Contact = () => {

  const[field, setField] = useState({
    name:"",
    email:"",
    message:"",
  }) 

  const onChangeHandler = (e) =>{
    setField({...field, [e.target.name] : e.target.value})
  }

  const onSubmitHandler = () =>{
    setField({
      name:"",
      email:"",
      message:"",
    });
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/b039e573-1c05-423b-9f69-5c79fb66ee55"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - tyagidivyam47@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          value={field.name}
          onChange={onChangeHandler}
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          value={field.email}
          onChange={onChangeHandler}
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={field.message}
          onChange={onChangeHandler}
        ></textarea>
        <button onSubmit={onSubmitHandler} className="text-white border-2 transition-all hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
