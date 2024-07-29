import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const imageUrl = "./imagenes/logo.png"

  return (
    <div>
      <img src={imageUrl} style={{ width: '300px', height: '80px' }} /> {/* Ajusta el tamaño y otros estilos según tus necesidades */}
      <h1 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h1>
    </div>

  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
