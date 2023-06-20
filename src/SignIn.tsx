import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
  Card,
  Divider,
} from "@mui/material";

type SignInProps = {
  setIsAuth: Function;
};

type FormValues = {
  Email: string;
  Password: string;
  RememberMe: boolean;
};

export function SignIn({ setIsAuth }: SignInProps) {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      Email: "",
      Password: "",
      RememberMe: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card sx={{ p: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            marginTop: { xs: 1, md: 2 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              fontSize: { xs: "1.5rem", md: "2rem" },
              bgcolor: "primary.main",
              width: { xs: "60px", md: "80px" },
              height: { xs: "60px", md: "80px" },
            }}
          >
            Logo
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ margin: { xs: 1, md: 2 } }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => onSubmit(data))}
            style={{ textAlign: "left" }}
          >
            <Controller
              control={control}
              name="Email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  value={value}
                  id="email"
                  name="email"
                  label="Email Address"
                  margin="normal"
                  required
                  fullWidth
                  size="medium"
                  autoComplete="email"
                  helperText={
                    <span style={{ color: "red" }}>
                      {errors?.Email?.message}
                    </span>
                  }
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Required field",
                },
                minLength: {
                  value: 6,
                  message: "Minimum of 6 characters",
                },
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Enter the correct email",
                },
              }}
            />
            <Controller
              control={control}
              name="Password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  value={value}
                  id="password"
                  name="password"
                  label="Password"
                  margin="normal"
                  required
                  fullWidth
                  size="medium"
                  helperText={
                    <span style={{ color: "red" }}>
                      {errors?.Password?.message}
                    </span>
                  }
                  autoComplete="password"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message: "Required field",
                },
                minLength: {
                  value: 6,
                  message: "Minimum of 6 characters",
                },
              }}
            />
            <Controller
              control={control}
              name="RememberMe"
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
            <Button
              type="submit"
              fullWidth
              disabled={!isValid}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Link variant="body2" sx={{ cursor: "pointer" }}>
                Forgot password?
              </Link>
              <Link variant="body2" sx={{ cursor: "pointer" }} onClick={() => setIsAuth(false)}>
                Don't have an account? Sign Up"
              </Link>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <Divider
                sx={{
                  width: "100%",
                  mt: 4,
                  mb: 4,
                }}
              />
              <Box
                component="p"
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: 0,
                  right: 0,
                  width: "110px",
                  fontSize: "0.9rem",
                  color: "rgba(0,0,0,0.5)",
                  display: "flex",
                  backgroundColor: "#fff",
                  m: "auto",
                  pl: 1,
                  pr: 1,
                }}
              >
                Or continue with
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mt: 3,
                pb: 3,
              }}
            >
              <Avatar src="/auth/google.svg" />
              <Avatar src="/auth/linkedin.svg" />
              <Avatar src="/auth/twitter.svg" />
            </Box>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
