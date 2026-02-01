---
name: easy-app-maker
description: "一站式应用制作平台，专为非程序员设计。支持创建 Web 应用、H5 页面、智能文档、聊天机器人和内容创作工具。通过简单对话即可生成完整的、可运行的应用代码。Use when user wants to create applications without coding, needs quick prototypes, or wants to automate content/document generation."
license: MIT
metadata:
  author: Claude
  version: "1.0.0"
  tags:
    - nocode
    - app-maker
    - beginner-friendly
    - web-app
    - h5-page
    - document-generator
    - chatbot
    - content-creation
  commands:
    - name: /easy-app-maker
      description: 为非程序员提供的一站式应用制作工具
      usage: /easy-app-maker [category] [type] [options]
      examples:
        - "/easy-app-maker web form"
        - "/easy-app-maker h5 activity theme festive"
        - "/easy-app-maker document report data sales.csv"
        - "/easy-app-maker chatbot knowledge faq.md"
        - "/easy-app-maker content social platform xiaohongshu"
---

# Easy App Maker - 简易应用制作器

**为非程序员打造的一站式应用制作平台**

> "你描述需求，AI 生成应用，浏览器直接运行"

## 🌟 核心理念

- ✅ **零编程基础**：通过对话完成所有操作
- ✅ **即开即用**：生成的代码可直接运行
- ✅ **五大方向**：覆盖最常见的应用需求
- ✅ **完全免费**：无需付费工具或服务

---

## 🎯 支持的 5 大应用方向

### 1️⃣ Web 应用生成器 (Web App Builder)

**适用场景：** 表单、落地页、数据仪表盘、互动工具

#### 支持的应用类型

| 类型 | 功能 | 示例 |
|------|------|------|
| **表单应用** | 问卷调查、信息收集、报名登记 | 活动报名、客户反馈 |
| **落地页** | 产品介绍、活动宣传、作品集 | SaaS 产品页、个人简历 |
| **数据仪表盘** | 数据可视化、业务监控 | 销售分析、健康追踪 |
| **互动工具** | 计算器、转换器、小游戏 | BMI 计算、单位转换 |

**技术栈：** HTML + Tailwind CSS + Vanilla JavaScript

**使用命令：**
```bash
/easy-app-maker web form fields "姓名,邮箱,留言"
/easy-app-maker web landing-page product "AI写作助手"
/easy-app-maker web dashboard data "sales.csv"
/easy-app-maker web tool type "BMI计算器"
```

---

### 2️⃣ H5 页面生成器 (H5 Page Builder)

**适用场景：** 微信活动页、产品展示、问卷调查、邀请函

#### 支持的页面类型

| 类型 | 功能 | 示例 |
|------|------|------|
| **活动页** | 节日活动、促销宣传 | 新年抽奖、618 大促 |
| **产品展示** | 商品介绍、特性展示 | 新品发布、功能演示 |
| **邀请函** | 活动邀请、婚礼请柬 | 年会邀请、生日派对 |
| **问卷调查** | 移动端问卷、投票 | 满意度调查、意见收集 |
| **一页简历** | 个人介绍、求职简历 | 设计师作品集 |

**特色功能：**
- 📱 移动端优化（微信内完美显示）
- 🎨 丰富的动画效果
- 📊 数据统计和分享功能
- 🎁 内置常用组件（轮播、倒计时、抽奖等）

**使用命令：**
```bash
/easy-app-maker h5 activity theme "新年红包" style festive
/easy-app-maker h5 product name "智能手表" features "健康监测,消息提醒"
/easy-app-maker h5 invitation event "公司年会" date "2026-02-15"
```

---

### 3️⃣ 智能文档生成器 (Document Generator)

**适用场景：** 工作报告、数据分析、会议纪要、简历生成

#### 支持的文档类型

| 类型 | 功能 | 示例 |
|------|------|------|
| **数据报告** | 自动分析 + 可视化 | 月度销售报告、财务分析 |
| **会议纪要** | 录音转文字 + 总结 | 项目会议记录、决策文档 |
| **简历生成** | 智能排版 + 多模板 | 求职简历、个人介绍 |
| **PPT 大纲** | 主题扩展 + 结构化 | 产品介绍、培训课件 |
| **合同模板** | 法律条款 + 自定义 | 劳动合同、租赁协议 |

**特色功能：**
- 📊 自动生成图表和可视化
- 🎯 智能提取关键信息
- 📄 支持导出 Word/PDF/Markdown
- 🎨 多种专业模板

**使用命令：**
```bash
/easy-app-maker document report data "sales.csv" type "月度分析"
/easy-app-maker document meeting transcript "meeting.txt"
/easy-app-maker document resume info "个人信息.txt" template "现代简约"
/easy-app-maker document ppt topic "产品发布会" slides 15
```

---

