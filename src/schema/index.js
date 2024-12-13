import * as Yup from "yup";
const emailOrPhoneValidation = Yup.string()
  .test("email-or-phone", "Please enter a valid email ", function (value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  })
  .required("Please enter your email ");


export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const signInSchema = Yup.object({
  email: Yup.string()
  .required("Email is required")
  .email("Invalid email format"),  password: Yup.string().min(6).required("Please enter your password"),
});

export const forgotInSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  });

export const resetInSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const organizationInSchema = Yup.object({
  companyName: Yup.string().min(2).max(25).required("Please enter name"),
  companyNumber: Yup.string()
  .required("Phone number is required")
  .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  industry: Yup.string().required("Please select the account type"),

});
export const departmentInSchema = Yup.object({
  department1: Yup.string().required("Please provide department name"),
  department2: Yup.string().notRequired(), 
});
export const designationInSchema = Yup.object({
  designationName: Yup.string().required("Please provide designation name"),
  department: Yup.string().required("Please select the account type"),
});
export const codeInSchema = Yup.object({
  couponCode: Yup.string().min(2).required("Please provide code"),

})
export const billingInSchema = Yup.object({
  billingTo: Yup.string().min(2).max(25).required("Please enter name"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Please enter your phone number"),
  gstNumber: Yup.string()
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Invalid GST number format"
    ),
  invoiceMail: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  billingDetails: Yup.string()
    .min(2)
    .max(50)
    .required("Please enter your billing address"),
});




//-------------------------------------------------------------------------------
export const detailsSchema = Yup.object().shape({
  company_name: Yup.string().required("Please enter your company name"),
  phone_number: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Please enter your phone number"),
  email_id: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  country: Yup.string(),
  full_address: Yup.string(),
  city: Yup.string(),
});

export const forgotPasswordSchema = Yup.object().shape({
  emailOrNumber: emailOrPhoneValidation,
});

export const codInitialState = {
  company_name: "",
  phone_number: "",
  email_id: "",
  country: "",
  full_address: "",
  city: "",
  // post_code: "",
};

export const bankDetailsInitialState = {
  account_holder_name: "",
  branch_name: "",
  ifsc_code: "",
  swiftCode: "",
  bank_name: "",
  account_no: "",
  account_type: "",
};
//-------------------------------------------------------------
export const signupInitialValues = {
  name: "",
  email: "",
  phone:"",
  password: "",
  confirmPassword: "",
};
export const signinInitialValues = {
  email: "",
  password: "",
};
export const  forgotinInitialValues = {
  email: "",
};
export const  resetinInitialValues = {
  password: "",
  confirmPassword:""
};

export const  organizationinInitialValues = {
  companyName: "",
  companyNumber:"",
  organizationInSchema:""
};
export const  departmentInitalValues = {
  department1: "",
  department2: ""
};
export const  designationInitialValues = {
  designationName:    "",
  department: ""
};


export const billingInitialValues={
  billingTo : "",
  phoneNumber:"",
  gstNumber:"",
  invoiceMail:"",
  billingDetails:""
}
export const codeInital={
  couponCode : "",
}



//----------------------------------------------------------------
export const bankDetailsSchema = Yup.object().shape({
  account_holder_name: Yup.string().required(
    "Please enter the account holder's name"
  ),
  branch_name: Yup.string().required("Please enter the branch name"),
  ifsc_code: Yup.string().required("Please enter the IFSC code"),
  swiftCode: Yup.string()
    // .matches(
    //   /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
    //   "Please enter a valid SWIFT code"
    // )
    .required("Please enter the SWIFT code"),

  bank_name: Yup.string().required("Please enter the bank name"),
  account_no: Yup.string()
    .min(11)
    .max(17)
    .required("Please enter the account number"),
  account_type: Yup.string().required("Please select the account type"),
});

