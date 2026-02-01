/**
 * Easy App Maker - Core Logic
 * 
 * 一站式应用制作平台，支持 5 大应用方向：
 * 1. Web 应用生成器
 * 2. H5 页面生成器
 * 3. 智能文档生成器
 * 4. AI 聊天机器人配置器
 * 5. 内容创作工具集
 */

// ==================== 1. Web 应用生成器 ====================

const WEB_APP_TYPES = {
    form: {
        name: '表单应用',
        description: '问卷调查、信息收集、报名登记',
        templates: ['contact-form', 'survey', 'registration', 'feedback'],
        requiredFields: ['fields', 'submitAction']
    },
    'landing-page': {
        name: '落地页',
        description: '产品介绍、活动宣传、个人作品集',
        templates: ['product', 'event', 'portfolio', 'saas'],
        requiredFields: ['title', 'sections']
    },
    dashboard: {
        name: '数据仪表盘',
        description: '数据可视化、业务监控、个人统计',
        templates: ['sales', 'analytics', 'finance', 'health'],
        requiredFields: ['dataSource', 'charts']
    },
    tool: {
        name: '互动工具',
        description: '计算器、转换器、小游戏、测试题',
        templates: ['calculator', 'converter', 'quiz', 'timer'],
        requiredFields: ['toolType', 'logic']
    }
};

// ==================== 2. H5 页面生成器 ====================

const H5_PAGE_TYPES = {
    activity: {
        name: '活动页',
        description: '节日活动、促销宣传',
        templates: ['lottery', 'countdown', 'vote', 'game'],
        requiredFields: ['theme', 'duration', 'features']
    },
    product: {
        name: '产品展示',
        description: '商品介绍、特性展示',
        templates: ['showcase', 'comparison', 'demo'],
        requiredFields: ['productName', 'features', 'cta']
    },
    invitation: {
        name: '邀请函',
        description: '活动邀请、婚礼请柬',
        templates: ['wedding', 'party', 'conference'],
        requiredFields: ['event', 'date', 'location']
    },
    survey: {
        name: '问卷调查',
        description: '移动端问卷、投票',
        templates: ['satisfaction', 'feedback', 'poll'],
        requiredFields: ['questions', 'submitAction']
    },
    resume: {
        name: '一页简历',
        description: '个人介绍、求职简历',
        templates: ['creative', 'professional', 'minimal'],
        requiredFields: ['personalInfo', 'sections']
    }
};

// ==================== 3. 智能文档生成器 ====================

const DOCUMENT_TYPES = {
    report: {
        name: '数据报告',
        description: '自动分析 + 可视化',
        templates: ['sales-report', 'financial-report', 'analytics-report'],
        requiredFields: ['dataSource', 'analysisType']
    },
    meeting: {
        name: '会议纪要',
        description: '录音转文字 + 总结',
        templates: ['project-meeting', 'decision-meeting', 'brainstorm'],
        requiredFields: ['transcript', 'participants']
    },
    resume: {
        name: '简历生成',
        description: '智能排版 + 多模板',
        templates: ['modern', 'classic', 'creative'],
        requiredFields: ['personalInfo', 'experience']
    },
    ppt: {
        name: 'PPT 大纲',
        description: '主题扩展 + 结构化',
        templates: ['product-launch', 'training', 'pitch'],
        requiredFields: ['topic', 'slideCount']
    },
    contract: {
        name: '合同模板',
        description: '法律条款 + 自定义',
        templates: ['employment', 'lease', 'service'],
        requiredFields: ['contractType', 'parties']
    }
};

// ==================== 4. AI 聊天机器人配置器 ====================

