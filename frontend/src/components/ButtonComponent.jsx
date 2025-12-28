import Button from "@mui/material/Button";

export default function ContainedButtons(isDisabled = true, onClick, label) {
  return (
    <Button variant="contained" disabled={isDisabled} onClick={onClick}>
      {label}
    </Button>
  );
}
