import { useEffect, useState } from "react";
import data from "../../data";
import Examples from "../Examples/Examples";
const Docs = () => {
  return (
    <div className="docs">
      {data.map((item, i) => (
        <div key={i}>
          {i === 0 ? (
            <h2 style={{ border: "none", margin: "auto" }}>{item.name}</h2>
          ) : (
            <h2>{item.name}</h2>
          )}
          <p>{item.description}</p>
          {item.examples.length > 0 && <Examples data={item.examples} />}
          {item.additional_examples.length > 0 && (
            <Examples type="additional" data={item.additional_examples} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Docs;
