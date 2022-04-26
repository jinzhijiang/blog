import { defaultTheme, defineUserConfig } from "vuepress";
const { path } = require("@vuepress/utils");
import sidebar from "./config/sidebar";
import navbar from "./config/navbar";

export default defineUserConfig({
  // 站点配置
  lang: "en-US",
  description:
    "Expensive has never been its weakness, poor has always been your weakness.",

  // 主题和它的配置
  //theme: "@vuepress/theme-default",
  theme: defaultTheme({
    sidebar,
    logo: "https://www.jzj.red/images/logo.png",

    //仓库地址
    repo: "https://github.com/jinzhijiang/blog",
    navbar,
  }),
});
