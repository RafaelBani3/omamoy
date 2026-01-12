export function generateWhatsAppLink(phoneNumber, message) {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  
  const formattedNumber = cleanNumber.startsWith("0") 
    ? "62" + cleanNumber.slice(1) 
    : cleanNumber;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
}

export const CONTACT_NUMBER = "6281211819061";
