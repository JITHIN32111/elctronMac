import axiosConfig from "../config/axiosConfig";
const authAPI = () => {
  const doLogin = async (data) => {
    const res = await axiosConfig.post("/admin/login", data);
    return res;
  };

  const doSignUp = async (data) => {
    const res = await axiosConfig.post("/admin/signup", data);
    return res;
  };

  const doSendMailforReset = async (data) => {
    const res = await axiosConfig.post("/admin/forgot-password", data);
    return res;
  };

  const doResetPassword = async (data) => {
    const res = await axiosConfig.patch("/admin/change-password", data);
    return res;
  };

  const showPackages = async () => {
    const res = await axiosConfig.get(`/package/all-packages`);
    return res;
  };

  const ShowAdminProfile = async () => {
    const res = await axiosConfig.get(`/admin/get-profile`);
    return res;
  };

  const doOrganizationRegister = async (data) => {
    const res = await axiosConfig.post("/admin/company-profile", data);
    return res;
  };

  const doUploadCompanyImage = async (data) => {
    const res = await axiosConfig.post("/admin/company-upload", data);
    return res;
  };

  const doCreateDepartment = async (data) => {
    const res = await axiosConfig.post("/admin/create-depatment", data);
    return res;
  };
  const doDeleteDepartment = async (id) => {
    const res = await axiosConfig.delete(`/admin/delete-depatment/${id}`);
    return res.data
  };
  const doEditDepartment = async (id,name) => {
    const res = await axiosConfig.patch(`/admin/edit-depatment/${id}`,{name});
    return res.data;
  };


  const doFetchDesignation = async (currentPage = null, limitPerPage = null, searchTerm = "") => {
    const params = {};
    if (currentPage) params.page = currentPage;
    if (limitPerPage) params.limit = limitPerPage;
    if (searchTerm) params.search = searchTerm;
  
    const res = await axiosConfig.get("/admin/get-designation",{params});
    return res;
  };

  
  const doCreateDesignation = async (data) => {
    const res = await axiosConfig.post("/admin/create-designation", data);
    return res;
  };
  const doDeleteDesignation = async (id) => {
    const res = await axiosConfig.delete(`/admin/delete-designation/${id}`);
    return res.data
  };
  const doEditDesignation = async (id,data) => {
    const res = await axiosConfig.patch(`/admin/edit-designation/${id}`,data);  
    return res.data;
  };
  


  const doPurchaseFreePackage = async (data) => {
    const res = await axiosConfig.post("/admin/free-package", data);
    return res;
  };

  const doCheckCouponCode = async (data) => {
    const params = new URLSearchParams(data).toString();
    const res = await axiosConfig.get(`/admin/get-reduced-amount?${params}`);
    return res;
  };

  const doCreateOrderInRazorPay = async (data) => {
    const res = await axiosConfig.post("/admin/razorpay", data);
    return res;
  };

  const doPaymentVerifyRazorPay = async (verificationData) => {
    try {
      const { paymentId, orderId, signature } = verificationData;

      console.log(verificationData, "verificationData");

      const headers = {
        "x-razorpay-signature": signature,
      };

      const body = {
        paymentId,
        orderId,
      };

      const res = await axiosConfig.post("admin/verify-razorpay", body, {
        headers,
      });

      return res; // Return the response
    } catch (error) {
      console.error("Error in payment verification API call:", error);
      throw error; // Throw an error if the API call fails
    }
  };

  const doCreateOrderInPaypal = async(data)=>{
const res = await axiosConfig.post("/admin/paypalOrder",data);
return res;

};

const doSuccessInPaypal = async (params) => {
  const res = await axiosConfig.get(`/admin/success`, {
    params: {
      paymentId: params.paymentId,
      PayerID: params.payerId,
    },
  });
  return res;
};





  /////
  const doFetchDepartment = async (currentPage = null, limitPerPage = null, searchTerm = "") => {
    const params = {};
  
    if (currentPage) params.page = currentPage;
    if (limitPerPage) params.limit = limitPerPage;
    if (searchTerm) params.search = searchTerm;
  console.log(params);
  
    const res = await axiosConfig.get("/admin/get-depatment",{params});
    return res;
  };

  
  return {
    doLogin,
    doSignUp,
    doSendMailforReset,
    doResetPassword,
    doOrganizationRegister,
    doUploadCompanyImage,
    doCreateDepartment,
    doDeleteDepartment, 
    showPackages,
    ShowAdminProfile,
    doPurchaseFreePackage,
    doPaymentVerifyRazorPay,
    doCreateOrderInRazorPay,
    doCheckCouponCode,
    doFetchDepartment,
    doCreateOrderInPaypal,
    doSuccessInPaypal,
    doEditDepartment,
    doFetchDesignation,
    doCreateDesignation ,
    doDeleteDesignation,
    doEditDesignation
  };
};

export default authAPI;
