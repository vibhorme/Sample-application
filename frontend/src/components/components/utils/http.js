//export const getApiEndpoint = url => ENV.api.base_url + url;

export const endPoint = "http://vib-hor-app.herokuapp.com/";
// export const endPoint = "http://8f17e0c6.ngrok.io/api/v1/";

export const getApiEndpoint = url => endPoint + url;

export const getHeaders = opts => {
    let headers = {
        // TODO:  temporary setting token into localstorage need to confirm,
        "X-AUTH-TOKEN": localStorage.getItem("token") || "",
    };
    let customHeaders;
    let propsHeaders = opts.headers ? opts.headers : null;
    if (propsHeaders) {
        customHeaders = { ...propsHeaders, ...headers };
    } else {
        customHeaders = { ...headers };
    }

    if (opts.method === "post" || opts.method === "put") {
        customHeaders.Accept = "application/json";
        customHeaders["Content-Type"] = "application/json";
    }

    if (opts.params) {
        customHeaders["Content-Type"] = "multipart/form-data;";
    }

    let apiHeaders = {
        method: opts.method,
        headers: customHeaders,
        body: !opts.params ? JSON.stringify(opts.data) : opts.data,
    };

    if (opts.params) {
        apiHeaders.processData = false;
    }
    return apiHeaders;
};

export const request = (url, opts) => {
    if (!url) {
        throw new Error("url is required");
    }

    const apiUrl = getApiEndpoint(url);
    opts.method = opts.method || "get";
    return new Promise((resolve, reject) => {
        fetch(apiUrl, getHeaders(opts))
            .then(response => {
                if (response.ok) {
                    resolve(response);
                } else if (!response.ok && response.status === 401) {
                    reject(response);
                    //window.location.href = "/login";
                } else {
                    reject(response);
                }
            })
            .catch(res => {
                let err = null;
                let response = res.response;
                if (response && response.data && response.data.error) {
                    err = response.data.error;
                }
                reject(res);
                throw err;
            });
    });
};

export const get = (url, params) => request(url, { params });

export const post = (url, params, data) =>
    request(url, { method: "post", params, data });

export const put = (url, params, data) =>
    request(url, { method: "put", params, data });

export const del = (url, params, data) =>
    request(url, { method: "delete", params, data });
