import axios from "axios";

export const getMarque = async (os) => {
  try {
    const url = `http://localhost:5000/phones/os/${os}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getModel = async (marque) => {
  try {
    const url = `http://localhost:5000/phones/marque/${marque}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getCouleur = async (model) => {
  try {
    const url = `http://localhost:5000/phones/model/${model}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};
