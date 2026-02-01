# NoCode App Builder Examples

本目录包含各种应用类型的示例模板和参考实现。

## 📋 表单应用示例

### 1. 简单联系表单
**文件：** `contact-form.html`

**功能：**
- 姓名、邮箱、留言字段
- 实时表单验证
- 提交成功提示
- 响应式设计

**使用场景：** 企业官网、个人网站的联系页面

---

### 2. 活动报名表单
**文件：** `event-registration.html`

**功能：**
- 多种字段类型（文本、选择、日期）
- 条件显示（如"是否带家属"）
- 数据导出为 CSV
- 提交限制（截止日期）

**使用场景：** 公司年会、培训报名、活动登记

---

## 🌐 落地页示例

### 1. SaaS 产品落地页
**文件：** `saas-landing.html`

**功能：**
- Hero 区域（大标题 + CTA）
- 三大特性展示
- 定价表格
- 用户评价
- 底部联系表单

**使用场景：** 软件产品、在线服务推广

---

### 2. 个人作品集
**文件：** `portfolio.html`

**功能：**
- 个人简介
- 项目展示（卡片布局）
- 技能标签云
- 联系方式

**使用场景：** 设计师、开发者、自由职业者

---

## 📊 仪表盘示例

### 1. 销售数据仪表盘
**文件：** `sales-dashboard.html`

**功能：**
- 关键指标卡片（总销售额、订单数等）
- 折线图（月度趋势）
- 柱状图（产品对比）
- 数据表格（可搜索、排序）

**使用场景：** 销售分析、业绩监控

**数据文件：** `data/sales-sample.csv`

---

## 🛠 互动工具示例

### 1. BMI 计算器
**文件：** `bmi-calculator.html`

**功能：**
- 身高、体重输入
- 实时计算 BMI
- 健康建议显示
- 结果分享功能

**使用场景：** 健康网站、健身 App

---

### 2. 单位转换器
**文件：** `unit-converter.html`

**功能：**
- 多种单位类型（长度、重量、温度）
- 双向转换
- 历史记录
- 常用单位快捷按钮

**使用场景：** 工具网站、教育平台

---

## 🎨 设计主题示例

每个示例都提供了 5 种主题变体：
- `*-modern.html` - 现代蓝色（企业风格）
- `*-vibrant.html` - 活力渐变（创意风格）
- `*-minimal.html` - 极简黑白（作品集风格）
- `*-warm.html` - 温暖橙黄（生活服务风格）
- `*-tech.html` - 科技赛博（技术产品风格）

---

## 📦 如何使用这些示例

### 方法 1: 直接使用
1. 找到符合你需求的示例文件
2. 双击在浏览器中打开
3. 修改文字和内容
4. 保存并部署

### 方法 2: 作为模板
1. 复制示例文件到新目录
2. 告诉 AI："基于 `contact-form.html`，帮我添加文件上传功能"
3. AI 会在原有基础上进行修改

### 方法 3: 学习参考
1. 打开示例文件的源代码
2. 查看 HTML 结构和 Tailwind 类名
3. 理解 JavaScript 交互逻辑
4. 应用到你自己的项目中

---

## 🔧 自定义建议

### 修改颜色
在 HTML 中搜索并替换：
- `bg-blue-500` → `bg-purple-500`（背景色）
- `text-blue-600` → `text-purple-600`（文字色）
- `border-blue-400` → `border-purple-400`（边框色）

### 修改字体
在 `<head>` 中添加 Google Fonts：
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Poppins', sans-serif; }
</style>
```

### 添加动画
使用 Tailwind 的过渡类：
- `transition duration-300` - 基础过渡
- `hover:scale-105` - 悬停放大
- `animate-fade-in` - 淡入动画

---

## 📚 扩展资源

- **Tailwind CSS 文档**: https://tailwindcss.com/docs
- **Chart.js 文档**: https://www.chartjs.org/docs
- **免费图标**: https://heroicons.com
- **免费插图**: https://undraw.co

---

## 🤝 贡献示例

如果你创建了一个很棒的应用，欢迎分享！

**提交方式：**
1. 将你的 HTML 文件添加到此目录
2. 在本 README 中添加说明
3. 提交 Pull Request

**示例命名规范：**
- `[类型]-[用途]-[主题].html`
- 例如：`form-survey-modern.html`

---

**开始探索这些示例吧！** 🎉
