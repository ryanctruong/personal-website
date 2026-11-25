# personal-website

## Run the API locally

From the repository root, with your Python environment active:

```sh
python -m pip install -r server/requirements.txt
gunicorn --reload --bind 127.0.0.1:8080 server.main:app
```

Cloud Run uses the same `server.main:app` entry point and binds to its
assigned port.

## Neon

The `neon/` directory holds the Neon CLI configuration and tooling. Run
`npm ci` there to install the tooling. From that directory, `neon deploy`
applies `neon.ts` to the linked branch and writes credentials to the ignored
`neon/.env.local` file.

Keep database schema changes in `neon/migrations/`. To set up visitor
tracking, select the target branch and database in the Neon SQL Editor and
run each pending file in `neon/migrations/` once, in numerical order.
Apply the migrations before deploying code that writes visitor records.

Flask loads `neon/.env.local` for local development. On Cloud Run, expose
the pooled `DATABASE_URL` to the API service from Secret Manager. Use
`DATABASE_URL_UNPOOLED` for schema migrations.

## Articles and changelog content

Add articles to `client/src/pages/Articles/content/` and release notes to
`client/src/pages/ChangeLog/content/` as `.md` files. Both use the shared
`MarkdownContent` component and frontmatter parser. Entries appear newest first.

```markdown
---
title: Origin Update
date: 2026-11-24
description: A short summary of the release.
---

## Added

- Describe what changed.
```

Use a unique title within each collection and a valid `YYYY-MM-DD` date.
Descriptions are optional. Markdown supports links, lists, images, tables,
and fenced code blocks with syntax highlighting and a copy button.
