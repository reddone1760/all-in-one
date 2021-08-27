import React from "react";

const SemiCircleProgressBarProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value, 2);
};
export default SemiCircleProgressBarProvider;
