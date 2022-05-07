import { SocialLinks } from '../socials';
import { OfficeMapProps, CitiesProps } from '../map';

// ----------------------------------------------------------------------

export type JobByCompanyProps = {
  id: string;
  companyLogo: string;
  companyName: string;
  totalJobs: number;
};

export type JobByCategoryProps = {
  id: string;
  name: string;
  icon: string;
  totalJobs: number;
};

export type JobByCountryProps = {
  id: string;
  location: string;
  coverImg: string;
  totalJobs: string;
  // totalJobs: number; MYLES ORIGINAL
};

export type JobProps = {
  id: string;
  userAvatar: string;
  userName: string;
  level: string;
  type: string;
  salary: string | number;
  experience: string | number;
  isUrgent: boolean;
  category: string;
  content: string;
  views: number;
  createdAt: Date | string | number;
  deadline: Date | string | number;
  slug: string;
  location: string;
  otherBenefits: string[];
  skills: string[];
  favorited: boolean;
  locationMap: OfficeMapProps[];
  includes: {
    label: string;
    enabled: boolean;
  }[];
  languages: string[];
  shareLinks: SocialLinks;
};

export type JobFiltersProps = {
  filterKeyword: string | null;
  filterLocation: CitiesProps | null;
  filterType: string[];
};
