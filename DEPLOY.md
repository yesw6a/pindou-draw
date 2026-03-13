# 🚀 Cloudflare Pages 部署指南

## 快速部署

### 方法 1: Cloudflare Dashboard (推荐)

1. **访问 Cloudflare Dashboard**
   - https://dash.cloudflare.com/

2. **创建 Pages 项目**
   - Workers & Pages → Create application
   - Connect to Git

3. **选择 GitHub 仓库**
   - Repository: `yesw6a/pindou-draw`
   - Branch: `main`

4. **配置构建设置**
   ```
   Framework preset: None
   Build command: (留空)
   Build output directory: ./
   ```

5. **保存并部署**
   - Save and Deploy
   - 等待 1-2 分钟完成

6. **获得访问链接**
   - `https://pindou-draw.pages.dev`

---

### 方法 2: Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
wrangler pages deploy ./ --project-name=pindou-draw
```

---

## 📁 项目结构

```
pindou-draw/
├── index.html              # 主页面
├── *.html                  # 其他页面
├── css/                    # 样式文件
├── js/                     # JavaScript 核心
├── svg/                    # SVG 图标
├── icon/                   # 网站图标
├── output/                 # 色卡数据
├── _headers                # Cloudflare 安全头 ⭐ 新增
├── _redirects              # Cloudflare 重定向 ⭐ 新增
├── wrangler.toml           # Wrangler 配置 ⭐ 新增
└── .gitignore              # Git 忽略文件 ⭐ 新增
```

---

## ⚙️ 配置说明

### _headers (安全头)

- `X-Content-Type-Options: nosniff` - 防止 MIME 类型嗅探
- `X-Frame-Options: DENY` - 防止点击劫持
- `X-XSS-Protection` - XSS 防护
- `Content-Security-Policy` - 内容安全策略

### _redirects (路由)

- SPA 路由支持，所有请求重定向到 index.html

### wrangler.toml

- 本地开发服务器配置
- 部署包含/排除文件配置
- 环境变量配置

---

## 🎯 自定义域名 (可选)

1. **Cloudflare Dashboard** → Pages → 选择项目
2. **Custom domains** → Set up a custom domain
3. **输入域名** → 按照提示配置 DNS

---

## 📊 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `APP_NAME` | 应用名称 | pindou-draw |
| `APP_VERSION` | 版本号 | 2.2 |

可在 Cloudflare Dashboard 中添加更多环境变量。

---

## 🔧 本地开发

```bash
# 使用 Wrangler 启动本地服务器
wrangler pages dev ./

# 访问 http://localhost:8080
```

---

## ✅ 部署检查清单

- [ ] 已 Fork 仓库到 GitHub
- [ ] 已添加 `_headers` 文件
- [ ] 已添加 `_redirects` 文件
- [ ] 已添加 `wrangler.toml`
- [ ] 已添加 `.gitignore`
- [ ] 已推送到 GitHub
- [ ] Cloudflare Pages 已连接
- [ ] 部署成功
- [ ] 自定义域名 (可选)

---

## 📝 更新部署

**自动部署**: 推送代码到 GitHub 后，Cloudflare 自动构建部署

**手动部署**:
```bash
wrangler pages deploy ./ --project-name=pindou-draw
```

---

## 🆘 故障排查

### 部署失败

1. 检查 Cloudflare Build Logs
2. 确认所有文件路径正确
3. 检查 _headers 格式

### 页面空白

1. 打开浏览器开发者工具
2. 查看 Console 错误
3. 检查 CDN 资源是否可访问

### CORS 错误

1. 检查 _headers 中的 CSP 配置
2. 确保 CDN 域名在白名单中

---

**部署时间**: 2026-03-13  
**版本**: 2.2  
**作者**: 宁姚 🗡️
