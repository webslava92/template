export type RegisterProps = {
  setIsAuth: Function;
};

export type FormValues = {
  Email: string;
  Password: string;
  ConfirmPassword: string;
  AccountType: string;
};

export type FeaturesType = {
  id: number;
  title: string;
};

export type TariffType = {
  id: number;
  price: string;
  features: FeaturesType[];
};
