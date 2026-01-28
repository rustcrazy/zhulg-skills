# Examples for Cyberelements Image2Article

This directory contains example usage and test cases for the skill.

## Usage Examples

### Example 1: Basic Desk Setup
```bash
/cyberelements-image2article image skills/cyberelements-image2article/examples/desk-setup.jpg
```

Expected elements:
- Tech: Monitor, computer, keyboard, mouse
- Furniture: Desk, ergonomic chair
- Lighting: Desk lamp
- Decor: Plant, photos

### Example 2: Student-Focused Setup
```bash
/cyberelements-image2article image examples/student-desk.jpg audience student
```

Target audience: College students, focus on budget-friendly solutions and dorm setups

### Example 3: Tech Style Article
```bash
/cyberelements-image2article url https://example.com/workstation.jpg audience newbie style tech length long
```

URL input with tech-focused style and detailed content

## Test Cases

### Test Case 1: Minimal Elements
Elements: ["显示器", "键盘", "鼠标"]
Audience: student
Style: balanced
Expected: Focus on space-saving and budget

### Test Case 2: Full Setup
Elements: ["显示器", "电脑", "键盘", "鼠标", "台灯", "绿植", "桌子", "椅子", "水杯", "笔记本"]
Audience: employee
Style: tech
Expected: Comprehensive tech and productivity focus

### Test Case 3: Decor Heavy
Elements: ["绿植", "海报", "照片", "玩偶", "桌面收纳"]
Audience: newbie
Style: artistic
Expected: Focus on atmosphere and aesthetic appeal