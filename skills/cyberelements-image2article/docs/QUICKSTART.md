# Quick Start Guide: Cyberelements Image2Article

Transform your workspace photos into professional articles with ease.

## Prerequisites

- Access to a multi-modal AI (like Claude or Gemini)
- The images you want to analyze

## 3 Steps to Generate Your Article

### 1. Identify Your Image
Decide whether you're using a local file or a web URL.
- **Local**: `/Users/username/Pictures/my-desk.jpg`
- **URL**: `https://example.com/workspace.jpg`

### 2. Run the Command
Use the `/cyberelements-image2article` command with your desired audience and style.

```bash
# Example: Student audience, artistic style
/cyberelements-image2article image examples/desk-setup.jpg audience student style artistic
```

### 3. AI Analysis & Generation
1. The AI will **read** your image using its vision capabilities.
2. It will **extract** elements like monitors, keyboards, and plants.
3. It will **compose** a unique article tailored to your settings.

## Core Options

| Parameter | Values |
|-----------|--------|
| `audience`| `student`, `newbie`, `employee` |
| `style`   | `tech`, `artistic`, `balanced` |
| `length`  | `short`, `medium`, `long` |

## Support
For more details, refer to the full [SKILL.md](../SKILL.md) in the root of the skill directory.
