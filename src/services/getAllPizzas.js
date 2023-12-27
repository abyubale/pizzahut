export const getAllPizzas = () => {
  const options = {
    method: "GET",
  };
  return fetch(
    "https://dev-dqsd0ezg3fi1m4q.api.raw-labs.com/json-programming-heroes",
    options
  ).then((res) => res.json());
};
