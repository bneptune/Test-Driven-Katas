const wrap = (string, column) => {
  if (!string) return "";
  if (string.length <= column) {
    return string;
  }
  if (string.length > column) {
    let frontSlice = string.slice(0, column);
    let lastSpace = frontSlice.lastIndexOf(" ");
    let endSlice = string.slice(lastSpace + 1);
    let returnedStr = frontSlice.slice(0, lastSpace) + "\n" + endSlice;
    return returnedStr;
  }
};

module.exports = wrap;
