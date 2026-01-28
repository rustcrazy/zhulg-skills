const fs = require('fs');
const path = require('path');

// WeChat-style title templates and patterns
const TITLE_TEMPLATES = [
    // Question-based titles
    "{hook}：{content}你真的了解吗？",
    "为什么{topic}正在{impact}？",
    "{topic}的{secret}，90%的人都不知道！",

    // Shock/Amazing titles
    "震惊！{content}正在改变{industry}",
    "重磅：{content}将彻底颠覆{field}",
    "绝密：{content}背后的真相",

    // Benefit-driven titles
    "{topic}让{beneficiary}效率提升{number}倍",
    "掌握{skill}，轻松{benefit}",
    "一招学会{content}，告别{problem}",

    // Urgency/Exclusivity
    "限时揭秘：{content}的{secret}",
    "内部资料：{content}实战指南",
    "独家：{content}的{number}个秘密",

    // Problem-Solution
    "{problem}？{solution}来救场了！",
    "还在为{problem}烦恼？看这里",
    "{content}：解决{problem}的终极方案",

    // List-based titles
    "{number}个{content}技巧，让你{benefit}",
    "盘点{content}的{number}大误区",
    "学会这{number}招{content}，立即{benefit}",

    // Emotional triggers
    "感动！{content}背后的{emotion}故事",
    "太可怕了！{content}导致的{impact}",
    "惊喜！{content}带来的{benefit}",

    // Authority/Experience
    "从业{number}年，告诉你{content}的真相",
    "深度分析：{content}如何{impact}",
    "实战经验：{content}的{secret}",

    // Curiosity gaps
    "{content}的{secret}，今天才告诉你",
    "关于{content}，你必须知道的{number}件事",
    "为什么{content}会{impact}？答案在这里"
];

// WeChat-specific hooks and patterns
const HOOKS = [
    "震惊", "绝密", "重磅", "独家", "内部", "揭秘", "真相",
    "必看", "学会", "掌握", "告别", "轻松", "立即",
    "深度", "实战", "案例分析", "经验分享", "专家解读"
];

const IMPACT_WORDS = [
    "改变", "颠覆", "影响", "重塑", "升级", "突破",
    "革新", "提升", "优化", "转化", "驱动", "引爆"
];

const PROBLEMS = [
    "效率低下", "成本高昂", "发展缓慢", "竞争激烈",
    "客户流失", "利润下降", "管理混乱", "创新不足"
];

const SOLUTIONS = [
    "AI技术", "数字化转型", "智能升级", "自动化",
    "流程优化", "战略调整", "模式创新", "技术赋能"
];

const BENEFITS = [
    "效率翻倍", "成本减半", "业绩暴涨", "客户满意",
    "轻松管理", "快速成长", "持续盈利", "脱颖而出"
];

const EMOTIONS = [
    "感人", "震撼", "惊喜", "暖心", "励志", "震撼人心"
];

// Helper function to extract key terms from content
function extractKeyTerms(content) {
    // Improved keyword extraction for Chinese content
    const sentences = content.split(/[。！？.!?]/).filter(s => s.trim().length > 5);
    const keywords = [];
    const commonWords = new Set(['的', '了', '在', '是', '有', '和', '与', '或', '但是', '通过', '可以', '能够', '实现', '成为', '已经', '将', '会', '被', '对', '于', '把', '让', '使', '从', '到', '以', '及', '这', '那', '它', '他们', '我们', '你们']);

    sentences.forEach(sentence => {
        // Extract clean Chinese words (2-4 characters for better titles)
        const cleanSentence = sentence.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, ' ');
        const words = cleanSentence.split(/\s+/).filter(word =>
            word.length >= 2 &&
            word.length <= 6 &&
            !commonWords.has(word) &&
            word !== ''
        );

        keywords.push(...words);
    });

    // Add business and tech related terms
    const businessTerms = ['企业', '转型', '效率', '成本', '客户', '数据', '智能', '数字化', '运营', '决策', '体验', '服务', '案例'];
    content.includes('企业') && keywords.push('企业');
    content.includes('转型') && keywords.push('转型');
    content.includes('效率') && keywords.push('效率');
    content.includes('成本') && keywords.push('成本');
    content.includes('客户') && keywords.push('客户');
    content.includes('数据') && keywords.push('数据');
    content.includes('智能') && keywords.push('智能');
    content.includes('数字化') && keywords.push('数字化');

    // Remove duplicates and return top keywords
    const uniqueKeywords = [...new Set(keywords)];
    return uniqueKeywords.slice(0, 8);
}

// Helper function to select random elements
function randomSelect(arr, count = 1) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Helper function to fill template with content
function fillTemplate(template, content) {
    let filled = template;

    // Extract key information from content
    const keywords = extractKeyTerms(content);

    // Use a mapping of placeholder to replacement values
    const replacements = {
        '{hook}': randomSelect(HOOKS)[0],
        '{content}': keywords[0] || 'AI技术',
        '{topic}': keywords[1] || '数字化转型',
        '{secret}': keywords[2] || '秘诀',
        '{industry}': keywords[3] || '企业',
        '{field}': keywords[4] || '商业',
        '{impact}': randomSelect(IMPACT_WORDS)[0],
        '{problem}': randomSelect(PROBLEMS)[0],
        '{solution}': randomSelect(SOLUTIONS)[0],
        '{beneficiary}': keywords[5] || '企业',
        '{benefit}': randomSelect(BENEFITS)[0],
        '{number}': Math.floor(Math.random() * 10 + 3),
        '{skill}': keywords[6] || '方法',
        '{emotion}': randomSelect(EMOTIONS)[0]
    };

    // Replace all placeholders
    for (const [placeholder, replacement] of Object.entries(replacements)) {
        filled = filled.replace(new RegExp(placeholder, 'g'), replacement);
    }

    // Clean up any remaining placeholders
    filled = filled.replace(/{[^}]+}/g, '');

    return filled;
}

// Main function to generate titles
function generateTitles(content, count = 12) {
    const titles = [];

    // Generate titles using different templates
    for (let i = 0; i < count; i++) {
        const template = randomSelect(TITLE_TEMPLATES)[0];
        const title = fillTemplate(template, content);
        titles.push(title);
    }

    // Remove duplicates while preserving order
    const uniqueTitles = [];
    const seen = new Set();

    titles.forEach(title => {
        if (!seen.has(title)) {
            seen.add(title);
            uniqueTitles.push(title);
        }
    });

    return uniqueTitles.slice(0, count);
}

// Read file content
function readFileContent(filePath) {
    try {
        const fullPath = path.resolve(filePath);
        if (!fs.existsSync(fullPath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        const content = fs.readFileSync(fullPath, 'utf8');
        return content;
    } catch (error) {
        throw new Error(`Failed to read file: ${error.message}`);
    }
}

// Export functions for use in Claude skill
module.exports = {
    generateTitles,
    readFileContent,
    extractKeyTerms
};