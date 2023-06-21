type PartnerCard = {
  nama: string;
  gender: "m" | "f";
  age?: number;
  harga?: number;
  kategori?: string;
  rating?: number;
  description?: string;
  id?: string | number;
  image?: string;
  isPartner?: "accepted" | "pending" | "rejected";
};

type QueryFilter = {
  area?: string;
  gender?: string;
  category?: string;
};
