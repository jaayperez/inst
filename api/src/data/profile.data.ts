import { plainToClass } from 'class-transformer';
import { Profile } from '../services/profile/profile.types';
// avatar=https://randomuser.me/api/portraits/men/99.jpg
export const loadProfile = (): Profile => {
  return plainToClass(Profile, {
    id: 'user_1',
    name: 'Justin Perez',
    role: 'Software Developer',
    avatar:
      'https://avatars1.githubusercontent.com/u/46203291?s=460&u=c42c7d8fc754ff7bdb61673a7e59d2c605b7edb8&v=4',
    posts: [
      {
        id: '1',
        type: 'image',
        image: 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/46771397_293430734647407_3619476318172528430_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=0sLxhpaXR4MAX8tnHBe&tp=18&oh=bb0517c37854ec6dcf2f6df2b43c2c1c&oe=5FCC4A74',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '2',
        type: 'gallery',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/2.jpg',
        gallery: [
          'https://s3.amazonaws.com/redqteam.com/inst/post/2.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/11.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/6.jpg',
        ],
        numberOflike: '34',
        numberOfcomment: '2',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: '💪 😊 👍 🏆',
            createdAt: new Date(),
          },
          {
            id: '3',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            username: '@jenny_doe',
            comment: 'wow!! 👌👌😍😍',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '3',
        type: 'video',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/9.jpg',
        video: `<iframe src="https://player.vimeo.com/video/359281775?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        numberOfView: '134',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '4',
        type: 'image',
        image: 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/12063024_809159182543038_923250069_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=qvnpAme23NcAX-kARh1&tp=18&oh=40cc42a2108d1095c74c5ae58099edf2&oe=5FCB6C3F',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '5',
        type: 'image',
        image: 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/11856670_640348736103970_75529309_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ck-4urb3fj4AX-AuZzY&tp=18&oh=938b4b31bd9c7a0246911e66c6302521&oe=5FC8CDBA',
        numberOflike: '34',
        numberOfcomment: '2',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: '💪 😊 👍 🏆',
            createdAt: new Date(),
          },
          {
            id: '3',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            username: '@jenny_doe',
            comment: 'wow!! 👌👌😍😍',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '6',
        type: 'image',
        image: 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e35/11385138_1623311011271287_1931381328_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=KqHeEQqFK34AX9G1v9v&tp=18&oh=76954dd6e0ba9cada784726d459c528b&oe=5FC8928C',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '7',
        type: 'gallery',
        image: 'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/e15/11015509_642187965882011_167879801_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=xqeUSZcdegMAX8lV5xz&tp=18&oh=3c65c471091403649e97a68e349f5431&oe=5FCBBB0A',
        gallery: [
          'https://s3.amazonaws.com/redqteam.com/inst/post/7.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/25.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/9.jpg',
        ],
        numberOflike: '34',
        numberOfcomment: '2',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: '💪 😊 👍 🏆',
            createdAt: new Date(),
          },
          {
            id: '3',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            username: '@jenny_doe',
            comment: 'wow!! 👌👌😍😍',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '8',
        type: 'video',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/8.jpg',
        video: `<iframe src="https://player.vimeo.com/video/35396305?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        numberOfView: '134',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '9',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/9.jpg',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '10',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/10.jpg',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '11',
        type: 'gallery',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/11.jpg',
        gallery: [
          'https://s3.amazonaws.com/redqteam.com/inst/post/11.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/12.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/26.jpg',
        ],
        numberOflike: '34',
        numberOfcomment: '2',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: '💪 😊 👍 🏆',
            createdAt: new Date(),
          },
          {
            id: '3',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            username: '@jenny_doe',
            comment: 'wow!! 👌👌😍😍',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '12',
        type: 'video',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/12.jpg',
        video: `<iframe src="https://player.vimeo.com/video/359281775?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        numberOfView: '134',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '13',
        type: 'video',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/13.jpg',
        video: `<iframe src="https://player.vimeo.com/video/35396305?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        numberOfView: '134',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            createdAt: new Date(),
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            createdAt: new Date(),
          },
        ],
      },
      {
        id: '14',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/14.jpg',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            time: '133w',
          },
        ],
      },
      {
        id: '15',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/15.jpg',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            time: '133w',
          },
        ],
      },
      {
        id: '16',
        type: 'video',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/16.jpg',
        video: `<iframe src="https://player.vimeo.com/video/359281775?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        numberOfView: '134',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            time: '133w',
          },
        ],
      },
      {
        id: '17',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/17.jpg',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            time: '133w',
          },
        ],
      },
      {
        id: '18',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/18.jpg',
        numberOflike: '34',
        numberOfcomment: '2',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: '💪 😊 👍 🏆',
            time: '133w',
          },
          {
            id: '3',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            username: '@jenny_doe',
            comment: 'wow!! 👌👌😍😍',
            time: '133w',
          },
        ],
      },
      {
        id: '19',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/19.jpg',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            time: '133w',
          },
        ],
      },
      {
        id: '20',
        type: 'gallery',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/20.jpg',
        gallery: [
          'https://s3.amazonaws.com/redqteam.com/inst/post/7.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/5.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/9.jpg',
        ],
        numberOflike: '34',
        numberOfcomment: '2',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: '💪 😊 👍 🏆',
            time: '133w',
          },
          {
            id: '3',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            username: '@jenny_doe',
            comment: 'wow!! 👌👌😍😍',
            time: '133w',
          },
        ],
      },
      {
        id: '21',
        type: 'gallery',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/21.jpg',
        gallery: [
          'https://s3.amazonaws.com/redqteam.com/inst/post/7.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/5.jpg',
          'https://s3.amazonaws.com/redqteam.com/inst/post/9.jpg',
        ],
        numberOflike: '34',
        numberOfcomment: '2',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: '💪 😊 👍 🏆',
            time: '133w',
          },
          {
            id: '3',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            username: '@jenny_doe',
            comment: 'wow!! 👌👌😍😍',
            time: '133w',
          },
        ],
      },
      {
        id: '22',
        type: 'video',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/22.jpg',
        video: `<iframe src="https://player.vimeo.com/video/35396305?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
        numberOfView: '134',
        numberOflike: '47',
        numberOfcomment: '48',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment:
              'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
            time: '133w',
          },
        ],
      },
      {
        id: '23',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/23.jpg',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            time: '133w',
          },
        ],
      },
      {
        id: '24',
        type: 'image',
        image: 'https://s3.amazonaws.com/redqteam.com/inst/post/24.jpg',
        numberOflike: '21',
        numberOfcomment: '8',
        comments: [
          {
            id: '1',
            role: 'author',
            avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
            username: '@jaayprez',
            comment:
              'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
            time: '133w',
          },
          {
            id: '2',
            role: 'user',
            avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
            username: '@jon_doe',
            comment: 'Hey. This is so dope',
            time: '133w',
          },
        ],
      },
    ],
    followers: [
      {
        id: '1',
        avatar:
          'https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg',
        name: 'Thomas Stock',
      },
      {
        id: '2',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        name: 'Veeti Seppanen',
      },
      {
        id: '3',
        avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
        name: 'Bonnie Riley',
      },
      {
        id: '4',
        avatar:
          'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
        name: 'Steve T. Scaife',
      },
      {
        id: '5',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Leo Gill',
      },
      {
        id: '6',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'June Cha',
      },
      {
        id: '7',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Renee Sims',
      },
      {
        id: '8',
        avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
        name: 'Jonathan Cha',
      },
      {
        id: '9',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        name: 'Veeti Seppanen',
      },
      {
        id: 10,
        avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
        name: 'Bonnie Riley',
      },
      {
        id: 11,
        avatar:
          'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
        name: 'Steve T. Scaife',
      },
      {
        id: 12,
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Leo Gill',
      },
    ],
    following: [
      {
        id: '1',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Leo Gill',
      },
      {
        id: '2',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'June Cha',
      },
      {
        id: '3',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Renee Sims',
      },
      {
        id: '4',
        avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
        name: 'Jonathan Cha',
      },
      {
        id: '5',
        avatar:
          'https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg',
        name: 'Thomas Stock',
      },
      {
        id: '6',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        name: 'Veeti Seppanen',
      },
      {
        id: '7',
        avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
        name: 'Bonnie Riley',
      },
      {
        id: '8',
        avatar:
          'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
        name: 'Steve T. Scaife',
      },
    ],
  });
};
