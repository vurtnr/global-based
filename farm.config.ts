import { defineConfig } from "@farmfe/core";
import { type UserConfigExport, type ConfigEnv } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";

export default ({ mode }: ConfigEnv): UserConfigExport => {
  return {
    vitePlugins: [vue()],
  };
};
