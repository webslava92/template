import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Card,
  Divider,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  CardContent,
  CardActionArea,
  CardActions,
} from "@mui/material";

type RegisterProps = {
  setIsAuth: Function;
};

type FormValues = {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  AccountType: string;
};

type FeaturesType = {
  id: number;
  title: string;
};

type TariffType = {
  id: number;
  price: string;
  features: FeaturesType[];
};

const tariffData: TariffType[] = [
  {
    id: 0,
    price: "100 $",
    features: [
      {
        id: 0,
        title: "Feature 1",
      },
      {
        id: 1,
        title: "Feature 2",
      },
      {
        id: 2,
        title: "Feature 3",
      },
      {
        id: 3,
        title: "Feature 4",
      },
    ],
  },
  {
    id: 1,
    price: "150 $",
    features: [
      {
        id: 0,
        title: "Feature 1",
      },
      {
        id: 1,
        title: "Feature 2",
      },
      {
        id: 2,
        title: "Feature 3",
      },
      {
        id: 3,
        title: "Feature 4",
      },
      {
        id: 4,
        title: "Feature 5",
      },
    ],
  },
  {
    id: 2,
    price: "200 $",
    features: [
      {
        id: 0,
        title: "Feature 1",
      },
      {
        id: 1,
        title: "Feature 2",
      },
      {
        id: 2,
        title: "Feature 3",
      },
      {
        id: 3,
        title: "Feature 4",
      },
      {
        id: 4,
        title: "Feature 5",
      },
      {
        id: 5,
        title: "Feature 6",
      },
    ],
  },
  {
    id: 3,
    price: "250 $",
    features: [
      {
        id: 0,
        title: "Feature 1",
      },
      {
        id: 1,
        title: "Feature 2",
      },
      {
        id: 2,
        title: "Feature 3",
      },
      {
        id: 3,
        title: "Feature 4",
      },
      {
        id: 4,
        title: "Feature 5",
      },
      {
        id: 5,
        title: "Feature 6",
      },
      {
        id: 6,
        title: "Feature 7",
      },
    ],
  },
];

export function Register({ setIsAuth }: RegisterProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedTariff, setSelectedTariff] = useState<number | undefined>(undefined)
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      Email: "",
      Password: "",
      ConfirmPassword: "",
      AccountType: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const dataWithTariff = { ...data, selectedTariff };
    console.log(dataWithTariff);
  };

  return (
    <Container component="main" maxWidth={step === 1 ? "xs" : "sm"}>
      <Card sx={{ p: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            marginTop: { xs: 1, md: 2 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {step === 1 && (
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
          )}
          <Typography
            component="h1"
            variant="h5"
            sx={{ margin: { xs: 1, md: 2 } }}
          >
            {step === 1 ? "Registration" : "Choose a tariff plan"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => onSubmit(data))}
            style={{ textAlign: "left" }}
          >
            {step === 1 ? (
              <>
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
                  name="ConfirmPassword"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      value={value}
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm password"
                      margin="normal"
                      required
                      fullWidth
                      size="medium"
                      helperText={
                        <span style={{ color: "red" }}>
                          {errors?.Password?.message}
                        </span>
                      }
                      autoComplete="confirmPassword"
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
                  name="AccountType"
                  render={({ field: { onChange, value } }) => (
                    <FormControl
                      variant="outlined"
                      sx={{ mt: 2, mb: 1, minWidth: "100%" }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Account type
                      </InputLabel>
                      <Select
                        labelId="accountType"
                        id="accountType"
                        label="Account type"
                        color="primary"
                        fullWidth
                        value={value}
                        onChange={(event: SelectChangeEvent) =>
                          onChange(event.target.value)
                        }
                      >
                        <MenuItem value={"Brand"}>Brand</MenuItem>
                        <MenuItem value={"Affiliate"}>Affiliate</MenuItem>
                        <MenuItem value={"Brand / Affiliate"}>
                          Brand / Affiliate
                        </MenuItem>
                      </Select>
                    </FormControl>
                  )}
                  rules={{
                    required: true,
                  }}
                />
                <Button
                  fullWidth
                  disabled={!isValid}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => setStep(2)}
                >
                  NEXT
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setIsAuth(true)}
                  >
                    Already have an account?
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
              </>
            ) : (
              <>
                <Grid container spacing={2}>
                  {tariffData.map((tariff: TariffType) => {
                    return (
                      <Grid item xs={6} md={3} key={tariff.id}>
                        <Card
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                          }}
                        >
                          <CardActionArea>
                            <Box
                              component="div"
                              height="140"
                              sx={{ backgroundColor: "primary.main" }}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="body1"
                                component="div"
                              >
                                {tariff?.features?.map(
                                  (feature: FeaturesType) => {
                                    return (
                                      <p
                                        key={feature.id}
                                        style={{ margin: "4px auto" }}
                                      >
                                        {feature.title}
                                      </p>
                                    );
                                  }
                                )}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              variant={
                                tariff.id === selectedTariff
                                  ? "contained"
                                  : "outlined"
                              }
                              onClick={() => setSelectedTariff(tariff.id)}
                              sx={{ margin: "0 auto" }}
                            >
                              {tariff.price}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  disabled={!isValid}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  NEXT
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