export const userDetailsSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  dateOfBirth: Yup.date().required("Please enter your date of birth"),
  gender: Yup.string().required("Please select your gender"),
  idCardNo: Yup.string().required("Please enter your ID card number"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  mobileNumber: Yup.string()
    .matches(/^\d{10,15}$/, "Invalid mobile number") // Adjust the regex to allow between 10 and 15 digits
    .required("Mobile number is required"),
  country: Yup.string().required("Please select your country"),
  address: Yup.string().required("Please enter your address"),

  // vaultizoUserId: Yup.string().required("Please enter your user ID"),
  // accountCreationDate: Yup.date().required(
  //   "Please enter account creation date"
  // ),
  // vaultizoReferralCode: Yup.string(),
});
export const AddMemberInitialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};
export const AddMemberSchema = Yup.object({
  name: Yup.string().required("Username is required"), // Ensures the username is not empty

  email: Yup.string()
    .email("Invalid email address") // Ensures the email is in the correct format
    .required("Email is required"), // Ensures the email is not empty

  password: Yup.string()
    .min(6, "Password must be at least 6 characters") // Ensures the password is at least 6 characters long
    .required("Password is required"), // Ensures the password is not empty

  phone: Yup.string()
    .max(15, "Phone number should not a grrater than 15") // Ensures the phone number has exactly 10 digits
    .required("Phone number is required"), // Ensures the phone number is not empty

  // Ensures a package is selected
});

export const EditMemberInitialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  country: "",
  companyName: "",
};

export const EditMemberSchema = Yup.object({
  name: Yup.string(), // Ensures the username is not empty
  email: Yup.string().email("Invalid email address"), // Ensures the email is in the correct format // Ensures the email is not empty
  password: Yup.string().min(6, "Password must be at least 6 characters"), // Ensures the password is at least 6 characters long // Ensures the password is not empty
  phone: Yup.string().matches(
    /^[0-9]{10}$/,
    "Phone number must be exactly 10 digits"
  ), // Ensures the phone number has exactly 10 digits // Ensures the phone number is not empty
  country: Yup.string().required("Country is required"), // Ensures country is not empty

  companyName: Yup.string().required("Company name is required"),

  // Ensures a package is selected
});

export const addPackageInitialValues = {
  plan: "",
  features: "",
  price: "",
  category: "",
  period: "",
  offerCode: "",
};
export const newPasswordInitialValues = {
  newPassword: "",
  confirmPassword: "",
};

export const initialCouponValues = {
  package: "",
  percentage: "",
  fromDate: new Date(),
  toDate: new Date(),
};
export const initialAddPackageValues = {
  package: "",
};
export const AddAdminPackageSchema = Yup.object({
  package: Yup.string().required("Package is required"), // Ensures the package is selected
  count: Yup.string()
});
// Validation schema
export const AddCouponSchema = Yup.object({
  package: Yup.string().required("Package is required"), // Ensures the package is selected

  percentage: Yup.number()
    .typeError("Percentage must be a number") // Ensures percentage is a valid number
    .positive("Percentage must be positive") // Ensures percentage is positive
    .max(100, "Percentage cannot exceed 100") // Ensures percentage is not above 100
    .required("Percentage is required"), // Ensures percentage is not empty

  fromDate: Yup.date().required("From date is required"), // Ensures the from date is provided
  toDate: Yup.date()
    .min(Yup.ref("fromDate"), "To date cannot be before the from date") // Ensures the to date is after from date
    .required("To date is required"), // Ensures the to date is provided
});

export const EditCouponSchema = Yup.object({
  package: Yup.string().required("Package is required"), // Ensures the package is selected

  percentage: Yup.number()
    .typeError("Percentage must be a number") // Ensures percentage is a valid number
    .positive("Percentage must be positive") // Ensures percentage is positive
    .max(100, "Percentage cannot exceed 100") // Ensures percentage is not above 100
    .required("Percentage is required"), // Ensures percentage is not empty

  fromDate: Yup.date().required("From date is required"), // Ensures the from date is provided
  toDate: Yup.date()
    .min(Yup.ref("fromDate"), "To date cannot be before the from date") // Ensures the to date is after from date
    .required("To date is required"), // Ensures the to date is provided
  status: Yup.string(),
});
export const initialCategoryValues = {
  categoryType: "",
  features: [],
};

// Validation Schema
export const AddCategorySchema = Yup.object({
  categoryType: Yup.string()
    .required("Category is required") // Ensures category is not empty
    .matches(
      /^[A-Za-z0-9 ]+$/,
      "Category name can only contain alphanumeric characters and spaces"
    ), // Validate alphanumeric with spaces
  features: Yup.array()
    .min(1, "At least one feature must be selected") // Ensure at least one feature is selected
    .required("Please select at least one feature"),
});

