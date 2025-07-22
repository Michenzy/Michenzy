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


export const certificates = [
    {
        title: "Google Digital Marketing Certificate",
        embedUrl: "https://drive.google.com/file/d/1QOhppZfb3q1_8apzkepI0TqU14QgOpsm/preview"
    },
    {
        title: "Facebook AD Mastery",
        embedUrl: "https://drive.google.com/file/d/1PYqHMv9MM6Bancuk3vjRTZy30nUbqa3V/preview"
    },
    {
        title: "Strategic Marketing Plan",
        embedUrl: "https://drive.google.com/file/d/1AR4QekiYb8h9LhiwGZ0vxmViSW1T9RQf/preview"
    },
    {
        title: "Product Management",
        embedUrl: "https://drive.google.com/file/d/1rci85Y7YkKLkBw3fNrLmsBKRfA3_DJRV/preview"
    },
    {
        title: "Professional Soft Skills",
        embedUrl: "https://drive.google.com/file/d/1_K4aRYjZikKCPY0Rbp6hdOm6U43GrlTb/preview"
    },
    {
        title: "Employability Skill Training",
        embedUrl: "https://drive.google.com/file/d/1laTJGnfuj00iwR9YTJKOximR5eL8tigg/preview"
    },
    {
        title: "AI Career Essentials",
        embedUrl: "https://drive.google.com/file/d/1bQMr1xNKYJ2TkIAqPgWzrIwwc76onJpd/preview"
    },
    {
        title: "Grant Writing",
        embedUrl: "https://drive.google.com/file/d/15BRHEbrEZf5dVrw8BImlWO1kiVqL5Yky/preview"
    },
    {
        title: "Blockchain",
        embedUrl: "https://drive.google.com/file/d/1jIOpyDnI6RFuHeG0bTieV6Ay-mj3aD61/preview"
    },
    {
        title: "Google Developer Certificate",
        embedUrl: "https://drive.google.com/file/d/1G_77UaxNbo8JB1ttLEvGABDCXplHNhUG/preview"
    }
]
