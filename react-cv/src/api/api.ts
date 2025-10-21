import axios from "axios";
export const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com", timeout: 10000 });
api.interceptors.request.use((config)=>{ console.log(`[AXIOS] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`); return config; });
api.interceptors.response.use((r)=>r,(e)=>{ console.error("[AXIOS ERROR]", e?.response?.status, e?.message); return Promise.reject(e); });
