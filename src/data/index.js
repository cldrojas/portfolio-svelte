import todoReact from '../assets/projects/desktop/todo-react.png';
import todoReactMobile from '../assets/projects/mobile/todo-react.png';
import todoReactLogo from '../assets/projects/logo/todo-react.png';

import eira from '../assets/projects/desktop/eira.png';
import eiraMobile from '../assets/projects/mobile/eira.png';
import eiraLogo from '../assets/projects/logo/eira.png';

import vero from '../assets/projects/desktop/vero.png';
import veroMobile from '../assets/projects/mobile/vero.png';
import veroLogo from '../assets/projects/logo/vero.png';

import todoSvelte from '../assets/projects/desktop/todo-svelte.png';
import todoSvelteMobile from '../assets/projects/mobile/todo-svelte.png';
import todoSvelteLogo from '../assets/projects/logo/todo-svelte.png';

import rick from '../assets/projects/desktop/rick.png';
import rickMobile from '../assets/projects/mobile/rick.png';
import rickLogo from '../assets/projects/logo/rick.png';

const projects = [

  {
    name: 'React todo',
    description: 'React intro course',
    imgDesktop: todoReact,
    imgMobile: todoReactMobile,
    logoUrl: todoReactLogo,
    previewUrl: 'https://cldrojas.github.io/react-todo',
    repoUrl: 'https://github.com/cldrojas/react-todo',
    technologies: [
      'html',
      'css',
      'javascript',
      'svelte',
      'webpack',
      'travis-ci',
      'github-pages',
    ],
  },
  {
    name: 'Eira',
    description: 'Let your thougths flow',
    imgDesktop: eira,
    imgMobile: eiraMobile,
    logoUrl: eiraLogo,
    previewUrl: 'https://cldrojas.github.io/eira',
    repoUrl: 'https://github.com/cldrojas/eira',
    technologies: [
      'html',
      'css',
      'javascript',
      'svelte',
      'travis-ci',
      'github-pages',
    ],
  },
  {
    name: 'Verónica Crespo',
    description: "She's my girlfriend! ❤",
    imgDesktop: vero,
    imgMobile: veroMobile,
    logoUrl: veroLogo,
    previewUrl: 'https://cldrojas.github.io/veronica',
    repoUrl: 'https://github.com/cldrojas/veronica',
    technologies: [
      'html',
      'css',
      'javascript',
      'svelte',
      'webpack',
      'travis-ci',
      'github-pages',
    ],
  },
  {
    name: 'To-Do List',
    description: 'Frontend mentor challenge',
    imgDesktop: todoSvelte,
    imgMobile: todoSvelteMobile,
    logoUrl: todoSvelteLogo,
    previewUrl: 'https://cldrojas.github.io/todo',
    repoUrl: 'https://github.com/cldrojas/todo',
    technologies: [
      'html',
      'css',
      'javascript',
      'svelte',
      'webpack',
      'travis-ci',
      'github-pages',
    ],
  },

  {
    name: 'Rick & Morty',
    description: 'Search for Rick & Morty characters',
    imgDesktop: rick,
    imgMobile: rickMobile,
    logoUrl: rickLogo,
    previewUrl: 'https://cldrojas.github.io/spa-node/',
    repoUrl: 'https://github.com/cldrojas/spa-node',
    technologies: [
      'html',
      'css',
      'javascript',
      'node',
      'webpack',
      'travis-ci',
      'github-pages',
    ],
  },
];

export default projects;
