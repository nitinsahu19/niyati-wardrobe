import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles.jsx";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherPorps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherPorps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
