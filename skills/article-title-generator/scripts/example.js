const { generateTitles } = require('./index.js');

// Example 1: Using direct text input
console.log('=== Example 1: Text Input ===');
const textContent = `
人工智能正在改变传统的营销方式。
通过大数据分析和机器学习，企业可以精准定位目标客户。
个性化推荐系统提高了转化率，降低了获客成本。
营销自动化让团队效率大幅提升，同时改善了客户体验。
`;

const titles1 = generateTitles(textContent, 8);
titles1.forEach((title, index) => {
    console.log(`${index + 1}. ${title}`);
});

console.log('\n');

// Example 2: Using different content
console.log('=== Example 2: Different Content ===');
const content2 = `
远程办公正在重塑企业的组织架构。
分布式团队需要新的协作工具和管理方法。
数字化转型让企业能够灵活应对市场变化。
云端技术为远程办公提供了强大的基础设施支持。
`;

const titles2 = generateTitles(content2, 8);
titles2.forEach((title, index) => {
    console.log(`${index + 1}. ${title}`);
});

console.log('\n=== Examples completed ===');