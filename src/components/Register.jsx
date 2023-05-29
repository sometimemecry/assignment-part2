import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { firstName, lastName, telephone, email, ref } = data;
    const queryParams = new URLSearchParams({ ref, email }).toString();
    const url = `https://www.example.com?${queryParams}`;

    // Perform any necessary form validation here

    // Open the redirected URL in a new tab
    window.open(url, "_blank");
  };

  return (
    <form
      className="flex flex-col justify-center items-center h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col border rounded-xl shadow-black shadow-md bg-[#f7f5f5] min-w-[450px]">
        <h1 className="text-center text-4xl font-bold px-4 py-4">
          Registration Form
        </h1>
        <label className="text-2xl  px-4 py-2">First Name</label>
        <input
          className=" mx-4 h-[40px] rounded-md border px-2"
          type="text"
          id="firstName"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="px-4 text-red-500">This field is required</span>
        )}

        <label className="text-2xl  px-4 py-2">Last Name</label>
        <input
          className=" mx-4 h-[40px] rounded-md border px-2"
          type="text"
          id="lastName"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="px-4 text-red-500">This field is required</span>
        )}

        <label className="text-2xl  px-4 py-2">Telephone Number</label>
        <input
          className=" mx-4 h-[40px] rounded-md border px-2"
          type="tel"
          id="telephone"
          {...register("telephone", { required: true })}
        />
        {errors.telephone && (
          <span className="px-4 text-red-500">This field is required</span>
        )}

        <label className="text-2xl  px-4 py-2">Email</label>
        <input
          className=" mx-4 h-[40px] rounded-md border px-2"
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="px-4 text-red-500">This field is required</span>
        )}

        <label className="text-2xl  px-4 py-2">Ref</label>
        <input
          className=" mx-4 h-[40px] rounded-md border px-2"
          type="text"
          id="ref"
          {...register("ref", { required: true })}
        />
        {errors.ref && (
          <span className="px-4 text-red-500">This field is required</span>
        )}

        <button
          className="border text-xl border-black w-1/2 self-center my-4 rounded-md p-2 shadow-md hover:bg-black hover:text-white shadow-gray-600 duration-500"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
