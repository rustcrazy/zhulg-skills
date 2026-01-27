# Zhulg Skills Collection

一个为 Claude 设计的实用 Skill 集合，旨在提升内容创作、开发和日常任务的效率。

## 🚀 已实现的 Skill

### 1. 文章标题生成器 (Article Title Generator)

专门为微信公众号设计的爆款标题生成工具，能够根据文章内容自动生成 10 个以上具有吸引力的标题。

*   **路径**: `skills/article-title-generator`
*   **主要功能**:
    *   支持直接输入文本或读取 Markdown 文件。
    *   生成 10+ 个针对微信环境优化的爆款标题。
    *   侧重于增加点击率和社交分享。
*   **使用方法**:
    ```bash
    # 从文本内容生成
    /article-title-generator content "你的文章内容..."

    # 从 Markdown 文件生成
    /article-title-generator file /path/to/article.md
    ```

## 📂 项目结构

```text
.
├── skills/
│   └── article-title-generator/    # 微信公众号标题生成器
│       ├── SKILL.md                # Skill 定义与详细文档
│       ├── index.js                # 核心逻辑
│       └── ...
└── README.md                       # 本文档
```

## 🛠 如何使用这些 Skill

这些 Skill 设计用于 Claude。你可以通过以下方式使用：

1. 确保你已经在支持 Skill 的环境中加载了此项目。
2. 使用对应的斜杠命令（例如 `/generate-titles`）即可调用。

---


