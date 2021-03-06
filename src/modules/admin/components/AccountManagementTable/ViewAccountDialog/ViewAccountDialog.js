import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import { Grid } from "@material-ui/core";
import "./ViewAccountDialog.scss";
import { ButtonStyled } from "stylesheet/Button/Button.styled";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2)
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontWeight: "600" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  backgroundColor: "#F1F2F4",
}));

const ViewAccountDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({});

  const [roles, setRoles] = React.useState([]);
  const [whitelabels, setWhiteLabels] = React.useState([]);

  const handleChangeRole = (event) => {
    setRoles(event.target.value);
  };

  const handleChangeWhiteLabel = (event) => {
    setWhiteLabels(event.target.value);
  };


  useEffect(() => {
    setOpen(props.openDialog);
    setUser(props.selectedUser)

  }, [props.openDialog, props.selectedUser]);

  const closeModal = () => {
    props.callBackClose();
  };


  return (
    <BootstrapDialog
      onClose={closeModal}
      open={open}
      maxWidth="md"
      fullWidth={true}
      aria-labelledby="customized-view-account-dialog-title"
      className="view-account-container"
    >
      <BootstrapDialogTitle
        id="customized-view-account-dialog-title"
        style={{
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onClose={closeModal}
      >
        User Detail
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Grid container>
          <Grid item xs={6} md={4}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">USERNAME *</p>
              <p className="body-view-account-dialog">{user.name}</p>
            </Stack>
          </Grid>

          <Grid item xs={6} md={8}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">EMAIL *</p>
              <p className="body-view-account-dialog">
                {user.email}
              </p>
            </Stack>
          </Grid>

          <Grid item xs={4} mb={2}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">ROLE ID *</p>
              <p className="body-view-account-dialog">{user.role}</p>
            </Stack>
          </Grid>
          <Grid item xs={4} mb={2}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">TYPE</p>
              <p className="body-view-account-dialog">{user.type}</p>
            </Stack>
          </Grid>
          <Grid item xs={4} mb={2}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">WHITE LABEL</p>
              <p className="body-view-account-dialog">#FFFFFF</p>
            </Stack>
          </Grid>


          <Grid item xs={4} mb={2}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">USER ID *</p>
              <p className="body-view-account-dialog">{user.userId}</p>
            </Stack>
          </Grid>
          <Grid item xs={4} mb={2}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">Added Date</p>
              <p className="body-view-account-dialog">12:00:00, 12/03/2022</p>
            </Stack>
          </Grid>
          <Grid item xs={4} mb={2}>
            <Stack direction="column" m={1}>
              <p className="title-view-account-dialog">Added By</p>
              <p className="body-view-account-dialog">chauthmse</p>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActionsStyled>
        <Button autoFocus style={{ marginRight: 15 }}>
          <i className="fas fa-edit edit-icon" style={{ marginRight: 5 }} />{' '}Edit
        </Button>
        <Button autoFocus color="secondary" style={{ marginRight: 15 }}>
          <i className="fas fa-key delete-icon" style={{ marginRight: 5 }} />{' '}Reset Password
        </Button>
        <Button autoFocus color="error" style={{ marginRight: 15 }}>
          <i className="fas fa-user-slash suspend-icon" style={{ marginRight: 5 }} />{' '} Suspend
        </Button>
        <div style={{ flex: "1 0 0" }} />
        <ButtonStyled purpleGhost variant="outlined" onClick={closeModal}>
          Cancel
        </ButtonStyled>
      </DialogActionsStyled>
    </BootstrapDialog>
  );
};

export default ViewAccountDialog;
