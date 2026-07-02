import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'react-quill',
    plugin: 'react-quill-editor',
    type: 'richtext',
  });
};

export default register;
