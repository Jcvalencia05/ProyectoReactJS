const baseUrl = "https://fakestoreapi.com";

export const getData = async (url) => {
  const data = await fetch(baseUrl + url);
  const json = await data.json();
  return json;
};
