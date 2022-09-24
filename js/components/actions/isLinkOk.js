import { noCorsUrl } from "../variables.js";
//const axios = require("axios");
// export default async function isLinkOk(url) {
//     // provoke a link that fails:
//     url = "https://vg.no/rubbishlink";
//     // Add a response interceptor
//     axios.interceptors.response.use(
//         function (response) {
//             // Any status code that lie within the range of 2xx cause this function to trigger
//             // Do something with response data
//             return response;
//         },
//         function (error) {
//             // Any status codes that falls outside the range of 2xx cause this function to trigger
//             // Do something with response error
//             console.log("We will do something with this request error after it is sent...");
//             return Promise.reject(error);
//         }
//     );

//     axios
//         .get(noCorsUrl + url)
//         .then((response) => console.log("This is the response:" + response))
//         .catch((error) => {
//             console.log("error: " + error);
//         });
// }

// export default async function isLinkOk(url) {
//     fetch(noCorsUrl + url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else if (response.status === 404) {
//                 return Promise.reject("error 404");
//             } else {
//                 return Promise.reject("some other error: " + response.status);
//             }
//         })
//         .then((data) => console.log("data is", data))
//         .catch((error) => console.log("error is", error));
// }

// Alternative from: https://blog.logrocket.com/intercepting-javascript-fetch-api-requests-responses/
// export default async function isLinkOk(url) {
//     const { fetch: originalFetch } = window;
//     window.fetch = async (...args) => {
//         let [resource, config] = args;
//         let response = await originalFetch(resource, config);
//         if (!response.ok && response.status === 404) {
//             // 404 error handling
//             console.log("We got a 404 here...");
//             return Promise.reject(response);
//         }
//         return response;
//     };
//     fetch(noCorsUrl + url)
//         .then((response) => response.json())
//         .then((json) => console.log(json))
//         .catch((error) => {
//             console.error(error);
//         });
// }

export default async function isLinkOk(url) {
    try {
        const data = await fetch(noCorsUrl + url);
        if (data.status === 200) {
            // 200 means the url is valid.
            return true;
        }
        if (!data.ok && data.status === 404) {
            // In rare occasions the dynamicly created urls do not work and will result in a 404-error in the console.log,
            // this are hidden from the user as I`m unable to intercept with the logging of this error.
            console.clear();
            return false;
        }
    } catch (error) {
        return false;
    }
}
