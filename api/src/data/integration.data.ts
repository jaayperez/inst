import { plainToClass } from 'class-transformer';
import { Integration } from '../services/integration/integration.types';
export const loadIntegration = (): Integration => {
  return plainToClass(Integration, {
    id: 'uniqe_integration_id',
    title: 'Integrations',
    shortDescription: 'Add to your MINST development experience',
    banner: [
      'https://s3.amazonaws.com/redqteam.com/inst/banner/banner-1.jpg',
      'https://s3.amazonaws.com/redqteam.com/inst/banner/banner-1.jpg',
      'https://s3.amazonaws.com/redqteam.com/inst/banner/banner-1.jpg',
    ],
    apps: [
      {
        id: 1,
        type: ['featured', 'performance', 'integrations'],
        image: 'https://s3.amazonaws.com/redqteam.com/inst/apps/1.svg',
        name: 'Slack',
        isInstalled: false,
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
      },
      {
        id: 2,
        type: ['performance'],
        image: 'https://s3.amazonaws.com/redqteam.com/inst/apps/2.svg',
        name: 'Invision',
        isInstalled: true,
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
      },
      {
        id: 3,
        type: ['featured'],
        image: 'https://s3.amazonaws.com/redqteam.com/inst/apps/3.svg',
        name: 'Jira',
        isInstalled: false,
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
      },
      {
        id: 4,
        type: ['integrations'],
        image: 'https://s3.amazonaws.com/redqteam.com/inst/apps/4.svg',
        name: 'Figma',
        isInstalled: true,
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
      },
      {
        id: 5,
        type: ['featured', 'performance'],
        image: 'https://s3.amazonaws.com/redqteam.com/inst/apps/5.svg',
        name: 'Wordpress',
        isInstalled: true,
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
      },
      {
        id: 6,
        type: ['featured', 'integrations'],
        image: 'https://s3.amazonaws.com/redqteam.com/inst/apps/6.svg',
        name: 'WooCommerce',
        isInstalled: false,
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
      },
    ],
  });
};