const CHATBOT_TYPES = {
    'customer-service': {
        name: '客服机器人',
        description: 'FAQ 自动回复',
        templates: ['ecommerce', 'tech-support', 'general'],
        requiredFields: ['knowledge', 'tone']
    },
    'knowledge-qa': {
        name: '知识问答',
        description: '文档检索 + 回答',
        templates: ['product-manual', 'policy', 'education'],
        requiredFields: ['documents', 'scope']
    },
    'business-assistant': {
        name: '业务助手',
        description: '流程引导 + 表单',
        templates: ['expense', 'leave', 'onboarding'],
        requiredFields: ['workflows', 'integrations']
    },
    'personal-assistant': {
        name: '个人助手',
        description: '日程管理 + 提醒',
        templates: ['calendar', 'todo', 'habit'],
        requiredFields: ['features', 'integrations']
    }
};

// ==================== 5. 内容创作工具集 ====================

const CONTENT_TYPES = {
    social: {
        name: '社交媒体',
        description: '批量生成文案 + 配图建议',
        platforms: ['xiaohongshu', 'douyin', 'weibo', 'wechat'],
        requiredFields: ['platform', 'topic', 'count']
    },
    marketing: {
        name: '营销文案',
        description: '广告语、邮件、推广文',
        templates: ['ad-copy', 'email', 'landing-page-copy'],
        requiredFields: ['product', 'goal', 'audience']
    },
    seo: {
        name: 'SEO 文章',
        description: '关键词优化 + 长文',
        templates: ['blog', 'guide', 'comparison'],
        requiredFields: ['keyword', 'length', 'tone']
    },
    video: {
        name: '视频脚本',
        description: '分镜 + 文案 + 字幕',
        templates: ['tutorial', 'review', 'vlog'],
        requiredFields: ['topic', 'duration', 'style']
    },
    ecommerce: {
        name: '电商详情页',
        description: '产品描述 + 卖点提炼',
        templates: ['taobao', 'jd', 'pinduoduo'],
        requiredFields: ['product', 'features', 'target']
    }
};

// ==================== 设计主题库 ====================

const THEMES = {
    modern: {
        colors: { primary: '#2563eb', secondary: '#64748b', accent: '#3b82f6', background: '#ffffff', text: '#1e293b' },
        fonts: { heading: 'Inter, sans-serif', body: 'Inter, sans-serif' },
        style: 'clean, professional, corporate'
    },
    vibrant: {
        colors: { primary: '#ec4899', secondary: '#8b5cf6', accent: '#f59e0b', background: '#fef3c7', text: '#1f2937' },
        fonts: { heading: 'Poppins, sans-serif', body: 'Poppins, sans-serif' },
        style: 'colorful, energetic, creative'
    },
    minimal: {
        colors: { primary: '#000000', secondary: '#6b7280', accent: '#374151', background: '#ffffff', text: '#111827' },
        fonts: { heading: 'Helvetica Neue, sans-serif', body: 'Helvetica Neue, sans-serif' },
        style: 'minimalist, elegant, timeless'
    },
    warm: {
        colors: { primary: '#f97316', secondary: '#fb923c', accent: '#fdba74', background: '#fff7ed', text: '#431407' },
        fonts: { heading: 'Outfit, sans-serif', body: 'Outfit, sans-serif' },
        style: 'warm, friendly, inviting'
    },
    tech: {
        colors: { primary: '#6366f1', secondary: '#8b5cf6', accent: '#06b6d4', background: '#0f172a', text: '#f1f5f9' },
        fonts: { heading: 'Space Grotesk, monospace', body: 'Inter, sans-serif' },
        style: 'futuristic, tech-savvy, cyberpunk'
    },
    festive: {
        colors: { primary: '#dc2626', secondary: '#fbbf24', accent: '#f59e0b', background: '#fef2f2', text: '#7f1d1d' },
        fonts: { heading: 'Noto Serif SC, serif', body: 'Noto Sans SC, sans-serif' },
        style: 'celebratory, joyful, traditional'
    },
    elegant: {
        colors: { primary: '#a78bfa', secondary: '#c4b5fd', accent: '#ddd6fe', background: '#faf5ff', text: '#4c1d95' },
        fonts: { heading: 'Playfair Display, serif', body: 'Lato, sans-serif' },
        style: 'sophisticated, refined, luxurious'
    }
};

