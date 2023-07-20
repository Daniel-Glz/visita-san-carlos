import * as slugifyVendor from 'slugify';

export const stripHTML = (str = '') => {
  const text = new DOMParser().parseFromString(str, 'text/html');
  return text.documentElement.textContent;
};

export const slugify = (slug = '') => {
  return slugifyVendor(stripHTML(slug), {
    lower: true,
    remove: /[:,']/g,
  });
};
