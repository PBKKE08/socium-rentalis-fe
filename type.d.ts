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
  city?: string;
};

<<<<<<< Updated upstream
type QueryFilter = {
  area?: string;
  gender?: string;
  category?: string;
};

=======
>>>>>>> Stashed changes
type CategoryCard = {
  id: number;
  nama: string;
}
