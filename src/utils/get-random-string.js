const getRandomString = (length = 8) => {
  let randomString = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    randomString += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return randomString;
};

export default getRandomString;
