import { mergeConfig } from "vite";

export default (config) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ["carport-filler-banked.ngrok-free.dev"],
    },
  });
};