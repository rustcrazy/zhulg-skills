const fs = require('fs');
const path = require('path');
const axios = require('axios');

// 核心配置：工位元素识别关键字
const WORKSPACE_ELEMENTS = {
    tech: ['显示器', '电脑', '笔记本', 'laptop', 'monitor', 'keyboard', '鼠标', 'mouse', '音响', 'speaker', '耳机', 'headphone', '充电器', 'charger', '线材', 'cable', '支架', 'stand', '台灯', 'desk lamp', '打印机', '扩展坞', 'dock'],
    furniture: ['桌子', 'table', 'desk', '椅子', 'chair', '人体工学椅', 'ergonomic chair', '收纳盒', 'organizer', '书架', 'bookshelf', '搁板', 'shelf'],
    decor: ['绿植', 'plant', '绿萝', '多肉', '装饰品', 'decoration', '摆件', 'figurine', '海报', 'poster', '照片', 'photo', '挂画', 'wall art'],
    lighting: ['台灯', 'lamp', '落地灯', 'floor lamp', '灯带', 'led strip', '氛围灯', 'ambient light', '屏幕挂灯'],
    accessories: ['水杯', 'cup', '保温杯', 'thermos', '笔筒', 'pen holder', '便签', 'sticky note', '日历', 'calendar', '闹钟', 'clock']
};

// 读者画像配置 (用于 Prompt 注入)
const AUDIENCE_TEMPLATES = {
    student: {
        focus: ['性价比', '宿舍利用', '学习效率', 'DIY'],
        key_phrases: ['宿舍神器', '学生党必备', '平价好物', '开学季']
    },
    newbie: {
        focus: ['入职准备', '职业素养', '工作仪式感', '自我投资'],
        key_phrases: ['职场新人', '开工大吉', '第一份工作', '职场利器']
    },
    employee: {
        focus: ['生产力', '职场美学', '舒适度', '专业感'],
        key_phrases: ['工位美学', '高效办公', '品质生活', '职业形象']
    }
};

// 风格与篇幅
const STYLE_TEMPLATES = {
    tech: { adjectives: ['硬核', '极客', '科技感', '智能', '高效'] },
    artistic: { adjectives: ['文艺', '温馨', '治愈', '精致', '氛围感'] },
    balanced: { adjectives: ['简约', '实用', '恰到好处', '平衡', '格调'] }
};

const ARTICLE_TEMPLATES = {
    short: { wordCount: '500字左右' },
    medium: { wordCount: '1000字左右' },
    long: { wordCount: '1500字以上' }
};

/**
 * 核心逻辑：将视觉识别结果转化为 AI 写作 Prompt
 */
function prepareAIData(elements, audience = 'employee', style = 'balanced', length = 'medium') {
    const aConfig = AUDIENCE_TEMPLATES[audience] || AUDIENCE_TEMPLATES.employee;
    const sConfig = STYLE_TEMPLATES[style] || STYLE_TEMPLATES.balanced;
    const lConfig = ARTICLE_TEMPLATES[length] || ARTICLE_TEMPLATES.medium;

    const prompt = `
# Role: 资深内容创作者 & 工位美学博主

# Context:
我有一张工位照片，已经通过视觉分析识别出以下元素：
${elements.join('、')}

# Task:
请根据以上元素创作一篇深度分享文章。

# Requirements:
1. **目标读者**：${audience} (侧重 ${aConfig.focus.join('、')})。
2. **语气风格**：${style} (要体现出 ${sConfig.adjectives.join('、')} 的特质)。
3. **篇幅**：${lConfig.wordCount}。
4. **核心要求**：
   - **拒绝陈词滥调**：不要罗列物品，而是描述它们如何支撑你的工作状态。
   - **细节感知**：结合材质（如金属、原木）、光影（百叶窗、氛围灯）和生机（绿植）进行描写。
   - **价值提升**：分享关于 ${aConfig.key_phrases[0]} 的生活哲学。

# Article Structure:
- 具有传播力的标题
- 独特的场景式开头
- 沉浸式的物件与体验解析
- 总结与互动建议
    `.trim();

    return { prompt, elements };
}

/**
 * 基础辅助函数
 */
function analyzeImage(imagePath) {
    if (!fs.existsSync(path.resolve(imagePath))) {
        throw new Error(`Image not found: ${imagePath}`);
    }
    return { status: 'ready_for_vision', message: 'Ready for AI visual analysis.' };
}

async function downloadImageFromUrl(url, outputPath) {
    const response = await axios({ url, method: 'GET', responseType: 'stream' });
    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}

function parseArguments(args) {
    const result = { source: null, sourceType: 'image', audience: 'employee', style: 'balanced', length: 'medium' };
    const argMap = {
        'student': 'audience', 'newbie': 'audience', 'employee': 'audience',
        'tech': 'style', 'artistic': 'style', 'balanced': 'style',
        'short': 'length', 'medium': 'length', 'long': 'length'
    };
    args.forEach((arg, i) => {
        const a = arg.toLowerCase();
        if (a === 'image' || a === 'url') {
            result.sourceType = a;
            result.source = args[i + 1];
        } else if (argMap[a]) {
            result[argMap[a]] = a;
        }
    });
    return result;
}

module.exports = {
    prepareAIData,
    analyzeImage,
    downloadImageFromUrl,
    parseArguments,
    WORKSPACE_ELEMENTS
};
