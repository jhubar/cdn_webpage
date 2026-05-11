/** Numéro mobile Belgique — utilisé uniquement pour WhatsApp (pas d’appels). */
export const WHATSAPP_E164 = "32478700573";

const defaultMessage = "Bonjour CDN Automobiles, ";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(defaultMessage)}`;

export const MOBILE_DISPLAY_LOCAL = "0478 700 573";
export const MOBILE_DISPLAY_INTL = "+32 478 70 05 73";
