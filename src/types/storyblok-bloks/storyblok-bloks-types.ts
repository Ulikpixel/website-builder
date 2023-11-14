export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ExampleStoryblok {
  title?: string;
  description?: RichtextStoryblok;
  blocks?: (ExampleStoryblok | ExampleBlockStoryblok)[];
  _uid: string;
  component: 'example';
  [k: string]: any;
}

export interface ExampleBlockStoryblok {
  name?: string;
  _uid: string;
  component: 'example-block';
  [k: string]: any;
}
