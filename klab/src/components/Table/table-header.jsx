import React from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        {props?.columns?.map((item) => (
          <th key={item.title}>{item.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