### 4️⃣ AI 聊天机器人配置器 (Chatbot Builder)

**适用场景：** 网站客服、知识问答、业务咨询、个人助手

#### 支持的机器人类型

| 类型 | 功能 | 示例 |
|------|------|------|
| **客服机器人** | FAQ 自动回复 | 电商客服、技术支持 |
| **知识问答** | 文档检索 + 回答 | 产品手册、政策咨询 |
| **业务助手** | 流程引导 + 表单 | 报销流程、请假申请 |
| **个人助手** | 日程管理 + 提醒 | 会议安排、待办事项 |

**特色功能：**
- 🤖 基于 AI 大模型（Claude/GPT）
- 📚 支持上传知识库文档
- 💬 可嵌入任何网站
- 📊 对话数据统计

**使用命令：**
```bash
/easy-app-maker chatbot knowledge "产品FAQ.md" tone "专业友好"
/easy-app-maker chatbot customer-service industry "电商" features "订单查询,退换货"
/easy-app-maker chatbot assistant type "日程管理" integration "Google Calendar"
```

---

### 5️⃣ 内容创作工具集 (Content Creation Suite)

**适用场景：** 社交媒体运营、营销文案、SEO 文章、视频脚本

#### 支持的创作类型

| 类型 | 功能 | 示例 |
|------|------|------|
| **社交媒体** | 批量生成文案 + 配图建议 | 小红书、抖音、微博 |
| **营销文案** | 广告语、邮件、推广文 | 产品宣传、活动推广 |
| **SEO 文章** | 关键词优化 + 长文 | 博客文章、知识库 |
| **视频脚本** | 分镜 + 文案 + 字幕 | 短视频、教程视频 |
| **电商详情页** | 产品描述 + 卖点提炼 | 淘宝详情、京东页面 |

**特色功能：**
- 📝 批量生成（一次 10+ 条）
- 🎨 配图和排版建议
- 📅 发布时间策略
- 📊 热度预测和优化建议

**使用命令：**
```bash
/easy-app-maker content social platform "小红书" topic "职场效率工具" count 10
/easy-app-maker content marketing product "智能手表" goal "促销转化"
/easy-app-maker content seo keyword "AI写作工具" length 2000
/easy-app-maker content video topic "产品使用教程" duration 60
```

---

## 📋 通用工作流程

### Step 1: 选择应用方向
```bash
/easy-app-maker
```
AI 会询问：你想创建什么类型的应用？
- `web` - Web 应用
- `h5` - H5 页面
- `document` - 智能文档
- `chatbot` - 聊天机器人
- `content` - 内容创作

### Step 2: 选择具体类型
根据你选择的方向，AI 会展示该方向下的所有类型供你选择。

### Step 3: 回答引导问题
AI 会根据你选择的类型，询问针对性的问题：
- 用途和目标
- 风格和主题
- 功能需求
- 数据来源（如果需要）

### Step 4: 获取成果
AI 会生成：
- **Web/H5**：完整的 HTML/CSS/JS 代码
- **Document**：格式化的文档文件（Word/PDF/Markdown）
- **Chatbot**：可嵌入的聊天窗口代码 + 配置文件
- **Content**：批量文案 + 使用建议

### Step 5: 测试和部署
- **本地测试**：直接打开生成的文件
- **在线部署**：上传到 Netlify/Vercel（免费）
- **迭代优化**：告诉 AI 你想修改的地方

---

## 🎨 设计主题库（适用于 Web 和 H5）

| 主题名称 | 颜色方案 | 适用场景 |
|---------|---------|---------|
| `modern` | 深蓝 + 白色 | 企业官网、SaaS 产品 |
| `vibrant` | 渐变彩色 | 创意工作室、个人品牌 |
| `minimal` | 黑白灰 | 作品集、博客 |
| `warm` | 橙黄暖色 | 餐饮、生活服务 |
| `tech` | 赛博蓝紫 | 科技产品、开发者工具 |
| `festive` | 喜庆红金 | 节日活动、促销页面 |
| `elegant` | 莫兰迪色 | 高端品牌、艺术展示 |

---

## 💡 使用示例

### 示例 1: 创建微信活动页

**命令：**
```bash
/easy-app-maker h5 activity
```

**AI 引导对话：**
```
AI: 你好！我将帮你创建一个 H5 活动页。请回答以下问题：

1. 活动主题是什么？
   用户: 春节红包抽奖

2. 活动时间？
   用户: 2026年2月1日-2月15日

3. 需要哪些功能？
   用户: 抽奖转盘,分享得机会,中奖记录

4. 喜欢什么风格？
   用户: 喜庆红色,带烟花动画

AI: 好的！正在为你生成 H5 页面...
```

**生成结果：**
- 一个完整的 H5 活动页
- 红色喜庆主题 + 烟花动画
- 抽奖转盘交互
- 分享功能（微信分享）
- 中奖记录展示
- 响应式设计（适配所有手机）

