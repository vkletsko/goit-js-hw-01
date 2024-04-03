function getElementWidth(content, padding, border) {
  const contentToNumber = Number.parseFloat(content);
  const paddingToNumber = Number.parseFloat(padding);
  const borderToNumber = Number.parseFloat(border);

  const fullWidth = borderToNumber + paddingToNumber + contentToNumber + paddingToNumber + borderToNumber;

  return fullWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
