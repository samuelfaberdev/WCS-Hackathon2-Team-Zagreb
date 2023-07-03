import axios from "axios";


export const getMarque = async (os) => {
  try {
    const url = `http://localhost:5000/phones/marques/${os}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getModel = async (marque) => {
  try {
    const url = `http://localhost:5000/phones/models/${marque}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getCouleur = async (model) => {
  try {
    const url = `http://localhost:5000/phones/couleurs/${model}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getRam = async (model) => {
  try {
    const url = `http://localhost:5000/phones/rams/${model}`;
    const { data } =  await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getStockage = async (model) => {
  try {
    const url = `http://localhost:5000/phones/stockages/${model}`
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

 export const getAntutu = async (model) => {
  try {
    const url = `http://localhost:5000/phones/antutu/${model}`
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] }
  }
 };
