import axios from "axios";

export const getMarque = async (os) => {
  try {
    const url = `/api/phones/marques/${os}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getModel = async (marque) => {
  try {
    const url = `/api/phones/models/${marque}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getCouleur = async (model) => {
  try {
    const url = `/api/phones/couleurs/${model}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getRam = async (model) => {
  try {
    const url = `/api/phones/rams/${model}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getStockage = async (model) => {
  try {
    const url = `/api/phones/stockages/${model}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getAntutu = async (model) => {
  try {
    const url = `/api/phones/antutu/${model}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};
