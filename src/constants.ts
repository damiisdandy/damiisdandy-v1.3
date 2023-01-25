type Route = {
  name: string;
  href: string;
}

export const routes: Route[] = [{
  name: 'Home',
  href: '/',
}, {
  name: 'Articles',
  href: '/articles',
}, {
  name: 'My Works',
  href: '/my-works',
}, {
  name: 'Resume',
  href: '/resume',
}, {
  name: 'Contact',
  href: '/#contact',
},];

export const email = 'hello@damiisdandy.com'

export const socials = {
  twitter: 'https://twitter.com/realdamiisdandy',
  linkedin: 'https://www.linkedin.com/in/damiisdandy',
  github: 'https://github.com/damiisdandy',
  dev: 'https://dev.to/damiisdandy',
  email: `mailto:hello@damiisdandy.com`,
}