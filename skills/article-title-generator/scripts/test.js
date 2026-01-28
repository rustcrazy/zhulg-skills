const { generateTitles, readFileContent } = require('./index.js');

// Test with sample content
console.log('=== Article Title Generator Test ===\n');

const sampleContent = `人工智能正在深刻改变商业模式。智能算法和数据分析帮助企业提升效率，降低成本。数字化转型已成为企业必经之路，AI技术在其中发挥关键作用。了解和应用AI技术，将帮助企业获得竞争优势，实现可持续发展。`;

console.log('Sample Content:');
console.log('================');
console.log(sampleContent);
console.log('\n');

console.log('Generated Titles:');
console.log('================');
const titles = generateTitles(sampleContent, 10);
titles.forEach((title, index) => {
    console.log(`${index + 1}. ${title}`);
});

console.log('\n=== Test completed ===');