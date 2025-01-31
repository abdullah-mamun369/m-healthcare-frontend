export const setToLocalStorage = (key: string, token: string) => {
  console.log(key, token);
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, token);
};
