import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import {
  CardStyled,
  Wrapper,
  Title,
  SubmitButton,
  LinksBox,
  DividerBox,
  DividerStyled,
  SocialText,
  SocialBox,
  IconAvatar,
  AvatarStyled,
} from "./SignIn.styles";
import { FormValues, SignInProps } from "./SegnIn.types";
import GoogleIcon from "../icons/GoogleIcon";
import LinkeddInIcon from "../icons/LinkeddInIcon";
import TwitterIcon from "../icons/TwitterIcon";


const required = {
  value: true,
  message: "Required field",
};

const minLength = {
  value: 6,
  message: "Minimum of 6 characters",
};

const emailPattern = {
  value:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  message: "Enter the correct email",
};

export function SignIn({ setIsAuth }: SignInProps) {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CardStyled>
        <Wrapper>
          <AvatarStyled>Logo</AvatarStyled>
          <Title variant="h5">Sign in</Title>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            style={{ textAlign: "left" }}
          >
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  value={value}
                  label="Email address"
                  fullWidth
                  margin="normal"
                  size="medium"
                  helperText={
                    <span style={{ color: "red" }}>
                      {errors?.email?.message}
                    </span>
                  }
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              rules={{ required, minLength, pattern: emailPattern }}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  value={value}
                  label="Password"
                  fullWidth
                  margin="normal"
                  size="medium"
                  helperText={
                    <span style={{ color: "red" }}>
                      {errors?.password?.message}
                    </span>
                  }
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              rules={{ required, minLength }}
            />
            <Controller
              control={control}
              name="rememberMe"
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value}
                      color="primary"
                      onChange={onChange}
                    />
                  }
                  label="Remember me"
                />
              )}
            />
            <SubmitButton type="submit" fullWidth disabled={isValid}>
              LOGIN
            </SubmitButton>
            <LinksBox>
              <Link variant="body2" sx={{ cursor: "pointer" }}>
                Forgot password?
              </Link>
              <Link
                variant="body2"
                sx={{ cursor: "pointer" }}
                onClick={() => setIsAuth(false)}
              >
                Don't have an account? Sign Up"
              </Link>
            </LinksBox>
            <DividerBox>
              <DividerStyled />
              <SocialText>Or continue with</SocialText>
            </DividerBox>
            <SocialBox>
              <IconAvatar>
                <GoogleIcon />
              </IconAvatar>
              <IconAvatar>
                <LinkeddInIcon />
              </IconAvatar>
              <IconAvatar>
                <TwitterIcon />
              </IconAvatar>
            </SocialBox>
          </form>
        </Wrapper>
      </CardStyled>
    </Container>
  );
}
