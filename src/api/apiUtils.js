import axios from "axios";

export const URI = "http://127.0.0.1:8000";

export const methods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
}

export function AuthHeader() {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {}
}

export function AuthChecker(error) {
    if (error.response.status === 401) {
        logout();
    }
    return Promise.reject(error);
}

export function logout() {
    localStorage.removeItem("token");
}

export async function MakeApiCall(url, payload, method) {
         switch (method) {
           case methods.GET:
             return await axios
               .get(url, { headers: AuthHeader() })
               .then(response => response)
               .then(result => result.data, AuthChecker);

           case methods.POST:
             return await axios
               .post(url, payload, { headers: AuthHeader() })
               .then(response => response)
               .then(result => result.data, AuthChecker);

           case methods.PUT:
             return await axios
               .put(url, payload, { headers: AuthHeader() })
               .then(response => response)
               .then(result => result.data, AuthChecker);

           case methods.DELETE:
             return await axios
               .put(url, { headers: AuthHeader() })
               .then(response => response)
               .then(result => result.data, AuthChecker);
           default:
             throw new Error("Invalid Request Method");
         }
       }
