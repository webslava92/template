import { Avatar, Box, Card, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(2),
  },
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  fontSize: "1.5rem",
  backgroundColor: theme.palette.primary.main,
  width: "60px",
  height: "60px",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    width: "80px",
    height: "80px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1),
  fontWeight: 700,
  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(2),
  },
}));

export const LinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const DividerBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const SocialText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "-10px",
  left: 0,
  right: 0,
  width: "110px",
  fontSize: "0.9rem",
  display: "flex",
  color: theme.palette.text,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.grey[900],
  margin: "auto",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

export const SocialBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const IconAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: "transparent",
}));

export const TariffCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));

export const TariffCardHeader = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
}));

export const TariffCardText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
}));