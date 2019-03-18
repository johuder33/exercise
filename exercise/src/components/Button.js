import React, { useState } from "react";
import MaterialButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const getRendomTs = (limitTs = 3000) => Math.floor(Math.random() * limitTs);

export const Button = ({ color, onLoad, children }) => {
  const [logging, setLogging] = useState(false);

  return (
    <MaterialButton
      color={color}
      variant={"contained"}
      onClick={() => {
        setLogging(true);
        setTimeout(() => onLoad && onLoad(), getRendomTs());
      }}
    >
      {logging && <CircularProgress size={20} />}
      {children}
    </MaterialButton>
  );
};
