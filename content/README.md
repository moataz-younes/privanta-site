# Resources articles (Git workflow)

Technical writers publish articles as files in this folder. The site loads them at **build time** (Vite `import.meta.glob`).

## Folder layout

Each article is one directory under `content/articles/`:

```
content/articles/my-article-slug/
  index.json   # metadata (EN + AR fields)
  en.md        # English body (Markdown)
  ar.md        # Arabic body (Markdown)
```

The directory name should match `slug` in `index.json`.

## `index.json` fields

| Field | Description |
|-------|-------------|
| `slug` | URL segment: `/resources/{slug}` |
| `categoryKey` | `regulatory` \| `security` \| `ai` \| `case-study` |
| `order` | Sort order on listing (lower = appears first) |
| `published` | `false` hides the article from the site |
| `category`, `title`, `description`, `date`, `readTime` | Objects with `en` and `ar` strings |

Author attribution is fixed site-wide: **Privanta** / **By Privanta** (EN) and **بواسطة Privanta** (AR). You do not set `author` or `role` in `index.json`.

## Markdown body

Supported in `en.md` / `ar.md`:

- Paragraphs (plain text)
- `##` headings (rendered as article section titles)
- `-` bullet lists
- `>` blockquotes

Example:

```md
Opening paragraph.

## Section title

- First point
- Second point

> Pull quote for emphasis.

Closing paragraph.
```

## Publish workflow

1. Create a branch and add or edit files under `content/articles/`.
2. Run locally: `npm run dev` and open `/resources` and `/resources/your-slug`.
3. Open a PR; after merge, deploy as usual (`npm run build`).

No TypeScript edits are required for new articles.

## Draft / unpublish

Set `"published": false` in `index.json` until the article is ready.
