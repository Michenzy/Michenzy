import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const associatedBrands = [
  { name: 'CoinNewsExtraTV', logo: '/assets/brands/coinnewsextratv.jpg', dataAiHint: 'CoinNewsExtraTV logo' },
  { name: 'ShipPack', logo: '/assets/brands/theshippack.png', dataAiHint: 'ShipPack logo' },
  { name: 'roPay', logo: '/assets/brands/ropay.png', dataAiHint: 'roPay logo' },
  { name: 'SoleFitness Nigeria', logo: '/assets/brands/sole-fitness-ng.jpg', dataAiHint: 'SoleFitness Nigeria logo' },
  { name: 'Digitalents Hub Nigeria', logo: '/assets/brands/digitalents-hub-limited.jpg', dataAiHint: 'Digitalents Hub Limited logo' },
  { name: 'Aforjarik HR Partners', logo: '/assets/brands/aforjarik-hr-partners.jpg', dataAiHint: 'Aforjarik HR Partners logo' },
  { name: 'Digital AD Planet', logo: '/assets/brands/digital-ad-planet.jpg', dataAiHint: 'Digital AD Planet logo' },
  { name: 'Enterprise Digests', logo: '/assets/brands/enterprise-digests.jpg', dataAiHint: 'Enterprise Digests logo' },
  { name: 'SDGC', logo: '/assets/brands/success-drives-global-consult.jpg', dataAiHint: 'SDGC logo' },
  { name: 'Voucher Africa', logo: '/assets/brands/voucher-africa.jpg', dataAiHint: 'Voucher Africa logo' },
];
