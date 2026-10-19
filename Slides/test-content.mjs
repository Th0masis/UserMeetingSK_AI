import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
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
const parsedTitles = deck.slides.map(slide => slide.content.match(/<h1>(.*?)<\/h1>/)?.[1] ?? slide.content.match(/^# (.+)$/m)?.[1] ?? '(untitled)')
assert.equal(deck.entry.slides.length, 25, `Expected the cover, outline and 23 active content slides; parsed: ${parsedTitles.join(' | ')}`)
assert.ok(deck.entry.slides.every(slide => !slide.frontmatter.src), 'The starter deck must not import missing files')
assert.equal(deck.entry.slides[0].frontmatter.layout, 'cover')

const slideTitles = [
  'AI v průmyslové automatizaci',
  'Osnova',
  'AI se z IT dostává do světa OT',
  'LLM není kouzelná skříňka',
  'Od promptingu ke kontext engineeringu',
  'Ověřujme fakta i kód',
  'Od autocomplete k agentovi',
  'Kvalitu určuje postup, ne nálepka',
  'Agentic workflow',
  'Close the gap',
  'Model, harness, MCP a skills',
  'Jak vést k opakovatelnému výsledku',
  'Automation Studio Agentic Bridge',
  'Agentic Bridge: tři propojené části',
  'Knowledge Hub: odborné podklady se zdrojem',
  'AS Repository: postup pro projekt',
  'Co je as-cli?',
  'Co umí as-cli?',
  'Bridge demo: plán, ne důkaz běhu',
  'Co Bridge nezaručuje',
  'B&amp;R Support Agent',
  'Od dotazu k prvnímu vodítku',
  'Odpověď získává kontext z více míst',
  'AI pomáhá hledat. Inženýr rozhoduje.',
  'AI & Agentic Engineering Day',
]

for (const [index, title] of slideTitles.entries()) {
  const slide = deck.slides[index]
  assert.ok(slide.content.includes(title), `Missing or misplaced slide: ${title}`)
  assert.ok(slide.content.trim(), `Empty slide: ${title}`)
}

const sectionMinutes = [3, 5, 14, 14, 8, 6]
const durationTotal = sectionMinutes.reduce((total, duration) => total + duration, 0)
assert.equal(durationTotal, 50, 'The programme including reservations must total 50 minutes')
assert.ok(deck.slides[1].content.includes('50 minut celkem'), 'Outline must show the 50-minute programme')
assert.ok(deck.slides[1].content.includes('aktivní část 45:30'), 'Outline must show the active 45:30')
assert.ok(deck.slides[1].content.includes('rezervace 4:30'), 'Outline must preserve the 4:30 reservation')
assert.ok(deck.slides[7].content.includes('nejsou ostrým protikladem'), 'Vibe coding and agentic engineering must not be presented as strict opposites')
assert.ok(deck.slides[7].content.includes('produkční vhodnost určuje ověření, ne nálepka'), 'Production suitability must depend on verification, not the approach label')
assert.ok(existsSync(resolve(root, 'public/topics/support-agent/support-agent-start-screen.png')), 'Support Agent screenshot must be available locally')
assert.ok(deck.slides[21].content.includes('/topics/support-agent/support-agent-start-screen.png'), 'Support Agent screenshot must be included in its slide')

const source = readFileSync(resolve(root, 'slides.md'), 'utf8')
const presenterNotes = source.match(/<!--\s*\r?\nZáměr a čas:[\s\S]*?-->/g) ?? []
assert.equal(presenterNotes.length, deck.entry.slides.length, 'Every slide must have presenter notes')

console.log(`Content checks passed: ${deck.slides.length} slides, ${durationTotal} planned minutes, ${presenterNotes.length} presenter notes`)