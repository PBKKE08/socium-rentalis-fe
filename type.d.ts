type PartnerCard = {
  name: string;
  gender: "male" | "female";
  age?: number;
  price?: number;
  category?: string;
  rating?: number;
  description?: string;
  id?: string | number;
  image?: string;
  isPartner?: "accepted" | "pending" | "rejected";
};