// ==================== 核心函数 ====================

/**
 * 生成引导问题（根据应用方向和类型）
 */
function generateQuestions(category, type) {
    const baseQuestions = [
        {
            id: 'purpose',
            question: '这个应用/内容的主要用途是什么？',
            type: 'text',
            placeholder: '简要描述你的需求和目标'
        }
    ];

    // 根据不同方向添加特定问题
    const categoryQuestions = {
        web: getWebQuestions(type),
        h5: getH5Questions(type),
        document: getDocumentQuestions(type),
        chatbot: getChatbotQuestions(type),
        content: getContentQuestions(type)
    };

    return [...baseQuestions, ...(categoryQuestions[category] || [])];
}

function getWebQuestions(type) {
    const common = [
        { id: 'theme', question: '你喜欢什么设计风格？', type: 'choice', options: Object.keys(THEMES), default: 'modern' }
    ];

    const specific = {
        form: [
            { id: 'fields', question: '需要收集哪些信息？（用逗号分隔）', type: 'text', placeholder: '例如：姓名,邮箱,手机号,留言' },
            { id: 'validation', question: '是否需要表单验证？', type: 'boolean', default: true },
            { id: 'submitAction', question: '提交后的数据如何处理？', type: 'choice', options: ['本地存储', '导出CSV', '发送邮件', '连接数据库'] }
        ],
        'landing-page': [
            { id: 'product', question: '产品或服务的名称是什么？', type: 'text' },
            { id: 'sections', question: '需要哪些板块？', type: 'text', placeholder: '例如：特性介绍,用户评价,定价,联系方式', default: 'hero,features,testimonials,cta' },
            { id: 'cta', question: '主要行动按钮的文字是什么？', type: 'text', default: '立即开始' }
        ],
        dashboard: [
            { id: 'dataSource', question: '数据来源是什么？', type: 'choice', options: ['CSV文件', 'JSON数据', 'API接口', '手动输入'] },
            { id: 'charts', question: '需要哪些图表？', type: 'text', placeholder: '例如：折线图,柱状图,饼图,数据卡片' },
            { id: 'filters', question: '是否需要数据筛选功能？', type: 'boolean', default: true }
        ],
        tool: [
            { id: 'toolType', question: '工具的具体类型是什么？', type: 'text', placeholder: '例如：BMI计算器、单位转换器' },
            { id: 'inputs', question: '需要用户输入哪些参数？', type: 'text', placeholder: '例如：身高,体重' },
            { id: 'output', question: '计算结果如何展示？', type: 'text', placeholder: '例如：显示BMI值和健康建议' }
        ]
    };

    return [...common, ...(specific[type] || [])];
}

function getH5Questions(type) {
    const common = [
        { id: 'theme', question: '设计主题？', type: 'choice', options: Object.keys(THEMES), default: 'vibrant' }
    ];

    const specific = {
        activity: [
            { id: 'activityTheme', question: '活动主题是什么？', type: 'text', placeholder: '例如：春节红包抽奖' },
            { id: 'duration', question: '活动时间？', type: 'text', placeholder: '例如：2026年2月1日-2月15日' },
            { id: 'features', question: '需要哪些功能？', type: 'text', placeholder: '例如：抽奖转盘,分享得机会,中奖记录' }
        ],
        product: [
            { id: 'productName', question: '产品名称？', type: 'text' },
            { id: 'features', question: '核心特性？（用逗号分隔）', type: 'text', placeholder: '例如：智能识别,云端同步,多端协作' },
            { id: 'cta', question: '行动按钮文字？', type: 'text', default: '立即购买' }
        ],
        invitation: [
            { id: 'event', question: '活动名称？', type: 'text', placeholder: '例如：公司年会' },
            { id: 'date', question: '活动日期？', type: 'text', placeholder: '例如：2026年2月15日' },
            { id: 'location', question: '活动地点？', type: 'text' }
        ]
    };

    return [...common, ...(specific[type] || [])];
}

