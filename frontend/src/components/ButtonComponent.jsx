import Button from "@mui/material/Button";
export { ButtonComponent };
const ButtonComponent = ({ isDisabled = true, onClick, label, style }) => {
  return (
    <Button variant="contained" disabled={isDisabled} onClick={onClick} style={style}>
      {label}
    </Button>
  );
}
