const params = (data: any) => {
  return Object.keys(data)
    .map((key) => `${key}=${encodeURIComponent(data[key])}`)
    .join("&");
};

export const fetchGet = async (url: string, data: any = "") => {
  if (data !== "") {
    url = url + "?" + params(data);
  }
  return await fetch(url)
    .then((res) => res.json())
    .catch((res) => res);
};

export const fetchPost = async (
  url: string,
  data: object,
  config: any = undefined
) => {
  return await fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    mode: "cors",
  }).then((res) => res.json());
};
