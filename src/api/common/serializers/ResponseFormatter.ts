import * as JSONBig from 'json-bigint';

function formatResponse(responseObject) {
  if (responseObject === null || responseObject === undefined) {
    return null;
  }

  if (responseObject instanceof Array) {
    return checkForArray(responseObject);
  }
  const bigintCheck = checkForBigInt(responseObject);
  return bigintCheck;
}

function checkForArray(array) {
  const convertedArray = [];
  for (const item of array) {
    convertedArray.push(checkForBigInt(item));
  }
  return convertedArray;
}

function checkForBigInt(object) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (
      object[key] !== undefined &&
      object[key] !== null &&
      typeof object[key] === 'bigint'
    ) {
      object[key] = JSONBig.stringify(object[key]);
    }
  }
  return object;
}

export { formatResponse };
