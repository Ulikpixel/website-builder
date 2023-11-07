export interface InfoSlug {
  id: number;
  slug: string;
  name: string;
  is_folder: boolean;
  published: boolean;
  path: string | null;
  position: number;
  uuid: string;
  real_path: string;
}

export interface InfoSlugList {
  [key: string]: InfoSlug;
}

export interface InfoSlugListResponse {
  links?: InfoSlugList;
}