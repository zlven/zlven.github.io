# 🎓 个人学术主页模板

一个简洁、现代、响应式的个人学术网站模板，专为 **求学申请**（硕士/博士）设计。

## ✨ 特点

- 🎨 **现代设计** — 简洁、专业的学术风格
- 📱 **响应式** — 完美适配桌面、平板和手机
- 🌙 **暗色模式** — 自动跟随系统设置
- ⚡ **高性能** — 轻量、无依赖、加载迅速
- 🎯 **求学导向** — 专为申请学校优化内容结构
- 🛠 **易于定制** — 所有内容都有清晰标注

## 🚀 快速开始

### 1. 创建仓库

在 GitHub 上创建一个新仓库，命名为 `zlven.github.io`（公开仓库）。

### 2. 修改个人信息

打开 `index.html`，搜索 `★` 标记（或搜索 `修改为`），逐项替换为你的真实信息：

| 项目 | 位置 | 说明 |
|------|------|------|
| 姓名 | Hero 区域 | `李子林` → 你的名字 |
| 标题 | Hero 区域 | `计算机科学 · 本科在读` → 你的身份 |
| 个人描述 | Hero / About | 修改自我介绍 |
| 头像 | Hero 区域 | 替换 `LZL` 为你的头像图片或缩写 |
| 教育经历 | Education 区域 | 修改学校、时间、GPA |
| 研究项目 | Research 区域 | 替换为你的项目 |
| 论文列表 | Publications 区域 | 替换为你的发表 |
| 技能 | Skills 区域 | 修改技能标签和进度百分比 |
| 联系方式 | Contact 区域 | 修改邮箱、GitHub 等链接 |

> 💡 **提示**: HTML 中用 `<!-- ★ 修改为你的... -->` 标注了所有需要你修改的位置。

### 3. 替换简历

找到 `index.html` 中的简历下载链接：
```html
<a href="#" class="btn btn-outline" download>📄 下载简历</a>
```
将 `#` 替换为你的简历文件路径（如 `assets/resume.pdf`），并将 PDF 文件放入 `assets/` 文件夹。

### 4. 部署到 GitHub Pages

#### 方法一：自动部署（推荐）

1. 将所有文件推送到仓库的 `main` 分支
2. 进入仓库 Settings → Pages
3. Source 选择 "Deploy from a branch"，Branch 选择 `main`，文件夹 `/ (root)`
4. 几分钟后你的网站就上线了！地址：`https://zlven.github.io`

#### 方法二：使用 GitHub Actions

在仓库根目录创建 `.github/workflows/pages.yml`：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - uses: actions/deploy-pages@v4
```

然后在 Settings → Pages 中将 Source 改为 "GitHub Actions"。

## 📁 项目结构

```
your-repo/
├── index.html          # 主页面（修改这个文件）
├── css/
│   └── style.css       # 样式文件（配色、布局）
├── js/
│   └── main.js         # 交互功能（菜单、动画）
├── assets/             # 资源文件夹
│   └── resume.pdf      # 你的简历（可选）
└── README.md           # 项目说明
```

## 🎨 自定义主题

打开 `css/style.css`，找到 `:root` 中的 CSS 变量，修改配色：

```css
:root {
  --primary: #2563eb;        /* 主色（蓝色） */
  --primary-dark: #1d4ed8;   /* 深色主色 */
  --accent: #f59e0b;         /* 强调色（金色） */
  --bg-light: #f8fafc;       /* 浅色背景 */
  /* ... 更多变量 */
}
```

## 📄 License

MIT - 你可以自由使用、修改和分享。

---

**如果这个模板对你有帮助，请给一个 ⭐️ Star！**
