/**
|--------------------------------------------------
| Badge API 
|--------------------------------------------------
*/
export const badgePropsData = [
  {
    property: 'icon',
    description:
      'set the icon of badge, see: Icon component of baseweb Or react-icons',
    type: 'React.ReactNode',
    default: '-',
    version: '1.0',
  },
  {
    property: 'count',
    description: 'set the count number of badge',
    type: 'Number',
    default: '-',
    version: '',
  },
  {
    property: 'color',
    description: 'set the text color of count number',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'bgColor',
    description: 'set the background-color of count number',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'path',
    description: 'if you want add link to badge',
    type: 'String',
    default: '',
    version: '',
  },
  {
    property: 'onClick',
    description: 'set the handler to handle click event',
    type: '(event) => void',
    default: '-',
    version: '',
  },
  {
    property: 'style',
    description: 'add your custom style',
    type: 'React.CSSProperties',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| Carousel API 
|--------------------------------------------------
*/
export const carouselPropsData = [
  {
    property: 'className',
    description: 'set the className of carousel',
    type: 'String',
    default: '-',
    version: '1.0',
  },
  {
    property: 'children',
    description: 'add Slide component or any other React component',
    type: 'React.ReactNode',
    default: '-',
    version: '',
  },
  {
    property: 'carouselSelector',
    description: 'add a unique string for carousel id',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'options',
    description:
      'we use glide carousel. Here is the <a href="https://glidejs.com/docs/options/">carousel options</a>.',
    type: 'Object',
    default: '-',
    version: '',
  },
  {
    property: 'controls',
    description: 'if you want to show and hide previous and next button',
    type: 'Boolean',
    default: '',
    version: '',
  },
  {
    property: 'bullets',
    description:
      "if you want to show and hide carousel bullet. It's requried numberOfBullets prop",
    type: 'Boolean',
    default: '-',
    version: '',
  },
  {
    property: 'numberOfBullets',
    description: 'it should be a number which is equal to your Slide items',
    type: 'Number',
    default: '-',
    version: '',
  },
  {
    property: 'thumbs',
    description: 'it should be an array that contain Slide images',
    type: 'Array',
    default: '-',
    version: '',
  },
  {
    property: 'prevButton',
    description: 'add previous icon or button',
    type: 'React.ReactNode',
    default: '-',
    version: '',
  },
  {
    property: 'nextButton',
    description: 'add next icon or button',
    type: 'React.ReactNode',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| CartProduct API 
|--------------------------------------------------
*/
export const cartProductPropsData = [
  {
    property: 'thumbUrl',
    description:
      'set the image of CartProduct, see: <a target="_blank" href="https://github.com/twopluszero/next-images#readme">next-images</a> package for use',
    type: 'String',
    default: '-',
    version: '1.0',
  },
  {
    property: 'title',
    description: 'set the title of product',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'quantity',
    description: 'set the quantity of product',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'price',
    description: 'set the price of product',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'color',
    description: 'set the color of product',
    type: 'String',
    default: '',
    version: '',
  },
  {
    property: 'hideBorderBottom',
    description: 'show/hide border bottom of the CartProduct',
    type: 'Boolean',
    default: '',
    version: '',
  },
  {
    property: 'removable',
    description: 'show/hide the remove button',
    type: 'Boolean',
    default: '',
    version: '',
  },
  {
    property: 'onClick',
    description:
      'first you need to set removable pron then set the handler to handle click event for remove',
    type: '(event) => void',
    default: '-',
    version: '',
  },
  {
    property: 'style',
    description: 'add your custom style',
    type: 'React.CSSProperties',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| InstagramCard API 
|--------------------------------------------------
*/
export const instagramCardPropsData = [
  {
    property: 'type',
    description: 'set the card type, it should be default | gallery | video',
    type: 'String',
    default: '-',
    version: '1.0',
  },
  {
    property: 'image',
    description:
      'set the card image, see: <a target="_blank" href="https://github.com/twopluszero/next-images#readme">next-images</a> package for use',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'numberOfView',
    description: 'it will show if type is video',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'numberOflike',
    description: 'it will only show for gallery and post type',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'numberOfcomment',
    description: 'show number of comments on the post',
    type: 'String',
    default: '',
    version: '',
  },
  {
    property: 'onClick',
    description: 'if you want to handle any event',
    type: '(event) => void',
    default: '-',
    version: '',
  },
  {
    property: 'style',
    description: 'add your custom style',
    type: 'React.CSSProperties',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| ProductCard API 
|--------------------------------------------------
*/
export const productCardPropsData = [
  {
    property: 'href',
    description: 'set the link to navigate single product page.',
    type: 'any',
    default: '-',
    version: '1.0',
  },
  {
    property: 'as',
    description:
      'if you are use dynamic route then use this prop, for more details check <a target="_blank" href="https://nextjs.org/docs#with-link">this</a> doc',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'alignItem',
    description: "it's control text-align",
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'thumb',
    description: 'set product image',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'title',
    description: 'set the product title',
    type: 'String',
    default: '',
    version: '',
  },
  {
    property: 'price',
    description: 'set price',
    type: 'String | Number',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| PricingCard API 
|--------------------------------------------------
*/
export const pricingCardPropsData = [
  {
    property: 'type',
    description:
      'set the pricing plan type, it should be Free | Primary | Advance',
    type: 'String',
    default: '-',
    version: '1.0',
  },
  {
    property: 'title',
    description: 'set the PricingCard title',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'items',
    description: 'set your features / services',
    type: 'ArrayOfObject',
    default: '-',
    version: '',
  },
  {
    property: 'price',
    description: 'set price',
    type: 'String | Number',
    default: '-',
    version: '',
  },
  {
    property: 'btn',
    description: 'set pricing card button text',
    type: 'String',
    default: '',
    version: '',
  },
  {
    property: 'onClick',
    description: 'if you want to handle any event',
    type: '(event) => void',
    default: '-',
    version: '',
  },
  {
    property: 'isLoading',
    description: 'configure loading stage for button',
    type: 'Boolean',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| ListGridCard API 
|--------------------------------------------------
*/
export const listGridCardPropsData = [
  {
    property: 'variant',
    description: 'set variant to get list | grid view card',
    type: 'String',
    default: '-',
    version: '1.0',
  },
  {
    property: 'thumb',
    description: 'set the thumbnail image for card',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'thumbWidth',
    description: 'customize thumbnail image width using this prop',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'thumbHeight',
    description: 'customize thumbnail image height using this prop',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'title',
    description: 'set the card title',
    type: 'String',
    default: '',
    version: '',
  },
  {
    property: 'description',
    description: 'set the card description',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'author',
    description: 'set the author name',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'authorUrl',
    description: 'set the author profile link',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'btn',
    description: 'set your card button',
    type: 'React.ReactNode',
    default: '-',
    version: '',
  },
  {
    property: 'style',
    description: 'set custom style',
    type: 'React.CSSProperties',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| PageTitle API 
|--------------------------------------------------
*/
export const pageTitlePropsData = [
  {
    property: 'title',
    description: 'set the title',
    type: 'String',
    default: '-',
    version: '1.0',
  },
  {
    property: 'subtitle',
    description: 'set the subtitle',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'bgColor',
    description: 'set the background-color',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'backdrop',
    description: 'show/hide backdrop',
    type: 'Boolean',
    default: '-',
    version: '',
  },
];

/**
|--------------------------------------------------
| WidgetCard API 
|--------------------------------------------------
*/
export const widgetCardPropsData = [
  {
    property: 'icon',
    description: 'set the card icon',
    type: 'React.ReactNode',
    default: '-',
    version: '1.0',
  },
  {
    property: 'title',
    description: 'add your widget title',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'description',
    description: 'set the description of your widget card',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'btntext',
    description: 'add button text, for example View report',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'label',
    description: 'add card label, for example Total orders',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'color',
    description: 'set icon bg and button text color',
    type: 'String',
    default: '-',
    version: '',
  },
  {
    property: 'style',
    description: 'set custom style',
    type: 'React.CSSProperties',
    default: '-',
    version: '',
  },
  {
    property: 'onClick',
    description: 'if you want to handle any event',
    type: '(event) => void',
    default: '-',
    version: '',
  },
];
