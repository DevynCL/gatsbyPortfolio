import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Devyn Cushing-Lewis | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Devyn Cushing-Lewis',
  subtitle: 'Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilephoto.jpg',
  paragraphOne:
    'I am a detailed-oriented Software Engineer and lifelong learner with a background in professional sales and finance.',
  paragraphTwo:
    'While my background is based around business within the IT world, I realized I wanted to be on the development side of the equation while utilizing my professional sales skills from prior education and work experience.',
  paragraphThree:
    ' The satisfaction of continuing to learn new things while overcoming challenges is why I enjoy development.',
  resume: 'ResumeJuly.png', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Shopfly.png',
    title: 'E-Commerce Shopping Website with React.js and Stripe',
    info: 'Shopping website template that utilizes Stripe for payment and card processing.',
    info2: '',
    url: 'https://shopflycommercejs.netlify.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Realestate.png',
    title: 'Real Estate Website using Chakra and Next.js',
    info: 'A Real Estate website that pushes new listings and allows viewers to filter between renting and buying property.',
    info2: '',
    url: 'https://cozy-lily-3835ab.netlify.app/',
    repo: 'https://github.com/DevynCL/realestate', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'CryptoWebsite.png',
    title: 'Crypto React Website',
    info: 'A simple website application that can fetch and check current cryptocurrency',
    info2: '',
    url: 'https://poetic-piroshki-44d0be.netlify.app/',
    repo: 'https://github.com/DevynCL/crypto-app-react-master', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'Devyncl19@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/devyn-cushing-lewis/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DevynCL',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
