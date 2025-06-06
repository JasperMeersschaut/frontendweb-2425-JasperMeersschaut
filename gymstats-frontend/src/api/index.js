import axiosRoot from 'axios';
import { JWT_TOKEN_KEY } from '../contexts/Auth.context.jsx';

export const axios = axiosRoot.create({
  baseURL: import.meta.env.VITE_API_URL,
  contentURL: import.meta.env.VITE_CONTENT_URL,
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(JWT_TOKEN_KEY);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export async function getAll(url) {
  const { data } = await axios.get(url);
  return data.items;
}

export async function getById(url) {
  const { data } = await axios.get(url);
  return data;
}

export async function save(url, { arg: { id, ...data } }) {
  await axios({
    method: id ? 'PUT' : 'POST',
    url: `${url}/${id ?? ''}`,
    data,
  });
}

export const updateById = async (url, { arg: body }) => {
  const { id, ...values } = body;
  await axios.put(`${url}/${id}`, values);
};

export const post = async (url, { arg }) => {
  const { data } = await axios.post(url, arg);
  return data;
};

export const deleteById = async (url, { arg: id }) => {
  await axios.delete(`${url}/${id}`);
};

export const updateRoleById = async (url, { arg: body }) => {
  const { id, roles } = body;
  await axios.put(`${url}/${id}/roles`, { roles });
};
