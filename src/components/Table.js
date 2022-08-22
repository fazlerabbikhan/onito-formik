import React from "react";

const Table = ({ item, index }) => {

    const { name, age, sex, mobile, govtID, guardian, email, emergency, address, state, city, postal, occupation, religion, marital, blood } = item;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td>{sex}</td>
            <td>{mobile}</td>
            <td>{govtID}</td>
            <td>{guardian}</td>
            <td>{email}</td>
            <td>{emergency}</td>
            <td>{address}</td>
            <td>{state}</td>
            <td>{city}</td>
            <td>{postal}</td>
            <td>{occupation}</td>
            <td>{religion}</td>
            <td>{marital}</td>
            <td>{blood}</td>
        </tr>
    );
};

export default Table;
