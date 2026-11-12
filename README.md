# tomsickova.com

Look at the [Nuxt documentation](https://nuxt.com/docs) to learn more.

## Setup

Use Node 24 (pinned in `.node-version`, which Render reads too) and pnpm 12 (pinned in `packageManager`). pnpm 11 or newer switches to the pinned version by itself; pnpm 9 and 10 cannot install this project.

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

## Editing content (CMS)

The site has a CMS at https://tomsickova.com/admin/ ([Sveltia CMS](https://sveltiacms.app/en/docs)), configured in `public/admin/config.yml`. Every save is a commit to `master`, which Render deploys like any other push.

| What | In the CMS | In the repo |
| --- | --- | --- |
| Page texts, Czech and English | Pages | `content/*.md`, `content/en/*.md` |
| Footer contact details, social links, contact form address | Settings > Contact details | `data/site.json` |
| Gallery names and order | Settings > Portfolio galleries | `data/galleries.json` |
| Photos | Assets > Global Assets > folder | `app/assets/images/<folder>/` |

Photo folders, all under `app/assets/images/`:

- `homepage/`: the homepage slideshow
- `news/`: photos below the News text
- `about/`: the portrait on the About page (the first file by name)
- `portfolio/<gallery>/`: one folder per gallery. The first file by name is the cover, so prefix it with `1.`. A folder missing from `data/galleries.json` still shows up, last, under its folder name.

Uploads through the CMS are converted to WebP and scaled down to fit 2048x2048 (`media_libraries` in the CMS config). The pages pick up `.jpg`, `.jpeg`, `.png` and `.webp` files, lowercase extensions only.

### Sign-in

Without extra setup, sign in with "Sign In Using Access Token" and a fine-grained GitHub token:

- Resource owner `tomsickova`, repository access "Only select repositories" with `tomsickova.com`, and the repository permission Contents read and write. [This link](https://github.com/settings/personal-access-tokens/new?name=tomsickova.com%20CMS&target_name=tomsickova&expires_in=366&contents=write) fills in everything except the repository.
- Only members of the `tomsickova` organization can create one. GitHub does not allow fine-grained tokens for outside collaborators, who would need a classic token with the `repo` scope instead.
- If the organization requires approval for fine-grained tokens, an owner approves it under the organization's settings, Personal access tokens.

The browser remembers the token, so it is entered once per device.

The "Sign In with GitHub" button only works after a one-time setup of the [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth):

1. Deploy it to Cloudflare Workers and note the URL, `https://sveltia-cms-auth.<subdomain>.workers.dev`.
2. Register a GitHub App with the redirect URI `<worker URL>/callback`, "Expire user authorization tokens" checked, and repository permissions Contents read and write, Metadata read-only. Generate a client secret and install the app on this repository only.
3. In the Worker settings, set `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` (as a secret) and `ALLOWED_DOMAINS=tomsickova.com`.
4. Set `base_url` under `backend` in `public/admin/config.yml` to the Worker URL.

### Trying the CMS locally

Run `pnpm dev`, open http://localhost:3000/admin/index.html in Chrome, click "Work with Local Repository" and select this folder. Changes are written to the files on disk and not committed.
