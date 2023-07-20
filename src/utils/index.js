export const convertNamingConvention = (obj) => {
  const newObj = {};
  for (let property in obj) {
    const parts = property.split('_');
    const camelCase = parts.map((part, index) => {
      if (index === 0) {
        return part;
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    }).join('');
    newObj[camelCase] = obj[property];
  }
  return newObj;
}
