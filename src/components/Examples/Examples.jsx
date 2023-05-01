const Examples = ({ data, type }) => {
  return (
    <div className="examples">
      {data.map((item, i) => (
        <div key={i}>
          {type === "additional" ? (
            <>
              <p>
                <strong>{item.name}</strong>
              </p>
              <p>{item.description}</p>
              <p></p>
            </>
          ) : (
            <p>
              <strong>Example: {i + 1}</strong>
            </p>
          )}
          <p>
            <strong>- markdown</strong>
          </p>
          <p>{item.markdown}</p>
          <p>
            <strong>- html</strong>
          </p>
          <p>{item.html}</p>
        </div>
      ))}
    </div>
  );
};

export default Examples;
