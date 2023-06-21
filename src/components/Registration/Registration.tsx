import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Container,
  TextField,
  Link,
  Select,
  SelectChangeEvent,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import { FeaturesType, FormValues, RegisterProps, TariffType } from "./Registration.types";
import { tariffData } from "./mockData";
import {
  AvatarStyled,
  CardStyled,
  DividerBox,
  DividerStyled,
  IconAvatar,
  LinksBox,
  SocialBox,
  SocialText,
  TariffCardHeader,
  TariffCard,
  Title,
  Wrapper,
} from "./Registration.styles";
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

const selectItems = [
  {
    id: 0,
    title: "Brand",
  },
  {
    id: 1,
    title: "Affiliate",
  },
  {
    id: 2,
    title: "Brand / Affiliate",
  },
];

export function Registration({ setIsAuth }: RegisterProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedTariff, setSelectedTariff] = useState<number | undefined>(
    undefined
  );
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
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
    setTimeout(() => {
      setIsAuth(true);
    }, 2000);
  };

  const password = watch("Password");

  return (
    <Container component="main" maxWidth={step === 1 ? "xs" : "sm"}>
      <CardStyled>
        <Wrapper>
          {step === 1 && <AvatarStyled>Logo</AvatarStyled>}
          <Title variant="h5">
            {step === 1 ? "Registration" : "Choose a tariff plan"}
          </Title>
          <form
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
                      label="Email address"
                      fullWidth
                      margin="normal"
                      size="medium"
                      onChange={onChange}
                      onBlur={onBlur}
                      helperText={
                        <span style={{ color: "red" }}>
                          {errors?.Email?.message}
                        </span>
                      }
                    />
                  )}
                  rules={{ required, minLength, pattern: emailPattern }}
                />
                <Controller
                  control={control}
                  name="Password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      value={value}
                      type="password"
                      label="Password"
                      fullWidth
                      margin="normal"
                      size="medium"
                      onChange={onChange}
                      onBlur={onBlur}
                      helperText={
                        <span style={{ color: "red" }}>
                          {errors?.Password?.message}
                        </span>
                      }
                    />
                  )}
                  rules={{ required, minLength }}
                />
                <Controller
                  control={control}
                  name="ConfirmPassword"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      value={value}
                      type="password"
                      label="Confirm password"
                      fullWidth
                      margin="normal"
                      size="medium"
                      onChange={onChange}
                      onBlur={onBlur}
                      helperText={
                        <span style={{ color: "red" }}>
                          {errors?.ConfirmPassword?.message}
                        </span>
                      }
                    />
                  )}
                  rules={{
                    required,
                    minLength,
                    validate: (value) =>
                      value === password || "Passwords do not match",
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
                      <InputLabel>Account type</InputLabel>
                      <Select
                        value={value}
                        labelId="accountType"
                        label="Account type"
                        color="primary"
                        fullWidth
                        size="medium"
                        onChange={(event: SelectChangeEvent) =>
                          onChange(event.target.value)
                        }
                      >
                        {selectItems.map((item) => (
                          <MenuItem value={item.title} key={item.id}>
                            {item.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                  rules={{ required: true }}
                />
                <Button
                  fullWidth
                  disabled={!isValid}
                  variant="contained"
                  onClick={() => setStep(2)}
                  sx={{ mt: 2, mb: 2 }}
                >
                  NEXT
                </Button>
                <LinksBox>
                  <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setIsAuth(true)}
                  >
                    Already have an account?
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
              </>
            ) : (
              <>
                <Grid container spacing={2}>
                  {tariffData.map((tariff: TariffType) => {
                    return (
                      <Grid item xs={6} key={tariff.id}>
                        <TariffCard>
                          <CardActionArea
                            onClick={() => setSelectedTariff(tariff.id)}
                          >
                            <TariffCardHeader>{tariff.price}</TariffCardHeader>
                            <CardContent sx={{ minHeight: "145px" }}>
                              <Box sx={{ textAlign: "center" }}>
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
                              </Box>
                            </CardContent>
                          </CardActionArea>
                          <CardActions sx={{ justifyContent: "center" }}>
                            <Button
                              size="small"
                              variant={
                                tariff.id === selectedTariff
                                  ? "contained"
                                  : "outlined"
                              }
                              onClick={() => setSelectedTariff(tariff.id)}
                            >
                              {tariff.price}
                            </Button>
                          </CardActions>
                        </TariffCard>
                      </Grid>
                    );
                  })}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  disabled={!isValid}
                  sx={{ mt: 6 }}
                >
                  CONFIRM
                </Button>
              </>
            )}
          </form>
        </Wrapper>
      </CardStyled>
    </Container>
  );
}
