# Auth.js (next-auth) V5

== PART 1 ==

[X] Create Next.js App WITH CLI
[X] Clean up files
[X] Install shadcn/ui
[X] Create Navbar
[X] Install shadcn button, form, input
[X] Create signup page
[X] Install valibot
[X] Create signup validator
[X] Create signup form
[X] Create signup server action
[X] Handle errors
[X] Hash password
[X] Create signin page
[X] Create signin validator
[X] Create signin form
[X] Create signin server action

== PART 2 ==

[X] Install prettier plugin tailwindcss
[X] Install Drizzle ORM / Drizzle Kit
[X] Create Drizzle Config
[X] Create Drizzle Schema
[X] Install Auth.js
[X] Update drizzle schema (password, role, email uniqueness)
[X] Setup Postgres with NeonDB
[X] Create helper scripts
[X] Show how to view data (drizzle studio, neon console)
[X] Create drizzle singleton
[X] Signup our first user
[X] Handle email conflicts
[X] Create success message

== PART 3 ==

[] Redirect Links
[] Setup AuthJS config
[] Auth Secret, Auth Url
[] Partial Signin - Parse Credentials
[] User Queries
[] `server-only` package
[] Partial Signin - Log User
[] Complete Signin
[] Error Handling
[] Create /profile
[] Redirect to /profile
[] Session info server side (auth function)
[] Display information as table
[] Create signout butto
[] Signout action
[] Discussion: Next.js Client vs Server Components
[] Navbar Links
[] Session server side in NavbarLinks
[] Session client side in NavbarLinks
[] Session Provider
[] Route Handlers
[] Full Signin Signout flow

== PART 4 ==

[] Setup Google OAuth
[] Install Simple Icons
[] Create OAuth Signin Buttons
[] Test Google SignIn
[] Setup Github OAuth
[] Test Github SignIn
[] Drizzle Adapter

Drizzle Adapter Source Code
<https://github.com/nextauthjs/next-auth/blob/main/packages/adapter-drizzle/src/lib/pg.ts>

[] AuthJS Callbacks
[] Extend Session Informatio
[] Extend Typescript Types
[] Update Drizzle Adapter
[] `@auth/core`
[] AuthJS Events

== PART 5 ==

[] Working with user from database instead of session
[] Updating the session (schema, server action)
[] JWT Callback (trigger)
[] Verify With SignIn Callback

_CASE 1_
If I made an account with an OAuth Provider (Google or Github)
AND I am **LOGGED OUT**
I cannot login with the other OAuth Provider that has the same EMAIL

e.g. Create account with Github for email `giraffereactor@gmail.com`
THEN I cannot login with Google for email `giraffereactor@gmail.com`

BECAUSE of `allowDangerousEmailAccountLinking = false`

_CASE 2_
If I made an account with OAuth Provider (Google or Github)
AND I am **LOGGED OUT**
I cannot login with the Credentials Provider that has the same EMAIL

e.g. Create account with Github for email `giraffereactor@gmail.com`
THEN I cannot login with Credentials for email `giraffereactor@gmail.com`

BECAUSE in `auth.ts` my `authorize` has the statement `if (!user.password) return null`
AND accounts created with OAuth Providers have no password.

[] Custom Errors
[] allowDangerousEmailAccountLinking

We will set `allowDangerousEmailAccountLinking = true`

**NOW - IF WE ARE LOGGED OUT**
if we make an acc with credentials -> we can link google and/or github to that same email
if we make an acc with google -> we can link github to that same email
if we make an acc with github -> we can link google to that same email

[] DISCUSSION about **LOGGED IN** and account linking
[] Protect Pages With Auth
[] Authorized Callback
[] Protect Pages With Middleware
[] The Problem With The Crypto Module
[] The `auth.config.ts` File

== PART 6 ==

[] User Roles
[] How to create an admin user
[] Option 1 - The process.env method
[] Option 2 - The process.env method (extended)
[] Option 3 - Manually edit in SQL Console
[] Option 4 - Create Admin Email Table
(continue from here)
[] Option 5 - ADMIN Dashboard
[] Email Verification Checkbox
[] Email Verification Action
[] Role Change Select
[] Role Change Action
[] Discussion - Don't allow admins to edit each other

[] Email Time - Nodemailer
[] Google Cloud Console
[] OAuth Playground
[] Setup Transporter (Nodemailer Instance)
[] Verification Token Action
[] Discussion Delete Verification Tokens **
[] Auth Config Deny Email Verification
[] Forgot Password UI
[] Forgot Password Action (deter OAauth)
[] Reset Password Form
[] Reverify in Server Action
[] Again with**

Extensions:

TRY THESE

1. delete user (as an admin)
2. manage verification tokens (delete them as needed)
3. add update to user.images
4. add another OAuth provider
5. add a third role
