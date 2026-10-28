# Content still to write

The redesign put the site's words and numbers in `content/` so students can
edit them without touching components. These are the places that still need a
human decision. Every one is marked `NEEDS REVIEW` in the source.

Put your name next to an item when you pick it up.

## 1. Numbers we could not verify — `content/team.ts`

| Field | Where it would appear | Owner |
| --- | --- | --- |
| `teamNumbers.competitionsThisSeason` | Season page | |
| `teamNumbers.peopleReachedByOutreach` | About and sponsors pages | |

These are `undefined` right now, and every component that renders them skips
them, so the site never shows a placeholder to a sponsor. Fill them in and they
appear. `headlineStats` at the top of the same file controls the four big
numbers on the home page — swap in any of these once they are confirmed.

The student count that used to be listed here is gone, because it is no longer
a number anyone types: the home page reads it from whichever season is marked
current in `content/data/seasons.json`.

## 2. Student stories — `content/team.ts`, `studentQuotes`

The sponsor deck has a slide for one student's path from joining in middle
school to leading and teaching. The website has the same slot, and it is empty.
Each entry needs:

- the student's approved name and grade
- a short quote, two or three sentences
- what they led, and who they trained
- an approved photo in `public/team-photos/`

The "What students say" section on the sponsors page only renders when this
array has entries, so nothing looks broken while it is empty.

## 3. Season stories — `content/seasons.ts`

2022 and 2023 currently have one factual line each. Someone who was there
should add two or three `highlights`: what the team was proud of, what changed,
what broke. Look at what 2024, 2025 and 2026 do for the pattern.

**Roster sizes disagree with the mentor's review.** Every season's `students`
now comes from the "# Students" row of the Cumulative Roster. The review PDF
of 7 October gave different numbers for four of them, and only 2018 agrees:

| Season | Review PDF | Cumulative Roster | On the site |
| --- | --- | --- | --- |
| 2018 | 12 | 12 | 12 |
| 2019 | 35 | 26 | 26 |
| 2020 | 37 | 29 | 29 |
| 2021 | 43 | 38 | 38 |
| 2022 | 57 | 50 | 50 |

The roster is what the site uses, because it is the source the team pointed
at. The gap is 5 to 9 students a season and looks systematic rather than
random, so the two may be counting different things — students only, against
students plus mentors, or a different tab of the same sheet. Worth one person
confirming which count belongs on a public page.

2020 is now in the list: the chief mentor confirmed the robot was Pythagorean
Cannon and the season was cancelled. It still has no highlights.

## 4. The 2027 build blog is empty

Both posts written in the new format are drafts: "A sample post", which only
ever existed to show the format, and "How to write a build blog", which is
instructions. Neither is something a visitor should read, so neither is
public.

That leaves 2027 with nothing, and the build blog section on the season page
hides itself when its season has no public post. It comes back on its own the
moment one is published, so the first real post of the season is the whole
fix. Both drafts can be deleted in the editor once nobody needs them.

The four 2027 Google Doc links that used to sit on the season page have been
removed: all of them needed a sign-in. They are in the git history if anyone
wants them back.

## 5. Blog posts that nobody outside the team can read

Every build blog that lives in a Google Doc currently returns a sign-in wall:
all of 2022, 2023 and 2027, eleven posts in total. They have always been like
this; the blog reader at `/blog` just makes it visible, because the document
refuses to embed.

In each document: **Share > General access > Anyone with the link > Viewer**.
The 2024 and 2025 posts are PDFs in `public/blog-PDFs/` and are fine.

## 6. Sponsor descriptions

Clicking a sponsor opens a panel. It shows the tier and a link, and will show
two more things once someone writes them, in `content/data/sponsors.json` or
through /admin:

- **About the company** — one or two sentences on what they do.
- **Their relationship with Antares** — what they give and what it pays for.

Every one of the six is currently empty. The Gene Haas Foundation used to have
both, but the "With Antares" paragraph had been invented to show the design
and was removed along with the description it sat under. Write these from what
the sponsor actually gives, not from what sounds plausible.

Sponsor websites: Inworld and the Gene Haas Foundation have one. Apple, Google,
CMS and SmugMug do not, and those need checking rather than guessing.

## 7. A longer hero video

`public/video/hero.mp4` is a 20-second cut of the team's own match footage,
starting at 1:01 of the original recording. If there is better footage, or a
cut the team prefers, replace that file and its poster frame together.
`public/video/README.md` has the format requirements.

## 8. Where the newest sponsor logos came from

All six partners have a logo. Two are worth a note if anyone revisits them:

- **Google** was supplied by the team, who confirmed Google has given
  permission. Google's brand terms require that permission in writing, so if
  the file is ever replaced, check the approval still covers it.
- **Inworld** was taken from inworld.ai, where the wordmark is served inline
  on their homepage, rather than from a brand kit they handed over. Worth a
  sentence to them confirming it is the mark they want used.

## 9. Google Drive links that need sharing turned on

The chief mentor supplied Drive links for the FIRST Responders video and for
five robots: M.R. Left, Optimus Climb, Pythagorean Cannon, Arm2D2 and RedEVA.
All six return 401 to anyone not signed in to an account with access, so none
of them are on the site; the robot names and the video are mentioned in text
only.

Either set each file to **Anyone with the link > Viewer**, or give us public
URLs, such as the video on YouTube. Then the history page can link them. The
file IDs are in the mentor's review PDF, dated 7 October 2026.

## 10. Enable previews on the team internal document

`/internal` embeds the team document, and the frame is blank for everyone
because that document has previews switched off. `/preview` is the only form
of a private Google Doc another site may load, and for this one it does not
render even when a member with access opens it directly. The document this
page embedded before does render, from the same account and browser, with
both documents set to "Restricted", so it is specific to this file rather
than to sharing or to the website.

A Workspace admin needs to turn previews on for it. Nothing in this
repository can work around it. The fallbacks, if it cannot be done, are in
`docs/editing-content.md` under "The members-only page".
