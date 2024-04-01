export const URL_HOST = "http://localhost:3000";

export enum actionStorage {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const localStorage = (
  id: string,
  action: actionStorage,
  Data?: Object
) => {
  if (actionStorage.GET === action) {
    const get = window.localStorage.getItem(id);
    if (get) {
      return JSON.parse(get);
    }
  } else if (actionStorage.POST === action) {
    window.localStorage.setItem(id, JSON.stringify(Data));
    const res = window.localStorage.getItem(id);
    return res;
  }
};
