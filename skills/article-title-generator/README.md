# Article Title Generator for Claude

A Claude skill that generates engaging, attention-grabbing article titles specifically designed for WeChat public accounts.

## Features

- Generate 10+ compelling article titles
- Support both text input and markdown files
- WeChat-optimized title styles
- Simple and easy to integrate

## Installation

This skill is designed to work with Claude Code. Simply place the skill in your `.claude/skills` directory.

```bash
# Create skills directory if it doesn't exist
mkdir -p ~/.claude/skills

# Copy the skill to your skills directory
cp -r article-title-generator ~/.claude/skills/
```

## Usage Examples

### From Text Content
```javascript
const { generateTitles } = require('./index.js');

const content = "The future of artificial intelligence in business transformation and digital innovation";

const titles = generateTitles(content, 10);
console.log(titles);
```

### From Markdown File
```javascript
const { readFileContent, generateTitles } = require('./index.js');

try {
    const content = readFileContent('./article.md');
    const titles = generateTitles(content, 12);
    console.log(titles);
} catch (error) {
    console.error('Error:', error.message);
}
```

## Title Generation Patterns

The skill uses various WeChat-specific patterns including:

- **Question-based titles**: "为什么AI正在改变你的生意模式？"
- **Shock/Amazing titles**: "震惊！AI正在悄悄改变你的生意模式"
- **Benefit-driven titles**: "AI让企业效率提升3倍"
- **Problem-Solution titles**: "效率低下？AI技术来救场了！"
- **List-based titles**: "5个AI技巧，让你业绩暴涨"
- **Curiosity gaps**: "AI的秘诀，今天才告诉你"

## Customization

You can customize the title generation by modifying:

1. **TITLE_TEMPLATES** in `index.js` - Add your own title templates
2. **HOOKS** - Add attention-grabbing opening words
3. **IMPACT_WORDS** - Add powerful impact verbs
4. **PROBLEMS/SOLUTIONS** - Customize problem-solution pairs
5. **BENEFITS** - Add attractive benefit phrases

## Requirements

- Node.js 12.0.0 or higher
- Claude Code with skill support

## License

MIT License