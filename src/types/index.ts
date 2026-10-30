export type MenuCategoryId = 'pastries' | 'cakes' | 'bread' | 'coffee' | 'seasonal';

export interface MenuItem {
  id: string;
  name: string;
  frenchName?: string;
  description: string;
  price: string;
  category: MenuCategoryId;
  dietary?: string[];
  isSignature?: boolean;
}

export interface SignatureProduct {
  id: string;
  name: string;
  frenchName?: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  tag: string;
  flavorNotes: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'pastry' | 'coffee' | 'craft' | 'space';
  image: string;
  alt: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export type EnquiryType = 'general' | 'custom_cake' | 'event' | 'catering' | 'other';

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  enquiryType: EnquiryType;
  desiredDate: string;
  message: string;
  consent: boolean;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  subtitle: string;
  announcement: {
    message: string;
    subtext?: string;
    actionText?: string;
    actionHref?: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    address: {
      street: string;
      suite: string;
      neighborhood: string;
      cityStateZip: string;
      full: string;
      mapUrl: string;
    };
  };
  hours: {
    weekday: string;
    weekend: string;
    kitchenCloses: string;
  };
  socials: {
    name: string;
    handle: string;
    href: string;
  }[];
}
