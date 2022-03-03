// ----------------------------------------------------------------------

export type OfficeMapProps = {
  country: string;
  address: string;
  photo: string;
  email: string;
  phoneNumber: string;
  latlng: number[];
};

export type CitiesProps = {
  label: string;
  id: string;
  suggested?: boolean | undefined;
};
