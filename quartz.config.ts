import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Proyectos",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "es-ES",
    baseUrl: "https://interaccionconsultora.github.io/Proyectos_Interaccion/", //"quartz.jzhao.xyz", 
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Archivo",
        body: "Archivo",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",                           // page background
          lightgray: "#eac393",                       // Borders
          gray: "#646464",                            // Graph link, heavy borders
          darkgray: "#4e4f49",                        // Body text
          dark: "#3f738d",                            // Header text and icons
          secondary: '#3f738d',                       // "#284b63",
          tertiary: '#559abd',                        // "#84a59d",
          highlight: "rgba(143, 159, 169, 0.0)",     // resaltado
        },
        darkMode: {
          light: "#161618",
          lightgray: "#696969",   //"#393639",
          gray: "#d6d6d6",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#d6d6d6",
          tertiary: "#ea7f02",
          highlight: "rgba(143, 159, 169, 0.0)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config