# Copilot Instructions - Portfolio

Always read `README.md` before making changes.
`README.md` is the source of truth for architecture, quality gates, and coding rules.

## Mandatory Rules

- Mobile-first by default for all UI changes.
- Keep strict separation of concerns: presentation, business logic, data access.
- Keep business content outside Vue templates and move it to dedicated data/config modules.
- Avoid monolithic files. Prefer small reusable components and modules.
- Avoid duplicated logic. Factor shared logic into composables/helpers/services.
- Keep naming and folder conventions consistent with README target structure.
- Update `README.md` when architecture or project flow changes.

## Change Validation

Before finalizing any change:

- Ensure lint passes.
- Ensure build passes.
- Keep PR scope small and focused.
- Document non-obvious decisions in `docs/` when relevant.
