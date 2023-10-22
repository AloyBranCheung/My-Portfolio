module.exports = ({ env }) => ({
  nextjs: {
    nextBaseUrl: env("NEXTJS_BASE_URL"),
    revalidateToken: env("REVALIDATE_TOKEN"),
  },
});
