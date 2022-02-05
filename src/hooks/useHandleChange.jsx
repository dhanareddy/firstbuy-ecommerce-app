import React, { useState } from "react";

const useHandleChange = initialValue => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const update = {
    value,
    onChange: e => setValue(e.target.value),
  };
  return [value, update, reset];
};

export default useHandleChange;
