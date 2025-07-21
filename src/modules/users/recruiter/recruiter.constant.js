export const currencyInputFields = [
  {
    label: "Minimum Salary",
    placeholder: "Minimum Salary",
    name: "min",
    type: "number",
  },
  {
    label: "Maximum Salary",
    placeholder: "Maximum Salary",
    name: "max",
    type: "number",
  },
];
export const jobBasicInfoFields = [
  {
    label: "Job Title",
    placeholder: "Job title",
    name: "title",
    type: "text",
  },
  {
    label: "Company Name",
    placeholder: "Company name",
    name: "company",
    type: "text",
  },
  {
    label: "Company Location",
    placeholder: "Company location",
    name: "location",
    type: "text",
  },
  {
    label: "Company Logo",
    placeholder: "Company logo",
    name: "company_logo",
    type: "url",
  },
];

export const currencyDropdown = {
  defaultValue: "Pick a Currency",
  options: [
    { value: "Pick a Currency", label: "Pick a Currency" },
    { value: "BDT", label: "BDT" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ],
};

export const joCategoriesDropdown = {
  defaultValue: "Pick a Job Category",
  name: "category",
  options: [
    { value: "Pick a Job Category", label: "Pick a Job Category" },
    { value: "Engineering", label: "Engineering" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Design", label: "Design" },
    { value: "Product", label: "Product" },
    { value: "Support", label: "Support" },
    { value: "Web", label: "Web" },
    { value: "Other", label: "Other" },
  ],
};

export const addJobTextAreas = [
  {
    label: "Job Description",
    placeholder: "Job description",
    name: "description",
    type: "text",
  },
  {
    label: "Job Responsibilities (Separate by Comma)",
    placeholder: "Job Responsibilities (Separate by Comma)",
    name: "responsibilities",
    type: "text",
  },
  {
    label: "Job Requirements (Separate by Comma)",
    placeholder: "Job Requirements (Separate by Comma)",
    name: "requirements",
    type: "text",
  },
];

export const hr_relatedInfos = [
  {
    label: "HR Name",
    placeholder: "HR Name",
    name: "hr_name",
    type: "text",
  },
  {
    label: "HR Email",
    name: "hr_email",
    placeholder: "HR Email",
    type: "email",
  },
];
