export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface AdvertisingCardStoryblok {
  title: string;
  up_title: string;
  background: AssetStoryblok;
  _uid: string;
  component: 'advertising-card';
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
    id?: string;
    cached_url?: string;
    anchor?: string;
    linktype?: 'story';
    story?: {
      name: string;
      created_at?: string;
      published_at?: string;
      id: number;
      uuid: string;
      content?: {
        [k: string]: any;
      };
      slug: string;
      full_slug: string;
      sort_by_date?: null | string;
      position?: number;
      tag_list?: string[];
      is_startpage?: boolean;
      parent_id?: null | number;
      meta_data?: null | {
        [k: string]: any;
      };
      group_id?: string;
      first_published_at?: string;
      release_id?: null | number;
      lang?: string;
      path?: null | string;
      alternates?: any[];
      default_full_slug?: null | string;
      translated_slugs?: null | any[];
      [k: string]: any;
    };
    [k: string]: any;
  }
  | {
    url?: string;
    cached_url?: string;
    anchor?: string;
    linktype?: 'asset' | 'url';
    [k: string]: any;
  }
  | {
    email?: string;
    linktype?: 'email';
    [k: string]: any;
  };

export interface ButtonStoryblok {
  text: string;
  variant?: 'blue-dark' | 'white' | 'yellow';
  icon?: boolean;
  link: Exclude<MultilinkStoryblok, { linktype?: 'email' } | { linktype?: 'asset' }>;
  _uid: string;
  component: 'button';
  [k: string]: any;
}

export interface ContainerStoryblok {
  variants: 'small' | 'medium' | 'large' | 'xlarge';
  background?: 'blue-dark' | 'green' | 'dark' | 'grey';
  grid?: '2' | '3' | '4';
  content: (AdvertisingCardStoryblok | ButtonStoryblok | ContainerStoryblok | HeroStoryblok | OrganickStoryblok)[];
  _uid: string;
  component: 'container';
  [k: string]: any;
}

export interface HeroStoryblok {
  up_title: string;
  title: string;
  background: AssetStoryblok;
  content: ButtonStoryblok[];
  _uid: string;
  component: 'hero';
  [k: string]: any;
}

export interface OrganickStoryblok {
  title: string;
  description: string;
  content: (HeroStoryblok | ContainerStoryblok)[];
  _uid: string;
  component: 'organick';
  [k: string]: any;
}
