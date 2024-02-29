import ax from "axios";

export interface IApiError<T = string> {
  errors: T[];
}
export const axios = (
  contentType: "application/json" | "multipart/form-data" = "application/json",
  responseType?: "blob"
) => {
  const axInstance = ax.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    timeout: 60000,
    responseType,
    headers: {
      "Content-Type": contentType,
    },
  });

  axInstance.interceptors.request.use(
    async (config) => {
    //   const msiBearerToken = getCookie("msiBearerToken");
    //   let bearerToken;
    //   if (msiBearerToken) {
    //     bearerToken = msiBearerToken;
    //   } else {
    //     const msiRefreshToken = getCookie("msiRefreshToken");
    //     if (msiRefreshToken) {
    //       try {
    //         const res = await axInstance.post(
    //           `/users/get_fresh_token?token=${msiRefreshToken}`
    //         );

    //         bearerToken = res?.data?.new_access_token;
    //         document.cookie = `msiBearerToken=${bearerToken}; path=/`;
    //         document.cookie = `msiRefreshToken=${res.data.message.refresh_token}; path=/`;
    //       } catch (error) {
    //         console.error("Error refreshing token:", error);
    //         // Handle error, e.g., redirect to login page
    //       }
    //     }
    //   }
    //   if (config.headers !== undefined) {
    //     config.headers.Authorization = `Bearer ${msiBearerToken}`;
    //   }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axInstance.interceptors.response.use(
    function (res) {
      return res;
    },
    // async function (error) {
    //   const toastId = "logout";
    //   let bearerToken;
    //   const msiRefreshToken = getCookie("msiRefreshToken");

    //   const err: any = error?.response?.data.detail || [error?.message];
    //   if (err === "Token has expired") {
    //     if (msiRefreshToken) {
    //       try {
    //         const res = await axInstance.post(
    //           `/users/get_fresh_token?token=${msiRefreshToken}`
    //         );
    //         bearerToken = res.data.new_access_token;
    //         document.cookie = `msiBearerToken=${bearerToken}; path=/`;
    //         //document.cookie = `msiRefreshToken=${res.data.new_access_token}; path=/`;
    //       } catch (error) {
    //         console.error("Error refreshing token:", error);
    //         document.cookie =
    //           "msiBearerToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //         document.cookie =
    //           "msiRefreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //         // Handle error, e.g., redirect to login page
    //       }
    //     } else {
    //       document.cookie =
    //         "msiBearerToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //       document.cookie =
    //         "msiRefreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //       // Handle error, e.g., redirect to login page
    //     }
    //   }

    //   return Promise.reject(error?.response?.data || [error?.message]);
    // }
  );

  return axInstance;
};
