const revalidateNextjs = require("../../../../util/revalidateNext");

module.exports = {
  afterCreate() {
    revalidateNextjs();
  },
  afterCreateMany() {
    revalidateNextjs();
  },
  afterUpdate() {
    revalidateNextjs();
  },
  afterUpdateMany() {
    revalidateNextjs();
  },
  afterDelete() {
    revalidateNextjs();
  },
  afterDeleteMany() {
    revalidateNextjs();
  },
};
