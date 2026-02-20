# wopr-plugin-voice-cli

CLI commands for WOPR voice operations — adds voice-related slash commands to the WOPR CLI.

## Commands

```bash
npm run build     # tsc
npm run check     # biome check + tsc --noEmit (run before committing)
npm run format    # biome format --write src/
npm test          # vitest run
```

## Key Details

- Registers CLI commands (not a channel or capability provider)
- Commands surface voice capability status, test TTS/STT, configure voice settings
- Depends on voice capabilities being installed separately (e.g. `wopr-plugin-voice-elevenlabs-tts`)
- Plugin contract: imports only from `@wopr-network/plugin-types`

## Issue Tracking

All issues in **Linear** (team: WOPR). Issue descriptions start with `**Repo:** wopr-network/wopr-plugin-voice-cli`.

## Session Memory

At the start of every WOPR session, **read `~/.wopr-memory.md` if it exists.** It contains recent session context: which repos were active, what branches are in flight, and how many uncommitted changes exist. Use it to orient quickly without re-investigating.

The `Stop` hook writes to this file automatically at session end. Only non-main branches are recorded — if everything is on `main`, nothing is written for that repo.