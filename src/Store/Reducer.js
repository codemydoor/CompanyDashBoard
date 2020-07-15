const InitialState = {
  company: [
    {
      companyName: "",
      industry: "",
      location: "",
      date: "",
      approve: "",
      action: "",
    },
  ],
};
const UsersReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "AddCompany":
      const newCompany = {
        companyName: action.payload.companyName,
        industry: action.payload.industry,
        location: action.payload.location,
        date: action.payload.date,
      };
      return {
        ...state,
        company: [...state.company, newCompany],
      };

    default:
      return state;
  }
};
export default UsersReducer;
