import { Close } from "@material-ui/icons";

function SimpleDialog({
  children,
  show,
  onClose,
  size,
  noPadding,
  showCloseButton,
}) {
  function handleClose() {
    onClose();
  }
  return (
    <>
      {show === true && (
        <div className="simple-dialog">
          <div
            className={`dialog-container ${size} ${
              noPadding ? "no-padding" : ""
            }`}
          >
            {children}
            {showCloseButton === true && (
              <button
                className="button-icon button-dialog-close"
                onClick={handleClose}
              >
                <Close fontSize="small"></Close>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

SimpleDialog.defaultProps = {
  showCloseButton: true,
};

export default SimpleDialog;