export const AddPackageSchema = Yup.object({
  plan: Yup.string().required("Plan is required"), // Ensures the plan is not empty

  features: Yup.string().required("Features are required"), // Ensures the features field is not empty

  price: Yup.number()
    .typeError("Price must be a number") // Ensures the price is a valid number
    .positive("Price must be positive") // Ensures the price is positive
    .required("Price is required"), // Ensures the price is not empty

  category: Yup.string().required("Category is required"), // Ensures the category is not empty

  period: Yup.string().required("Period is required"), // Ensures the period is not empty

  offerCode: Yup.string()
    .nullable() // Allows the field to be null (optional field)
    .matches(/^[A-Za-z0-9]+$/, "Offer code must be alphanumeric"), // Ensures offer code is alphanumeric
});

export const newPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .required("New password is required") // Ensures the new password is not empty
    .min(6, "New password must be at least 6 characters long"), // Ensures the new password is at least 6 characters long

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match") // Ensures the confirm password matches the new password
    .required("Confirm password is required"), // Ensures the confirm password is not empty
});

// Initial values for package addition
export const packageAddInitialValues = {
  plan: "",
  fixedPriceIND: "",
  fixedPriceUSD: "",
  offerPercentage: "",
  offerPrice: "",
  category: [],
  features: [], // Initialized as an array
  description: "",
  gstPercentage: "",
  planType: "paid",
  freePlanValidityDays: "",
};

// Validation schema
export const packageAddSchema = Yup.object({
  plan: Yup.string()
    .required("Plan name is required")
    .min(3, "Plan name must be at least 3 characters")
    .max(50, "Plan name must be at most 50 characters"),

  fixedPriceIND: Yup.number()
    .typeError("Fixed Price (INR) must be a number")
    .positive("Fixed Price (INR) must be a positive number")
    .test(
      "required-if-paid",
      "Fixed Price (INR) is required for paid plans",
      function (value) {
        const { planType } = this.parent;
        if (planType === "paid") {
          return value !== undefined && value !== null && value !== "";
        }
        return true;
      }
    ),

  fixedPriceUSD: Yup.number()
    .typeError("Fixed Price (USD) must be a number")
    .positive("Fixed Price (USD) must be a positive number")
    .test(
      "required-if-paid",
      "Fixed Price (USD) is required for paid plans",
      function (value) {
        const { planType } = this.parent;
        if (planType === "paid") {
          return value !== undefined && value !== null && value !== "";
        }
        return true;
      }
    ),

  gstPercentage: Yup.number()
    .typeError("GST Percentage must be a number")
    .positive("GST Percentage must be a positive number")
    .test(
      "required-if-paid",
      "GST Percentage is required for paid plans",
      function (value) {
        const { planType } = this.parent;
        if (planType === "paid") {
          return value !== undefined && value !== null && value !== "";
        }
        return true;
      }
    ),

  offerPercentage: Yup.number()
    .typeError("Offer Percentage must be a number")
    .min(0, "Offer Percentage cannot be less than 0")
    .max(100, "Offer Percentage cannot exceed 100"),

  offerPrice: Yup.number()
    .typeError("Offer Price must be a number")
    .positive("Offer Price must be a positive number"),

  category: Yup.array()
    .of(Yup.string())
    .min(1, "At least one category must be selected"),

  features: Yup.array()
    .of(Yup.string().required("Each feature must be a valid string"))
    .min(1, "At least one feature must be added"),

  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description must be 500 characters or less"),

  planType: Yup.string().required("Plan type is required"),

  freePlanValidityDays: Yup.number()
    .typeError("Free Plan Validity Days must be a number")
    .positive("Free Plan Validity Days must be a positive number")
    .test(
      "required-if-free",
      "Free Plan Validity Days is required for free plans",
      function (value) {
        const { planType } = this.parent;
        if (planType === "free") {
          return value !== undefined && value !== null && value !== "";
        }
        return true;
      }
    ),
});

export const packageEditInitial = {
  plan: "",
  category: [],
  features: [], // Initialized as an array
  description: "",
  planType: "paid",
  freePlanValidityDays: "",
};
export const packageEditSchema = Yup.object({
  plan: Yup.string()
    .required("Plan name is required")
    .min(3, "Plan name must be at least 3 characters")
    .max(50, "Plan name must be at most 50 characters"),


  category: Yup.array()
    .of(Yup.string())
    .min(1, "At least one category must be selected"),

  features: Yup.array()
    .of(Yup.string().required("Each feature must be a valid string"))
    .min(1, "At least one feature must be added"),

  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description must be 500 characters or less"),

  planType: Yup.string().required("Plan type is required"),

  freePlanValidityDays: Yup.number()
    .typeError("Free Plan Validity Days must be a number")
    .positive("Free Plan Validity Days must be a positive number")

});