function getDocumentQuestions(type) {
    const specific = {
        report: [
            { id: 'dataSource', question: '数据文件路径或数据列名？', type: 'text', placeholder: '例如：sales.csv 或 日期,销售额,订单数' },
            { id: 'analysisType', question: '需要哪些分析？', type: 'text', placeholder: '例如：总体趋势,产品对比,同比增长' },
            { id: 'audience', question: '报告的目标读者是谁？', type: 'text', default: '公司管理层' }
        ],
        meeting: [
            { id: 'transcript', question: '会议录音文字稿或主要内容？', type: 'text' },
            { id: 'participants', question: '参会人员？', type: 'text', placeholder: '例如：张三,李四,王五' },
            { id: 'decisions', question: '是否需要提取决策事项？', type: 'boolean', default: true }
        ],
        resume: [
            { id: 'personalInfo', question: '个人信息？', type: 'text', placeholder: '姓名,联系方式,求职意向' },
            { id: 'experience', question: '工作经历或项目经验？', type: 'text' },
            { id: 'template', question: '简历模板风格？', type: 'choice', options: ['现代简约', '经典商务', '创意设计'], default: '现代简约' }
        ]
    };

    return specific[type] || [];
}

function getChatbotQuestions(type) {
    const common = [
        { id: 'botName', question: '机器人的名字？', type: 'text', default: '小智' },
        { id: 'tone', question: '语气风格？', type: 'choice', options: ['专业正式', '友好亲切', '幽默风趣'], default: '友好亲切' }
    ];

    const specific = {
        'customer-service': [
            { id: 'industry', question: '服务的行业或产品？', type: 'text' },
            { id: 'knowledge', question: 'FAQ 文档路径？', type: 'text', placeholder: '例如：faq.md' },
            { id: 'features', question: '需要哪些功能？', type: 'text', placeholder: '例如：订单查询,退换货,人工转接' }
        ],
        'knowledge-qa': [
            { id: 'documents', question: '知识库文档路径？（用逗号分隔）', type: 'text', placeholder: '例如：manual.pdf,guide.md' },
            { id: 'scope', question: '问答范围？', type: 'text', placeholder: '例如：产品使用、技术支持' }
        ]
    };

    return [...common, ...(specific[type] || [])];
}

function getContentQuestions(type) {
    const specific = {
        social: [
            { id: 'platform', question: '目标平台？', type: 'choice', options: ['小红书', '抖音', '微博', '微信公众号'] },
            { id: 'topic', question: '内容主题？', type: 'text', placeholder: '例如：居家办公好物' },
            { id: 'audience', question: '目标受众？', type: 'text', placeholder: '例如：25-35岁职场女性' },
            { id: 'count', question: '需要多少条文案？', type: 'number', default: 10 }
        ],
        marketing: [
            { id: 'product', question: '推广的产品或服务？', type: 'text' },
            { id: 'goal', question: '营销目标？', type: 'choice', options: ['品牌认知', '促销转化', '用户留存'] },
            { id: 'audience', question: '目标受众？', type: 'text' }
        ],
        seo: [
            { id: 'keyword', question: '核心关键词？', type: 'text', placeholder: '例如：AI写作工具' },
            { id: 'length', question: '文章字数？', type: 'number', default: 2000 },
            { id: 'tone', question: '写作语气？', type: 'choice', options: ['专业权威', '通俗易懂', '故事化'], default: '通俗易懂' }
        ]
    };

    return specific[type] || [];
}

/**
 * 生成 AI Prompt（根据应用方向）
 */
function generatePrompt(category, type, answers, theme) {
    const prompts = {
        web: generateWebPrompt(type, answers, theme),
        h5: generateH5Prompt(type, answers, theme),
        document: generateDocumentPrompt(type, answers),
        chatbot: generateChatbotPrompt(type, answers),
        content: generateContentPrompt(type, answers)
    };

    return prompts[category] || '';
}

