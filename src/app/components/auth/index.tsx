import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

const ModalImg = styled.img`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  margin-top: 9px;
  margin-left: 10px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  setSignupOpen: (value: boolean) => void;
  setLoginOpen: (value: boolean) => void;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const {
    signupOpen,
    loginOpen,
    setSignupOpen,
    setLoginOpen,
    handleSignupClose,
    handleLoginClose,
  } = props;
  const classes = useStyles();

  const [memberNick, setMemberNick] = useState<string>("");
  const [memeberPhone, setMemberPhone] = useState<string>("");
  const [memeberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/

  const handleUsername = (e: T) => {
    console.log(e.target.value);
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    console.log(e.target.value);
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest().then();
    }
  };

  const handleSignupRequest = async () => {
    try {
      const isFullfill =
        memberNick !== "" && memeberPhone !== "" && memeberPassword !== "";
      if (!isFullfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memeberPhone,
        memberPassword: memeberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
      handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFullfill = memberNick !== "" && memeberPassword !== "";
      if (!isFullfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memeberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      handleLoginClose();
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            display={"flex"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            sx={{ width: "700px", height: "70%", border: "none" }}
          >
            <Stack sx={{ alignItems: "center" }}>
              <h2
                style={{
                  width: "100%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Signup
              </h2>
              <TextField
                id="outlined-basic"
                label="username"
                variant="outlined"
                sx={{ my: "10px", width: "400px" }}
                onChange={handleUsername}
              />
              <TextField
                id="outlined-basic"
                label="phone number"
                variant="outlined"
                sx={{ my: "10px", width: "400px" }}
                onChange={handlePhone}
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                sx={{ my: "10px", width: "400px" }}
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                variant="extended"
                style={{
                  marginTop: "36px",
                  width: "400px",
                  height: "55px",
                  backgroundColor: "#44adca",
                  color: "#f8f8ff",
                  borderRadius: "4px",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  fontSize: "15px",
                }}
                onClick={handleSignupRequest}
              >
                Signup
              </Fab>
              <Button
                style={{
                  marginTop: "20px",
                  width: "100px",
                  height: "20px",
                  backgroundColor: "transparent",
                  color: "#000",
                  borderBottom: "none",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  fontSize: "14px",
                }}
                onClick={() => {
                  setLoginOpen(true);
                  setSignupOpen(false);
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            display={"flex"}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            sx={{ width: "700px", height: "70%", border: "none" }}
          >
            <Stack
              sx={{
                marginTop: "25px",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  width: "100%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Login
              </h2>
              <TextField
                id="outlined-basic"
                label="username"
                variant="outlined"
                sx={{ my: "10px", width: "400px" }}
                onChange={handleUsername}
              />
              <TextField
                id={"outlined-basic"}
                label={"password"}
                variant={"outlined"}
                sx={{ my: "10px", width: "400px" }}
                type={"password"}
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                variant={"extended"}
                style={{
                  marginTop: "36px",
                  width: "400px",
                  height: "55px",
                  backgroundColor: "#44adca",
                  color: "#f8f8ff",
                  borderRadius: "4px",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  fontSize: "15px",
                }}
                onClick={handleLoginRequest}
              >
                Login
              </Fab>
              <Button
                style={{
                  marginTop: "20px",
                  width: "100px",
                  height: "20px",
                  backgroundColor: "transparent",
                  color: "#000",
                  borderBottom: "none",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  fontSize: "14px",
                }}
                onClick={() => {
                  setSignupOpen(true);
                  setLoginOpen(false);
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
