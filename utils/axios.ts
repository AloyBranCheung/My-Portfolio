import axios from "axios";

const cms = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});

export default cms;
