import { useStyles } from "./_styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// pis enim, eu cursus elit condimentum in. Maecenas facilisis massa risus, ut vehicula dui ornare eu. Curabitur neque
function FormDialog({ open, setOpen, size, title, children }) {
  const classes = useStyles();
  // convallis ornare pretium. Nam porta rhoncus nunc, sed tincidunt justo gravida eu. Sed vitae ullamcorper elit, quis vulputat
  return (
    <div>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        aria-labelledby='form-dialog-title'
        fullWidth
        maxWidth={size}
      >
        <DialogTitle id='form-dialog-title'>
          {title}
          <IconButton
            className={classes.closeIcon}
            aria-label='close'
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent className={classes.dialog} dividers>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormDialog;
