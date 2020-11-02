import slack from '../assets/images/applications/1.svg';
import invision from '../assets/images/applications/2.svg';
import jira from '../assets/images/applications/3.svg';
import figma from '../assets/images/applications/4.svg';

const applicationsPageData = {
  title: 'Authorized Applications',
  subtitle: 'You have granted 4 applications access to your account.',
  applications: [
    {
      id: 1,
      thumb: slack,
      title: 'Slack',
      description: 'Last used within the last week.',
      author: 'Slack',
      authorUrl: 'https://slack.com/intl/en-bd/',
    },
    {
      id: 2,
      thumb: invision,
      title: 'Invision',
      description: 'Last used within the last week.',
      author: 'Invision',
      authorUrl: 'https://www.invisionapp.com/',
    },
    {
      id: 3,
      thumb: jira,
      title: 'Jira',
      description: 'Last used within the last week.',
      author: 'Jira',
      authorUrl: 'https://www.atlassian.com/software/jira',
    },
    {
      id: 4,
      thumb: figma,
      title: 'Figma',
      description: 'Last used within the last week.',
      author: 'Figma',
      authorUrl: 'https://www.figma.com/',
    },
  ],
};

export default applicationsPageData;
