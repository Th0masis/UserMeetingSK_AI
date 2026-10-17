import assert from 'node:assert/strict'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { load } from '@slidev/parser/fs'

const root = dirname(fileURLToPath(import.meta.url))
export const deck = await load(
  { roots: [root], userRoot: root, allowedRoots: [root] },
  resolve(root, 'slides.md'),
)

for (const markdown of Object.values(deck.markdownFiles)) {
  assert.equal(markdown.errors?.length ?? 0, 0, `${markdown.filepath}: ${JSON.stringify(markdown.errors)}`)
}

assert.equal(deck.headmatter.title, 'AI v průmyslové automatizaci')
assert.equal(deck.entry.slides.length, 8, 'Expected a cover, an outline and six topic slides')
assert.ok(deck.entry.slides.every(slide => !slide.frontmatter.src), 'The starter deck must not import missing files')
assert.equal(deck.entry.slides[0].frontmatter.layout, 'cover')

const topics = [
  ['Úvod', '2 min'],
  ['Základy LLM', '5 min'],
  ['Agentic Engineering', '15 min'],
  ['Automation Studio Agentic Bridge', '13 min'],
  ['Support Agent', '10 min'],
  ['Příklady z praxe', '5 min'],
]
const topicSlides = deck.slides.slice(2)
assert.equal(topicSlides.length, topics.length)

for (const [index, [title, duration]] of topics.entries()) {
  const slide = topicSlides[index]
  assert.ok(slide.content.includes(`# ${title}`), `Missing or misplaced topic: ${title}`)
  assert.ok(slide.content.includes(duration), `Missing duration for ${title}`)
  assert.ok(slide.content.trim(), `Empty topic slide: ${title}`)
}

const durationTotal = topics.reduce((total, [, duration]) => total + Number.parseInt(duration, 10), 0)
assert.equal(durationTotal, 50, 'Talk outline must total 50 minutes')
assert.ok(deck.slides[1].content.includes('50 minut'), 'Outline slide must show the total duration')

for (const slide of deck.slides) {
  assert.ok(slide.content.trim(), `Empty slide: ${slide.index + 1}`)
}

console.log(`Content checks passed: ${topics.length} topics, ${deck.slides.length} slides, ${durationTotal} minutes`)