import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Creado por
          <a href="https://www.interaccionconsultora.com/"> Interacción Consultora </a> y <a href="https://wa.link/wquu1n"> Cielo Ferrer diseño gráfico </a>
          con tecnología <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>

      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
