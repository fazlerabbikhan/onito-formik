import React, { useState } from "react";
import { useFormik } from "formik";
import Table from "./Table";

const MyForm = () => {

    const [users, setUsers] = useState([]);

    const formik = useFormik({
        initialValues: {},
        onSubmit: (user) => {
            setUsers([...users, user]);
        },
    });

    console.log(users);

    return (
        <div>
            <h1 className="text-4xl text-center text-sky-600 mt-5">Onito Formik</h1>
            <form className="my-10" onSubmit={formik.handleSubmit}>

                <h1 className="underline mb-2">Personal Details:</h1>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="name">
                            Name<span className="text-red-600">*</span>
                        </label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Name"
                            id="name"
                            name="name"
                            type="text"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="age">
                            Date of Birth or Age<span className="text-red-600">*</span>
                        </label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="DD/MM/YYYY or Age in Years"
                            id="age"
                            name="age"
                            type="text"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.age}
                        />
                    </div>

                    <div>
                        <label htmlFor="sex">
                            Sex<span className="text-red-600">*</span>
                        </label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="sex"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.sex}
                        >
                            <option>Select One</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-between mt-5">
                    <div>
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Mobile"
                            id="mobile"
                            name="mobile"
                            type="number"
                            min={1}
                            onChange={formik.handleChange}
                            value={formik.values.mobile}
                        />
                    </div>

                    <div>
                        <label htmlFor="govtID">Govt Issued ID</label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="idType"
                            onChange={formik.handleChange}
                            value={formik.values.idType}
                        >
                            <option>Select One</option>
                            <option>National ID</option>
                            <option>Birth Registration</option>
                            <option>Other</option>
                        </select>
                        <input
                            className="input mx-2 input-bordered input-primary   max-w-xs"
                            placeholder="Enter Govt ID"
                            id="govtID"
                            name="govtID"
                            type="number"
                            min={1}
                            onChange={formik.handleChange}
                            value={formik.values.govtID}
                        />
                    </div>
                </div>

                <h1 className="underline mt-10 mb-2">Contact Details:</h1>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="guardian">Guardian Details</label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="guardianType"
                            onChange={formik.handleChange}
                            value={formik.values.guardianType}
                        >
                            <option>Select One</option>
                            <option>Father</option>
                            <option>Mother</option>
                            <option>Other</option>
                        </select>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Guardian Name"
                            id="guardian"
                            name="guardian"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.guardian}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Email"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="emergency">Emergency Contact Number</label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Mobile"
                            id="emergency"
                            name="emergency"
                            type="number"
                            min={1}
                            onChange={formik.handleChange}
                            value={formik.values.emergency}
                        />
                    </div>
                </div>

                <h1 className="underline mt-10 mb-2">Address Details:</h1>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Address"
                            id="address"
                            name="address"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="state"
                            onChange={formik.handleChange}
                            value={formik.values.state}
                        >
                            <option>Select One</option>
                            <option>Dhaka</option>
                            <option>Chitagong</option>
                            <option>Rajshahi</option>
                            <option>Rangpur</option>
                            <option>Mymensingh</option>
                            <option>Sylhet</option>
                            <option>Barishal</option>
                            <option>Khulna</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email">City</label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                        >
                            <option>Select One</option>
                            <option>Dhaka</option>
                            <option>Chitagong</option>
                            <option>Rajshahi</option>
                            <option>Rangpur</option>
                            <option>Mymensingh</option>
                            <option>Sylhet</option>
                            <option>Barishal</option>
                            <option>Khulna</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-between mt-5">
                    <div>
                        <label htmlFor="firstName">Country</label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="country"
                            name="country"
                            type="text"
                            value="Bangladesh"
                        />
                    </div>

                    <div>
                        <label htmlFor="postal">Postal Code</label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Postal Code"
                            id="postal"
                            name="postal"
                            type="number"
                            min={1}
                            onChange={formik.handleChange}
                            value={formik.values.postal}
                        />
                    </div>
                </div>

                <h1 className="underline mt-10 mb-2">Other Details:</h1>
                <div className="flex justify-between">
                    <div>
                        <label htmlFor="occupation">Occupation</label>
                        <input
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            placeholder="Enter Occupation"
                            id="occupation"
                            name="occupation"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.occupation}
                        />
                    </div>

                    <div>
                        <label htmlFor="religion">Religion</label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="religion"
                            onChange={formik.handleChange}
                            value={formik.values.religion}
                        >
                            <option>Select One</option>
                            <option>Islam</option>
                            <option>Hinduism</option>
                            <option>Christianity</option>
                            <option>Buddhism</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="marital">Marital Status</label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="marital"
                            onChange={formik.handleChange}
                            value={formik.values.marital}
                        >
                            <option>Select One</option>
                            <option>Married</option>
                            <option>Unmarried</option>
                            <option>Widowed</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="blood">Blood Group</label>
                        <select
                            className="input mx-2 input-bordered input-primary  max-w-xs"
                            id="blood"
                            onChange={formik.handleChange}
                            value={formik.values.blood}
                        >
                            <option>Select One</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex justify-between">
                        <div>
                            <label htmlFor="nationality">Nationality</label>
                            <input
                                className="input mx-2 input-bordered input-primary  max-w-xs"
                                id="nationality"
                                name="nationality"
                                type="text"
                                value="Bangladeshi"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="flex justify-end mt-5 ml-auto btn btn-info"
                    type="submit"
                >
                    Submit
                </button>
            </form >

            <hr className="mt-5" />

            <div className="border rounded-xl my-10 overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Mobile</th>
                            <th>Govt ID</th>
                            <th>Guardian</th>
                            <th>Email</th>
                            <th>Emergency</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Postal Code</th>
                            <th>Occupation</th>
                            <th>Religion</th>
                            <th>Marital Status</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => <Table
                            key={index}
                            item={item}
                            index={index}
                        ></Table>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyForm;
