# Campus Resolve — local login credentials

> **Private file — gitignored. Do not commit, paste into a ticket, or share.**
> Everything below is for the local development environment only.

---

## Application logins

### Super administrator (created by `npm run seed`)

| Field    | Value                                   |
| -------- | --------------------------------------- |
| Role     | `SUPER_ADMIN`                           |
| Email    | `amoswnganbe@gmail.com`                 |
| Password | `ChangeMe!2026`                         |
| Sign in  | <http://localhost:5173/login>           |

These values come from `BOOTSTRAP_ADMIN_*` in `.env`. Change
`BOOTSTRAP_ADMIN_PASSWORD` there **before** running `npm run seed` for anything
you intend to keep.

### Other accounts

- **Students** self-register at <http://localhost:5173/register> using an
  institutional address (`<student-id>@live.gctu.edu.gh`).
- **Staff** (officer, department head, admin) are created by an administrator's
  invitation; the invitee sets their own password at
  <http://localhost:5173/staff-invitation>.
- No other accounts are seeded.

---

## Database

Local PostgreSQL is managed by `scripts/local-postgres.mjs` and listens on
port `5433`.

| Field     | Value                                                              |
| --------- | ------------------------------------------------------------------ |
| Host      | `localhost`                                                        |
| Port      | `5433`                                                             |
| Database  | `campus_resolve`                                                   |
| User      | `campus_resolve`                                                   |
| Password  | `campus_resolve`                                                   |
| URL       | `postgresql://campus_resolve:campus_resolve@localhost:5433/campus_resolve?schema=public` |

Test database: `campus_resolve_test` with the same user, password and port.
The API test suite truncates every table in it, so never point it at real data.

| Command                              | Purpose                        |
| ------------------------------------ | ------------------------------ |
| `node scripts/local-postgres.mjs start`  | Start the local cluster   |
| `node scripts/local-postgres.mjs status` | Check whether it is up    |
| `node scripts/local-postgres.mjs stop`   | Stop the local cluster    |
| `node scripts/local-postgres.mjs url`    | Print the connection URL  |

---

## Recovering access

If the super-administrator password no longer works, reset it from `.env`
values without putting a password on the command line:

```bash
npm run reset:credentials              # the bootstrap administrator
npm run reset:credentials -- --all     # every account
```

The password is read from `RESET_PASSWORD`, then `BOOTSTRAP_ADMIN_PASSWORD`,
then the built-in default. The command also clears lockouts and revokes active
sessions.

---

## Before any real deployment

- Generate a new `SESSION_SECRET` (`openssl rand -hex 32`).
- Change `BOOTSTRAP_ADMIN_PASSWORD` and the database password.
- Set `NODE_ENV=production`, real `APP_URL` / `CORS_ORIGINS`, and a real email
  provider (`EMAIL_PROVIDER=resend` with `RESEND_API_KEY`).
- Delete this file from any copied deployment bundle.
