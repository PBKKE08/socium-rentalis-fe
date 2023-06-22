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

type QueryFilter = {
  area?: string;
  gender?: string;
  category?: string;
};


type ccResponse = {
  categories: CategoryCard[];
  cities: CityCard[];
}

type CategoryCard = {
  id: number;
  name: string;
}

type CityCard = {
  id: number;
  name: string;
}
