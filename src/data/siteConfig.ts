import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brandName: 'Musafir Café & Bakery',
  tagline: 'A Little More Butter. A Lot More Soul.',
  subtitle: 'Contemporary Viennoiserie, Wild Sourdough & Specialty Roasts',
  announcement: {
    message: 'Baking fresh every morning from 7:00 AM · Limited batches daily',
    subtext: 'Pre-orders open for weekend celebration cakes',
    actionText: 'Reserve a Cake',
    actionHref: '#enquire',
  },
  contact: {
    phone: '+91 7015353735',
    phoneFormatted: '+91 7015353735',
    email: 'amit99bhama@gmail.com',
    address: {
      street: '42 Heritage Boulevard',
      suite: 'Suite 104',
      neighborhood: 'Promenade Quarter',
      cityStateZip: 'Metropolis, CA 90210',
      full: '42 Heritage Boulevard, Promenade Quarter, Metropolis, CA 90210',
      mapUrl: 'https://maps.google.com/?q=42+Heritage+Boulevard+Metropolis+CA',
    },
  },
  hours: {
    weekday: 'Tuesday – Friday: 7:00 AM – 6:00 PM',
    weekend: 'Saturday – Sunday: 8:00 AM – 7:00 PM',
    kitchenCloses: 'Closed Mondays for dough resting & test kitchen',
  },
  socials: [
    { name: 'Instagram', handle: '@musafircafe', href: 'https://instagram.com' },
    { name: 'Substack', handle: 'Musafir Morning Journal', href: 'https://substack.com' },
    { name: 'Pinterest', handle: 'Musafir Tablescapes', href: 'https://pinterest.com' },
  ],
};
