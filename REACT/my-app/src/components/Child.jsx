import { useMemo } from "react";

function Child({ price }) {
  const total = useMemo(() => {
    console.log("Calculating Total...");

    return price.reduce((sum, item) => sum + item, 0);
  }, [price]);

  console.log("Child Render");

  return (
    <>
      <h2>Child Component</h2>

      <p>Prices: {price.join(", ")}</p>

      <p>Total: {total}</p>
    </>
  );
}

export default Child;