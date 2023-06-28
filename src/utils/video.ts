export function getVideoId(url: string) {
  const queryStringStartIndex = url.indexOf("?");

  if (queryStringStartIndex !== -1) {
    const queryString = url.substring(queryStringStartIndex + 1);
    const params = queryString.split("&");
    for (let i = 0; i < params.length; i++) {
      const param = params[i].split("=");

      if (param[0] === "v") return param[1];
    }
  }

  return url;
}
