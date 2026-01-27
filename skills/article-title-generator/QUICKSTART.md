# Quick Start Guide - Article Title Generator

## Installation

The skill is already located at:
```
/Users/zhulianggang/.claude/skills/article-title-generator/
```

No additional installation is required.

## Usage

### Using the Skill in Claude Code

The skill provides the `/generate-titles` command:

```bash
# Generate titles from text content
/generate-titles content "Your article content here..."

# Generate titles from a markdown file
/generate-titles file /path/to/article.md
```

### Using Programmatically

```javascript
const { generateTitles, readFileContent } = require('./index.js');

// From text
const content = "Your article content...";
const titles = generateTitles(content, 10);
console.log(titles);

// From file
try {
    const fileContent = readFileContent('./article.md');
    const titles = generateTitles(fileContent, 10);
    console.log(titles);
} catch (error) {
    console.error('Error:', error.message);
}
```

## Features

- Generates 10+ engaging WeChat-style titles
- Supports both text input and markdown files
- Uses templates with hooks, questions, curiosity gaps
- Focuses on attention-grabbing patterns
- No complex categorization required

## Tips

1. **Provide clear content**: The better the input content, the better the titles
2. **Use specific keywords**: Include relevant terms for better results
3. **Generate multiple times**: Run the skill multiple times for more variety

## Example Output

Input: "关于人工智能在商业中的应用和发展趋势"

Possible titles:
- "震惊！AI正在改变你的商业模式"
- "老板必看：AI如何提升企业效率"
- "深度解析：AI时代的商业新机遇"
- "为什么不懂AI的企业正在被淘汰？"
- "实战案例：AI驱动营收增长的秘诀"