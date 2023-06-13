export const base_url = "https://api.polybitfilms.nomoredomains.rocks";

export const register = (name, email, password) => {
  return fetch(`${base_url}/signup`, {
    credentials: "include",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.data) {
        return res;
      } else {
        return Promise.reject(res.error);
      }
    });
};

export const login = (email, password) => {
  return fetch(`${base_url}/signin`, {
    credentials: "include",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => _getResponseData(res))
    .then(({ data }) => data);
};

export const logout = () => {
  return fetch(`${base_url}/signout`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => _getResponseData(res));
};

export const authorize = () => {
  return fetch(`${base_url}/users/me`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => _getResponseData(res))
    .then(({ data }) => data);
};

const _getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  } else {
    return res.json();
  }
};
