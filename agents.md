# 项目规则

## 命名规范

- 所有 CSS 类名必须以 `smw_` 开头
- 所有 CSS ID 名必须以 `smw_` 开头
- 所有 JavaScript 变量必须以 `smw_` 开头
- CSS 自定义属性（变量）必须以 `--smw_` 开头

## 文件注释

- 所有 HTML 页面都必须在 `<!DOCTYPE html>` 之后的第一行包含以下注释：

```html
<!-- 姓名：沈明伟，日期：2026-10-22，功能名称：移动端底部导航 -->
```

- 注释内容依次为：姓名：沈明伟，日期：功能名称
- 日期格式为 `yyyy-mm-dd`，功能名称为该页面实现的功能

## 技术栈

- 项目只使用原生的 HTML、CSS 和 JavaScript 实现
- 不使用任何第三方库和 CDN，所有依赖必须本地化
- 图标统一使用 `font/font_5244858_gd8pcp0svz/` 目录下的 iconfont 图标：
  - 字体图标方案：引入 `font/font_5244858_gd8pcp0svz/iconfont.css`，使用 `iconfont` 类名加 `icon-xxx` 图标名
  - SVG 方案：使用 `font/font_5244858_gd8pcp0svz/iconfont.js` 中的 symbol，通过 `<svg><use href="#icon-xxx"></use></svg>` 引用
- 需要获取服务器端数据时，使用原生 `fetch` API 请求数据

## 提示词记录

- 所有提示词在执行之前写入文件 `shen_prompt.md`
- 以附加方式写入，不覆盖之前的内容
- 写入内容包括：时间（yyyy-mm-dd-hh-mm）、使用的模型、提示词内容

## 演示署名

- 从 `11-2.html` 开始，所有演示文件中的每个演示效果都必须包含署名「沈明伟」
