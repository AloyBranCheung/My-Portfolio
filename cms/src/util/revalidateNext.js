// const axios = require("axios");

module.exports = async function () {
  try {
    // await axios.get(
    //   `${strapi.config.get("envs.nextjs.nextBaseUrl")}/api/revalidate`,
    //   {
    //     params: {
    //       secret: strapi.config.get("envs.nextjs.revalidateToken"),
    //     },
    //   }
    // );
    return;
  } catch (error) {
    console.error("Error revalidating Next.js ISR (on-demand)");
    console.error(error);
  }
};
