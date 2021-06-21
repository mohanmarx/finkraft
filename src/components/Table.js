import React from "react";

export const Table = () => {
  return (
    <table className="table-padding">
      <thead>
        <tr>
          {Head.map((ele) => (
            <th>{ele}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((el) => (
          <tr>
            {Row.map((ele) => (
              <td>{ele}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Head = [
  "PAN",
  "Assessment Year",
  "Filing Date",
  "Acknowledge No",
  "Status",
];

const Row = [
  "FKLPS8844T",
  "2020 - 2021",
  "4 Oct’20, 6:13pm",
  "654646353454545",
  "ITR Processed",
];
