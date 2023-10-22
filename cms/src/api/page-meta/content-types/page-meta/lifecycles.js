const revalidateNextjs = require("../../../../util/revalidateNext");

module.exports = {
  async afterCreate() {
    await revalidateNextjs();
  },
  async afterCreateMany() {
    await revalidateNextjs();
  },
  async afterUpdate() {
    await revalidateNextjs();
  },
  async afterUpdateMany() {
    await revalidateNextjs();
  },
  async afterDelete() {
    await revalidateNextjs();
  },
  async afterDeleteMany() {
    await revalidateNextjs();
  },
};
