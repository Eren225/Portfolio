# Portfolio - Project Context and Engineering Rules

This README is the source of truth for all contributors (human and AI).
Before any code change, read this file and apply its rules.

## 0. AI Working Contract

- Always start with a mobile-first approach.
- Keep strict separation of responsibilities between UI, business logic, and data access.
- Prefer small reusable modules over large files.
- Avoid hardcoded business content inside Vue templates.
- Keep changes focused, reviewable, and aligned with this README.

---

## 1. Project Overview

Goal:
Build a modern, responsive portfolio website that works great on mobile first, then scales to tablet and desktop.

Scope:
Single page portfolio with main sections/modules: About, Skills, Projects, Contact, plus shared navigation and layout.

Target users:
Recruiters, clients, partners, and technical contacts viewing profile and work.

Outcome expected:
A fast, clean, maintainable portfolio with strong UX, clear content, and a codebase that is easy to extend safely.

## 2. Tech Stack and Tools

Core:

- Vue 3.5
- Vite 7

UI/Presentation:

- Tailwind CSS v4 (config via CSS `@import`, plugin Vite `@tailwindcss/vite`)
- lucide-vue-next for SVG icons
- Shared design tokens from centralized style/config files

Navigation/API:

- Current navigation: section anchors in single page (no vue-router)
- If routing is introduced: vue-router routes defined in a dedicated router module

Data layer:

- Static/local content in dedicated data files
- Optional remote providers must be isolated behind service modules

Utilities:

- Local utility helpers in dedicated utility modules

Tooling:

- Build/dev: Vite 7
- Lint: ESLint v10 (flat config via `eslint.config.js`)
- Format: Prettier
- CSS tooling: PostCSS + Autoprefixer + Tailwind v4

## 3. Architecture and Modularity (Strict Rules)

Strict separation of concerns:

- Presentation layer = render only (Vue templates + presentational components).
- Business logic = composables/modules (no domain logic inside visual components).
- Data access = service layer only.

No monolithic files:

- Split large components by responsibility.
- Keep files small, readable, and testable.

Reuse standard patterns:

- Follow Vue and Tailwind conventions already used in project.
- Keep naming and folder conventions consistent.

Keep business logic outside presentation:

- No heavy calculations, filtering pipelines, or API orchestration directly in page/view components.

Centralize data/configuration:

- Content and constants in dedicated data/config modules.
- Environment values only in env files and config modules.

Avoid duplicated logic:

- Factor repeated logic into composables, helpers, or shared components.

## 4. Folder Structure (Target)

Use this structure progressively during refactor:

```text
src/
	app/                    # App shell, global providers, app-level wiring
	assets/                 # Fonts, global css, static style assets
	components/
		ui/                   # Generic reusable UI components
		layout/               # Navbar, footer, wrappers
	features/
		about/                # Domain module example
			components/
			composables/
			data/
			types/
		projects/
		skills/
		contact/
	views/                  # Route/page level composition only
	services/               # API/infrastructure adapters
	data/                   # Centralized editable content (text, links, lists)
	config/                 # App constants, env mapping, feature flags
	utils/                  # Pure utility functions
	router/                 # Routing setup (if applicable)
	tests/                  # Unit/integration/e2e tests
docs/                     # Technical docs and architecture decisions
```

Migration note:

- Existing structure can be migrated incrementally.
- New code should follow this target layout immediately.

## 5. Styling and UX Rules

Mobile-first by default:

- Base styles target small screens first.
- Add tablet/desktop enhancements with progressive breakpoints.

Visual consistency:

- Use a coherent token system for spacing, typography, and colors.
- Reuse existing tokens/components before creating new ones.

Readability and accessibility:

- Strong contrast and legible text sizes.
- Semantic HTML and keyboard-friendly interactions.
- Touch targets should be comfortable on mobile.

Avoid visual noise:

- Keep hierarchy clear.
- Avoid inconsistent spacings, random font sizes, and mixed patterns.

## 6. Data and Content Management

Rules:

- No hardcoded business content in UI logic.
- Keep editable content in dedicated data/config files.
- Add fallback values for missing remote content.
- Validate and sanitize user-editable inputs (for example contact forms).
- Preserve backward compatibility when content schemas evolve.

Recommended first step:

- Move section text, links, and metadata into centralized data modules.

## 7. Configuration and Environments

Environment strategy:

- Use `.env` files by target environment.
- Client-side variables must use `VITE_` prefix.

Security:

- Never commit secrets.
- Keep credentials in deployment platform secret managers.

Environment setup:

- Document local/staging/production setup in docs.
- List required external services and permissions.
- Define bootstrap steps for new environments.

## 8. Quality Gates

Mandatory before merge:

- Lint passes.
- Build passes.
- Tests pass.

Repository commands:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run format`

Code review quality:

- Enforce consistent naming and architecture conventions.
- Keep pull requests small and focused.
- Reject changes that mix unrelated responsibilities in one file.

## 9. Admin / Backoffice Content Flow (Optional)

Current status:

- No backoffice at this stage.

If introduced later:

- Define edit permissions by role.
- Protect sensitive actions with authentication and authorization.
- Track updates and timestamps on editable content.
- Keep fallback content if remote source fails.
- Document recovery procedure.

## 10. Delivery and Maintenance

Delivery:

- Provide clear deployment instructions (build, publish, rollback).

Operations:

- Add basic monitoring and error tracking.
- Track known limitations and roadmap in docs.

Maintenance:

- Keep README and docs aligned with real architecture.
- Any structural change must update this file in the same pull request.

---

## Refactor Priorities (Recommended Immediate Plan)

1. Remove mobile blocking behavior and implement true responsive layouts.
2. Move business/content logic from views into feature modules and data files.
3. Introduce reusable UI and layout component boundaries.
4. Add test scaffolding (unit first, then integration/e2e).
5. Document architecture decisions in `docs/`.
