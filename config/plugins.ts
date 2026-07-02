import type { Core } from "@strapi/strapi";

export default ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  "react-quill-editor": {
    enabled: true,
    resolve: "./src/plugins/react-quill-editor",
  },
  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        s3Options: {
          region: env("AWS_REGION"),
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
          },
        },
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "tiptap-editor": {
    config: {
      presets: {
        full: {
          bold: true,
          italic: true,
          underline: true,
          strike: true,
          code: true,
          codeBlock: true,
          heading: true,
          blockquote: true,
          bulletList: true,
          orderedList: true,
          link: true,
          table: true,
          textAlign: true,
          superscript: true,
          subscript: true,
          mediaLibrary: true,
        },
      },
    },
  },
});
