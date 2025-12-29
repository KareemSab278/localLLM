// https://mui.com/material-ui/react-alert/
import Alert from "@mui/material/Alert";
export { AlertComponent };

const AlertComponent = (type) => {
  switch (type) {
    case "success":
      return <Alert severity="success">This is a success Alert.</Alert>;
    case "info":
      return <Alert severity="info">This is an info Alert.</Alert>;
    case "warning":
      return <Alert severity="warning">This is a warning Alert.</Alert>;
    case "error":
      return <Alert severity="error">This is an error Alert.</Alert>;
    default:
      break;
  }
}
