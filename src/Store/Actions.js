const addCompany = (company) => {
  return {
    type: "AddCompany",
    payload: company,
  };
};
export default addCompany;