function generateWebPrompt(type, answers, theme) {
    const themeConfig = THEMES[theme] || THEMES.modern;
    const appConfig = WEB_APP_TYPES[type];

    return `
# Role: 专业前端开发工程师 & UI/UX 设计师

# Task: 生成 ${appConfig.name}

# User Requirements:
${Object.entries(answers).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

# Design Theme: ${theme}
- Primary Color: ${themeConfig.colors.primary}
- Style: ${themeConfig.style}

# Technical Requirements:
1. 使用纯 HTML + Tailwind CSS (CDN) + Vanilla JavaScript
2. 无需构建工具，可直接在浏览器打开
3. 响应式设计，支持移动端
4. 代码清晰易读，添加详细注释

请生成完整的 index.html 文件和 README.md 使用说明。
    `.trim();
}

function generateH5Prompt(type, answers, theme) {
    const themeConfig = THEMES[theme] || THEMES.vibrant;
    const pageConfig = H5_PAGE_TYPES[type];

    return `
# Role: H5 页面设计师 & 前端开发工程师

# Task: 生成 ${pageConfig.name}

# User Requirements:
${Object.entries(answers).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

# Design Theme: ${theme}
- Primary Color: ${themeConfig.colors.primary}
- Style: ${themeConfig.style}

# Technical Requirements:
1. 移动端优化（适配微信内浏览器）
2. 流畅的动画效果
3. 触摸交互优化
4. 分享功能集成

请生成完整的 H5 页面代码。
    `.trim();
}

function generateDocumentPrompt(type, answers) {
    const docConfig = DOCUMENT_TYPES[type];

    return `
# Role: 专业文档撰写专家 & 数据分析师

# Task: 生成 ${docConfig.name}

# User Requirements:
${Object.entries(answers).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

# Output Requirements:
1. 专业的文档结构
2. 清晰的排版和格式
3. 数据可视化（如果适用）
4. 可导出为 Word/PDF/Markdown

请生成完整的文档内容。
    `.trim();
}

function generateChatbotPrompt(type, answers) {
    const botConfig = CHATBOT_TYPES[type];

    return `
# Role: AI 对话系统设计师 & 后端开发工程师

# Task: 配置 ${botConfig.name}

# User Requirements:
${Object.entries(answers).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

# Output Requirements:
1. 可嵌入网站的聊天窗口代码
2. 基于知识库的问答逻辑
3. 后台配置文件
4. 部署指南

请生成完整的聊天机器人代码和配置。
    `.trim();
}

function generateContentPrompt(type, answers) {
    const contentConfig = CONTENT_TYPES[type];

    return `
# Role: 资深内容创作者 & 营销文案专家

# Task: 创作 ${contentConfig.name}

# User Requirements:
${Object.entries(answers).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

# Output Requirements:
1. 符合平台特性的文案风格
2. 吸引人的标题和开头
3. 相关话题标签
4. 配图和发布建议

请生成批量文案内容。
    `.trim();
}

/**
 * 解析命令参数
 */
function parseArguments(args) {
    const result = {
        category: null,
        type: null,
        theme: 'modern',
        options: {}
    };

    const categories = ['web', 'h5', 'document', 'chatbot', 'content'];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i].toLowerCase();

        if (categories.includes(arg)) {
            result.category = arg;
        } else if (arg === 'theme' && args[i + 1]) {
            result.theme = args[i + 1];
            i++;
        } else if (!result.type && result.category) {
            result.type = arg;
        } else if (args[i - 1] !== 'theme') {
            result.options[arg] = args[i + 1] || true;
            if (args[i + 1]) i++;
        }
    }

    return result;
}

module.exports = {
    WEB_APP_TYPES,
    H5_PAGE_TYPES,
    DOCUMENT_TYPES,
    CHATBOT_TYPES,
    CONTENT_TYPES,
    THEMES,
    generateQuestions,
    generatePrompt,
    parseArguments
};
