---
title: A place for ideas
date: 2026-11-20
description: A sample article about giving ideas a home, with a little Markdown along the way.
---

This is a sample article for trying out the reading experience. It brings together the things a technical post might need: a clear structure, a few examples, an image, and a table worth coming back to.

## Start with a small question

A useful article doesn’t need to explain everything. Sometimes it starts with one question: **how can I make this a little easier to understand?**

Writing gives that question room to develop. A short paragraph can introduce an idea; a code example can make it concrete. *The useful part is the connection between them.*

### Give the reader a path

Here’s a simple way to shape a first draft:

1. Describe the problem in plain language.
2. Show a small example.
3. Explain what changed and why it helps.

Keep related thoughts together, and leave enough space between sections to let the reader pause.

> A good example makes an abstract idea feel like something you can try.

## Make an idea concrete

For example, a title can become a readable URL. The words in `A place for ideas` become `a-place-for-ideas`:

```ts
function titleToSlug(title: string): string {
    return title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
}

const articleUrl = `/#articles/${titleToSlug('A place for ideas')}`
```

This small example covers English letters and numbers. The site’s actual slug generator also handles accented characters and other writing systems.

### A second code example

An article itself can stay simple. Put its details at the top of a Markdown file, then start writing:

```yaml
title: A place for ideas
date: 2026-11-20
description: A short introduction to the article.
```

## Leave room for a familiar face

Images can break up a longer piece or show something that words alone don’t capture. Here’s the site’s existing illustration as a small example:

![A smiling illustrated character wearing glasses](/beanhead.png)

Use descriptive alternative text so the image has meaning for readers using assistive technology, too.

## Compare the details

A table works well when the reader needs to compare the same details across several options.

| Element | When it helps | Example in this article |
| --- | --- | --- |
| Heading | Introduces a new thought | Start with a small question |
| Code block | Makes a technical idea concrete | Turning a title into a URL |
| Image | Adds visual context | The illustrated character |
| Table | Makes related details easy to compare | This overview |

### Before calling it finished

- Read the draft aloud to catch awkward sentences.
- Check that examples support the explanation.
- Give images useful alternative text.
- Try the article on a narrow screen.

---

This article is a preview you can replace or remove whenever you’re ready. For a refresher on formatting, the [Markdown Guide](https://www.markdownguide.org/basic-syntax/) has more examples.
