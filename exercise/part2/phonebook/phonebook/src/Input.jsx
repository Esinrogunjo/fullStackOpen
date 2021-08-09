import React, { useState } from "react";

const Input = (value, onchange) => {
  return <input type="text" value={value} onChange={onchange} />;
};

export default Input;
