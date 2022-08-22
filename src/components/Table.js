import React from "react";

const Table = ({ item, index }) => {

    const { name, age, sex, mobile, govtID } = item;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td>{sex}</td>
            <td>{mobile}</td>
            <td>{govtID}</td>
        </tr>
    );
};

export default Table;
