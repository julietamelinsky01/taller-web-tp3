import { api } from "./api";

export type Artwork = {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
};

export async function getArtworks(limit = 24): Promise<Artwork[]> {
  const { data } = await api.get<Artwork[]>("/photos?_limit=" + limit);
  return data;
}
