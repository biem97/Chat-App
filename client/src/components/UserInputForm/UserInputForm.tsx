import * as React from "react";

import { Box, TextField, Typography, Modal, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Favorite as FavoriteIcon } from "@mui/icons-material";

// Hooks
import { useUser } from "../../hooks";

const UserInputForm = () => {
  const [user, updateUser] = useUser();
  const [loading, setLoading] = React.useState(false);
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const [isError, setIsError] = React.useState<boolean>(false);

  const handleClick = React.useCallback(() => {
    if (nameInputRef.current) {
      if (!nameInputRef.current?.value) {
        setIsError(true);
        return;
      }

      setLoading(true);
      setTimeout(
        () =>
          updateUser({
            name: `${nameInputRef.current?.value}`,
            initialized: true,
          }),
        800
      );
    } else {
      console.error("Error: Couldn't find the name input ref");
    }
  }, [updateUser]);

  const onKeyDownHandle = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (nameInputRef.current?.value.length === 0) {
        setIsError(false);
      }

      if (event.code === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <Modal
      open={!user.initialized}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      disableEscapeKeyDown
      disableAutoFocus
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box
        component="form"
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          backgroundColor: "background.paper",
          border: "2px solid ",
          borderColor: "primary.main",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          gap: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography>
          <Link
            href="https://www.youtube.com/watch?v=sNPnbI1arSE"
            target={"_blank"}
          >
            My name is
          </Link>
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Name"
          placeholder="John Doe"
          inputRef={nameInputRef}
          onKeyDown={onKeyDownHandle}
          error={isError}
          helperText={isError && "Incorrect entry."}
        />
        <LoadingButton
          onClick={handleClick}
          endIcon={<FavoriteIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          OK
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default UserInputForm;
