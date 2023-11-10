export interface ExampleStoryblok {
  title?: string;
  description?: string;
  blocks?: any[];
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
