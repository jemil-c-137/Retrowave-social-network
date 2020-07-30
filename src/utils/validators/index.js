

export const required = (value) => {
  if(value) return undefined
  return "Fill the field";
}

export const maxLengthCreator = (maxlength) => (value) =>   value.length > maxlength ? `must be less${maxlength}` : undefined;
