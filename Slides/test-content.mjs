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
const normalizeText = value => value.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
const parsedTitles = deck.slides.map(slide => normalizeText(slide.content.match(/<h1\b[^>]*>(.*?)<\/h1>/)?.[1] ?? slide.content.match(/^# (.+)$/m)?.[1] ?? '(untitled)'))
assert.equal(deck.entry.slides.length, 25, `Expected the cover, outline and 23 active content slides; parsed:\n${parsedTitles.map((title, index) => `${index + 1}: ${title}`).join('\n')}`)
assert.ok(deck.entry.slides.every(slide => !slide.frontmatter.src), 'The starter deck must not import missing files')
assert.equal(deck.entry.slides[0].frontmatter.layout, 'cover')

const slideTitles = [
  'AI v průmyslové automatizaci',
  'Osnova',
  'AI znovu rozevírá rozdíl mezi IT a OT',
  'Základy LLM',
  "{{ selectedMechanism === null ? 'LLM není kouzelná skříňka' : mechanismTitles[selectedMechanism] }}",
  'Probabilističtí agenti, deterministické nástroje',
  'Od vágní otázky k ověření',
  'Od autocomplete k agentovi',
  'Agentic Engineering',
  'Kvalitu určuje postup, ne nálepka',
  'Agentic workflow',
  'Close the gap',
  'Model, harness, tools a skills',
  'Automation Studio Agentic Bridge',
  'Agentic Bridge: tři propojené části',
  'Knowledge Hub: odborné podklady se zdrojem',
  'AS Repository: postup pro projekt',
  'Co je as-cli?',
  'Co umí as-cli?',
  'Co Bridge nezaručuje',
  'B&amp;R Support Agent',
  'Od dotazu k prvnímu vodítku',
  'Odpověď získává kontext z více míst',
  'AI pomáhá hledat. Inženýr rozhoduje.',
  'Další akce 2026',
]

for (const [index, title] of slideTitles.entries()) {
  const slide = deck.slides[index]
  assert.ok(normalizeText(slide.content).includes(normalizeText(title)), `Missing or misplaced slide: ${title}`)
  assert.ok(slide.content.trim(), `Empty slide: ${title}`)
}

assert.ok(deck.slides[2].content.includes('Úkolem je zpřístupnit OT pro AI.'), 'The IT/OT slide must state its AI-accessibility thesis')

const pluginSlide = deck.slides.find(slide => slide.content.includes('<h1>AS Repository: postup pro projekt</h1>'))
assert.ok(pluginSlide, 'The AS Repository plugin overview slide must exist')
assert.equal((pluginSlide.content.match(/class="ot-card repo-plugin-card"/g) ?? []).length, 3, 'The plugin overview must have three cards')
assert.equal((pluginSlide.content.match(/<details class="repo-plugin-details"/g) ?? []).length, 3, 'Each plugin card must provide expandable details')
for (const capability of ['as-skills · 14 doménových skills', 'Structured Text', 'mappView HMI Design and Conversion', 'goToDefinition', 'findReferences']) {
  assert.ok(pluginSlide.content.includes(capability), `Plugin details must describe ${capability}`)
}
assert.equal((pluginSlide.content.match(/class="repo-plugin-skill-group"/g) ?? []).length, 3, 'The as-skills list must be grouped by capability')

const supportContextSlide = deck.slides.find(slide => slide.content.includes('<h1>Odpověď získává kontext z více míst</h1>'))
assert.ok(supportContextSlide?.content.includes('INTERNÍ TICKETY'), 'Support Agent context must include internal tickets')
assert.ok(supportContextSlide.content.includes('potvrzenou integraci'), 'Ticket integration must not be presented as already verified')
const supportStartSlide = deck.slides.find(slide => slide.content.includes('<h1>Od dotazu k prvnímu vodítku</h1>'))
assert.ok(supportStartSlide?.content.includes('Historie interních ticketů (možné napojení)'), 'Slide 22 must show ticketing as a possible extension')
assert.ok(supportStartSlide.content.includes('Ticketing je možné rozšíření'), 'Slide 22 must distinguish ticketing from the approved screenshot')

const agentStabilitySlide = deck.slides.find(slide => slide.content.includes('Instrukce a skills vedou práci. Kontext ji zpřesní. Testy ověřují výsledek.'))
assert.ok(agentStabilitySlide, 'Agent guidance slide must include instructions, context and verification')
assert.ok(agentStabilitySlide.content.includes('Build, test a kontrola schématu'), 'Agent output must be tied to verifiable checks')
const supportChatSlide = deck.slides.find(slide => slide.content.includes('Od vágní otázky k ověření') && slide.content.includes('Konkrétnější dotaz'))
assert.ok(supportChatSlide, 'The chat examples slide must include the support-claim progression and the specific follow-up example')
assert.equal((supportChatSlide.content.match(/<details class="ot-chat-tool"/g) ?? []).length, 3, 'The combined chat must show all three tool records')
assert.ok(!deck.slides.some(slide => /<h1\b[^>]*>Jak vést k opakovatelnému výsledku<\/h1>/.test(slide.content)), 'The redundant repeatability slide must be removed')

const sectionMinutes = [3, 5, 14, 14, 8, 6]
const durationTotal = sectionMinutes.reduce((total, duration) => total + duration, 0)
assert.equal(durationTotal, 50, 'The programme including reservations must total 50 minutes')
assert.ok(deck.slides[1].content.includes('50 minut celkem'), 'Outline must show the 50-minute programme')
assert.ok(deck.slides[1].content.includes('aktivní část 45:30'), 'Outline must show the active 45:30')
assert.ok(deck.slides[1].content.includes('rezervace 4:30'), 'Outline must preserve the 4:30 reservation')
const agenticChapterIndex = deck.slides.findIndex(slide => /<h1[^>]*>Agentic Engineering<\/h1>/.test(slide.content))
const vibeCodingIndex = deck.slides.findIndex(slide => slide.content.includes('# Kvalitu určuje postup, ne nálepka'))
assert.ok(agenticChapterIndex < vibeCodingIndex, 'Agentic Engineering chapter must precede the Vibe coding slide')
const vibeCodingSlide = deck.slides[vibeCodingIndex]
assert.ok(vibeCodingSlide.content.includes('nejsou ostrým protikladem'), 'Vibe coding and agentic engineering must not be presented as strict opposites')
assert.ok(vibeCodingSlide.content.includes('produkční vhodnost určuje ověření, ne nálepka'), 'Production suitability must depend on verification, not the approach label')
assert.ok(existsSync(resolve(root, 'public/topics/support-agent/support-agent-start-screen.png')), 'Support Agent screenshot must be available locally')
const supportAgentSlide = deck.slides.find(slide => slide.content.includes('/topics/support-agent/support-agent-start-screen.png'))
assert.ok(supportAgentSlide, 'Support Agent screenshot must be included in its slide')
const registrationSlide = deck.entry.slides.at(-1).content
assert.ok(registrationSlide.includes('href="https://events.bizzabo.com/AgenticEngineeringDay"'), 'Registration slide must link to the supplied event URL')
assert.ok(registrationSlide.includes('src="/topics/zaver/agentic-engineering-day-registration.svg"'), 'Registration slide must include its local QR code')
assert.ok(registrationSlide.includes('width: 450px; height: 450px;'), 'Registration QR code must be large enough for the projected room')
assert.ok(existsSync(resolve(root, 'public/topics/zaver/agentic-engineering-day-registration.svg')), 'Registration QR code must be available locally')

const source = readFileSync(resolve(root, 'slides.md'), 'utf8')
const presenterNotes = source.match(/<!--\s*\r?\n\*?Záměr a čas:[\s\S]*?-->/g) ?? []
assert.equal(presenterNotes.length, deck.entry.slides.length, 'Every slide must have presenter notes')
assert.ok(!presenterNotes.some(note => /Řekněte:/.test(note)), 'Spoken text must not be prefixed with “Řekněte:”')

for (const [index, note] of presenterNotes.entries()) {
  const cueLabels = [
    'Záměr a čas',
    'Počáteční stav',
    'Mapa interakcí',
    'Mapa odhalování',
    'Konečný stav',
    'Příprava',
    'Ověřitelný výsledek',
    'Plán B',
    'Poznámka',
    'Hranice',
    'Zdroje a hranice',
    'Inspirace',
    'Otevřená příprava',
    'Zdroj pro přípravu',
    'Zdroj pro postup',
  ]
  for (const label of cueLabels) {
    assert.ok(!new RegExp(`^${label}:`, 'm').test(note), `Slide ${index + 1} must italicize supplementary “${label}” notes`)
  }
  assert.ok(!/^Přechod:|^Závěr:/m.test(note), `Slide ${index + 1} must present spoken transitions without labels`)

  const lines = note.split(/\r?\n/)
  assert.ok(
    lines.some(line => line.trim() && line !== '[CLICK]' && !line.startsWith('*') && line !== '<!--' && line !== '-->'),
    `Slide ${index + 1} must include unitalicized presenter speech`,
  )
  for (const line of lines) {
    if (line.startsWith('*') && line.endsWith('*')) {
      const content = line.slice(1, -1)
      assert.ok(
        cueLabels.some(label => content.startsWith(`${label}:`))
          || content.startsWith('Odkaz pro registraci dodal uživatel;')
          || /^\[.+\]$/.test(content),
        `Slide ${index + 1} must reserve italics for supplementary notes and interaction cues`,
      )
    }
    assert.ok(line === '[CLICK]' || !/^\[.+\]$/.test(line), `Slide ${index + 1} must italicize interaction instructions`)
  }

  const clickMarkers = note.match(/^\[CLICK\]\r?$/gm) ?? []
  const revealGroups = new Set(
    [...deck.entry.slides[index].content.matchAll(/\bv-click="(\d+)"/g)].map(([, group]) => group),
  )
  assert.equal(clickMarkers.length, revealGroups.size, `Slide ${index + 1} must have one [CLICK] marker per reveal group`)
  assert.ok(!/^\[click\]\r?$/m.test(note), `Slide ${index + 1} must use uppercase [CLICK] markers`)

  for (const [lineIndex, line] of lines.entries()) {
    if (line.trimEnd() === '[CLICK]') {
      assert.equal(lines[lineIndex + 1], '', `Slide ${index + 1} must separate [CLICK] from its narration`)
      assert.ok(
        lines[lineIndex + 2] && !/^(?:\*|>|\[CLICK\])/.test(lines[lineIndex + 2]),
        `Slide ${index + 1} must put spoken text, without a cue or quote block, after [CLICK]`,
      )
    }
  }
}

console.log(`Content checks passed: ${deck.slides.length} slides, ${durationTotal} planned minutes, ${presenterNotes.length} presenter notes`)