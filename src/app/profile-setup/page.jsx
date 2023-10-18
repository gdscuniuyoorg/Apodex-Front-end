/* eslint-disable @next/next/no-img-element */
"use client";

import InputField from "@/components/InputField";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi"

export default function ProfileSetup() {
  const [form, setForm] = useState({
    profilePicture: "",
    coverPicture: "",
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    portfolioLink: "",
    facebookLink: "",
    linkedInLink: "",
    twitterLink: "",
  });

  console.log(form);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        [e.target.id]: URL.createObjectURL(file),
      });
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bg-[#E6E6E61A] px-3 md:px-20 py-14 backdrop-blur-[2px]">
      <div className="bg-white rounded-2xl shadow px-3 md:px-11 py-8 md:py-32 max-w-7xl mx-auto">

        <button type="button" className="float-right">Skip</button>

        <div className="md:w-[400px] mb-10">
          <h2 className="text-3xl font-semibold mb-7">Almost there!!!</h2>
          <p>
            You just need to fill in the following information to complete your
            profile.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col lg:flex-row md:gap-10"
        >
          <div className="flex-1">
            <div className="md:h-[300px] h-[150px] flex gap-4 w-full mb-8 md:mb-[118px]">

              <label htmlFor="profilePicture" className="flex-1 cursor-pointer">
                {form.profilePicture ? (
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src={form.profilePicture}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <>
                    <div className="border-dashed border rounded-lg border-black w-full h-full flex flex-col items-center justify-center">
                      <BiImageAdd className="w-8 h-8" />
                      <p className="font-medium font-work-sans">Add a Profile Picture</p>
                    </div>
                  </>
                )}
                <InputField
                  type="file"
                  id="profilePicture"
                  handleChange={handleImageChange}
                  accept="image/*"
                />
              </label>

              <label htmlFor="coverPicture" className="flex-1 cursor-pointer">
                {form.coverPicture ? (
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src={form.coverPicture}
                      alt="Cover Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <>
                    <div className="border-dashed border rounded-lg border-black w-full h-full flex flex-col items-center justify-center">
                    <BiImageAdd className="w-8 h-8"  />
                      <p className="font-medium font-work-sans">Add a Cover Picture</p>
                    </div>
                  </>
                )}
                <InputField
                  type="file"
                  id="coverPicture"
                  handleChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
            <InputField
              type="text"
              label="First Name"
              id="firstName"
              value={form.firstName}
              handleChange={handleChange}
            />
            <InputField
              type="text"
              label="Last Name"
              id="lastName"
              value={form.lastName}
              handleChange={handleChange}
            />
            <InputField
              type="email"
              label="Email Address"
              id="email"
              value={form.email}
              handleChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <InputField
              isTextArea={true}
              label="Bio"
              id="bio"
              value={form.bio}
              handleChange={handleChange}
            />
            <InputField
              type="url"
              label="Portfolio Link"
              id="portfolioLink"
              value={form.portfolioLink}
              handleChange={handleChange}
            />
            <InputField
              type="url"
              label="Facebook Link"
              id="facebookLink"
              value={form.facebookLink}
              handleChange={handleChange}
            />
            <InputField
              type="url"
              label="LinkedIn Link"
              id="linkedInLink"
              value={form.linkedInLink}
              handleChange={handleChange}
            />
            <InputField
              type="url"
              label="Twitter Link"
              id="twitterLink"
              value={form.twitterLink}
              handleChange={handleChange}
            />
            <button
              type="submit"
              className="uppercase w-full bg-black text-white py-4 font-semibold rounded-lg shadow-inner"
            >
              FINISH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
