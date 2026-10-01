# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# What this is

Solo Test is a peg solitaire game for tablets, built with Expo and React Native.

- Targets are iPad first and Android tablets second, landscape only. Phone is a later pass.
- The repository is public. Assume anything written into it is readable by anyone.
- Web is not a build target. A separate repo builds the web version. Do not write web-specific code in `src/`.
- Do not prune unused dependencies. Pruning the template's set costs more at each SDK upgrade than it saves, and Metro bundles by import graph, so an unimported package adds nothing to the app.
- The web packages stay too. `@expo/metro-runtime` is a required peer of `expo-router`, and the rest keep a quick web demo possible.

# Layout

- `src/app/` is the Expo Router root. Route files only.
- `src/__tests__/` holds tests, mirroring the path of the code they cover.
- `assets/` holds images and fonts.
- `@/*` maps to `src/*`. `@/assets/*` maps to `assets/*`.
- Keep `@/assets/*` above `@/*` in `tsconfig.json`. TypeScript and Metro match the longest prefix, but `jest-expo` turns `paths` into a `moduleNameMapper` in declaration order and Jest takes the first match.

# Working with the author

- The author writes the code. Explain, review and answer questions.
- Do not produce implementation code unless asked for it in plain words.
- Confirm scope before starting anything that takes more than one step.
- Ask rather than guess when a request is ambiguous.

# Commands

- Yarn 1 classic is the package manager. Never npm or pnpm.
- Use `yarn expo install <pkg>` for Expo SDK packages.
- Use `yarn expo install --dev <pkg>` when that SDK package is a dev tool.
- Use `yarn add --dev <pkg>` for packages outside the SDK.
- Expo docs write `npx expo ...`. Translate to `yarn expo ...`.
- Run `yarn verify` before reporting a change as finished. If the format check fails, run `yarn format`.
- Never name a script `check`. It is a Yarn 1 built-in and silently replaces the script.
- CI lists the four checks in `yarn verify` separately rather than calling the script. A check added to `verify` must be added to the workflow too.
- CI also runs `yarn expo-doctor`, regenerates the Expo type files before the type check and ends with a production build using `yarn expo export`.
- Changing `.github/workflows/review.yml` on a branch stops the review running on that pull request. The action compares the file with the copy on `main` and skips when they differ, with a message that reads like a failure. The new version takes effect from the next pull request.
- `yarn lint` runs `expo lint`, which only looks at `src`, `app` and `components`. Files outside those are never linted.
- `expo lint` takes a fixed set of flags. Anything else goes after `--`, as in `expo lint -- --format compact`.
- `yarn lint` fails on warnings. Fix them rather than silencing them with `eslint-disable`.

# Architecture

- Screens take props and do not read global state. Use stub props until the game rules exist.
- That rule is reviewed once real state lands. Follow it until then, and say so if it starts to hurt.

# Tests

- Tests live under `src/__tests__/`, mirroring the path of the code they cover.
- Never put a test file under `src/app/`. Expo Router treats files there as routes.
- `render()` from `@testing-library/react-native` returns a Promise. Await it.
- Jest stays on 29. `jest-expo` 57 does not work with Jest 30.
- The Jest config is the `jest` block in `package.json`, not a `jest.config.js`.

# TypeScript

- Append to the `types` array in `tsconfig.json`. Never replace it. TypeScript 6.0 changed the default to `[]`, so `jest` is load-bearing: it types the bare `describe`, `it` and `expect`.
- Never add a top-level `exclude` to `tsconfig.json`. It replaces the list inherited from `expo/tsconfig.base`, which is the only thing excluding `node_modules`, `babel.config.js`, `metro.config.js`, `jest.config.js`, `android` and `ios`.
- No `any` without a comment saying why.
- `erasableSyntaxOnly` is on. No enums, namespaces or parameter properties. A cell-state enum is the obvious thing to reach for and it will not compile.
- `tsconfig.json` includes `expo-env.d.ts` and `.expo/types/`. Expo generates both and both are gitignored. CI regenerates them with `expo customize tsconfig.json` before the type check.
