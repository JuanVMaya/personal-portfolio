import { useState } from "react";
/**
 * Hook that allows to manipulate an alert component by manipulating
 * three state references: Show, Text and alert Type
 * @returns alert Holds the alert state
 * @return showAlert Set the alert state to true, the text and type (default - danger)
 * @returns hideAlert Reset the alert to the default closed state
 */
const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "success",
  });

  const showAlert = ({ text, type = "danger" }) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