---

### 示例 2: 生成月度销售报告

**命令：**
```bash
/easy-app-maker document report data "sales-jan.csv"
```

**AI 引导对话：**
```
AI: 请上传你的 CSV 文件，或告诉我数据的列名。

用户: 列名是：日期,销售额,订单数,客户数,产品类别

AI: 你希望报告包含哪些分析？
用户: 总体趋势,产品对比,同比增长

AI: 报告的目标读者是谁？
用户: 公司管理层

AI: 正在生成专业报告...
```

**生成结果：**
- Word 文档（可编辑）
- 包含：
  - 执行摘要
  - 关键指标卡片
  - 趋势折线图
  - 产品对比柱状图
  - 同比分析表格
  - 结论和建议
- 专业排版 + 公司 Logo 位置预留

---

### 示例 3: 配置客服机器人

**命令：**
```bash
/easy-app-maker chatbot knowledge "产品FAQ.md"
```

**AI 引导对话：**
```
AI: 我将帮你创建一个智能客服机器人。

1. 机器人的名字？
   用户: 小智

2. 服务的行业或产品？
   用户: 智能家居产品

3. 语气风格？
   用户: 专业但友好，不要太正式

4. 需要哪些功能？
   用户: FAQ 问答,订单查询,人工转接

AI: 正在配置机器人...
```

**生成结果：**
- 可嵌入网站的聊天窗口代码
- 基于 FAQ.md 的知识库
- 订单查询接口（需连接数据库）
- 人工转接按钮
- 后台配置文件
- 部署指南（Vercel/Netlify）

---

### 示例 4: 批量生成小红书文案

**命令：**
```bash
/easy-app-maker content social platform "小红书" topic "居家办公好物"
```

**AI 引导对话：**
```
AI: 我将帮你批量生成小红书文案。

1. 目标受众是谁？
   用户: 25-35岁职场女性

2. 推广的产品或主题？
   用户: 人体工学椅、护眼台灯、桌面收纳

3. 需要多少条文案？
   用户: 10条

4. 语气风格？
   用户: 亲切分享型，带emoji

AI: 正在生成文案...
```

**生成结果：**
- 10 条完整的小红书文案
- 每条包含：
  - 吸引人的标题
  - 正文（150-300字）
  - 相关话题标签
  - 配图建议
  - 发布时间建议
- Markdown 格式，可直接复制使用

---

## 🛠 技术栈说明

### Web 应用 & H5 页面
- **HTML5** - 语义化标签
- **Tailwind CSS** - 实用优先的 CSS 框架（CDN）
- **Vanilla JavaScript** - 无需 React/Vue
- **Chart.js** - 数据可视化（仪表盘）
- **Swiper.js** - 轮播组件（H5）

### 智能文档
- **Markdown** - 基础格式
- **Pandoc** - 格式转换（可选）
- **Chart.js** - 图表生成
- **模板引擎** - 文档排版

### 聊天机器人
- **OpenAI API / Claude API** - 对话能力
- **Embeddings** - 知识库检索
- **WebSocket** - 实时通信（可选）

### 内容创作
- **AI 大模型** - 文案生成
- **关键词分析** - SEO 优化
- **模板库** - 不同平台的格式

---

## 📚 学习路径（可选）

### 初级：理解生成的代码
- 查看 HTML 结构
- 尝试修改文字和颜色
- 理解基本的交互逻辑

### 中级：自定义和扩展
- 调整 Tailwind 类名
- 添加新的功能模块
- 连接真实的数据源

### 高级：独立开发
- 理解完整的代码架构
- 学习 API 集成
- 部署到生产环境

---

## 🚀 部署指南

### 方法 1: Netlify（推荐）
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽文件夹到页面
3. 获得在线链接

### 方法 2: Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 连接 GitHub 或直接上传
3. 自动部署

### 方法 3: GitHub Pages
1. 创建 GitHub 仓库
2. 上传文件
3. 启用 Pages 功能

---

## ❓ 常见问题

### Q: 我完全不懂编程，能用这个吗？
**A:** 可以！你只需要描述需求，AI 会生成所有代码。

### Q: 生成的应用可以商用吗？
**A:** 可以。生成的代码完全属于你。

### Q: 支持哪些浏览器？
**A:** 所有现代浏览器（Chrome、Firefox、Safari、Edge）。

### Q: 可以连接真实的数据库吗？
**A:** 可以。AI 可以帮你集成 Firebase、Supabase 等服务。

### Q: 生成的文档可以编辑吗？
**A:** 可以。Word/PDF 文档可以用 Office/WPS 编辑。

---

## 🎯 快速开始

```bash
/easy-app-maker
```

AI 会引导你完成整个过程！🎉

---

**让创造变得简单，让想法变成现实！**
