# `@eropple/nestjs-rx-mailer` #
[![npm version](https://badge.fury.io/js/%40eropple%2Fnestjs-rx-mailer.svg)](https://badge.fury.io/js/%40eropple%2Fnestjs-rx-mailer)

Inspired by [@nest-modules/mailer](https://github.com/nest-modules/mailer) and foiled by its API (in a way that'd require powder-kegging the library, so it'd be rude to ask!), I've written a simple mailer library built around [Nodemailer](https://nodemailer.com/) that I've taken to calling [rx-mailer](https://github.com/eropple/rx-mailer). Its gimmick is really straightforward: feed it some happily type-safe React and out the other end will pop an email, square into the inbox of your favorite recipient.

The bit that's inspired by @nest-modules/mailer is, of course, that I spend a lot of time working with NestJS and sometimes I even want to send an email. So here we've got `@eropple/nestjs-rx-mailer`: a thin module that provides via the NestJS dependency injector an instance of rx-mailer's `Mailer`.

## Installation ##
As per @eropple/rx-mailer itself, this package has `react`, `prop-types`, and `react-dom` as peer dependencies (so you aren't tied to exactly the versions that we had available). Install the packages you need a-like so:

```
npm install --save @eropple/nestjs-rx-mailer react prop-types react-dom
yarn add @eropple/nestjs-rx-mailer react prop-types react-dom
```

## Usage ##
**Please note:** This section covers how to get an instance of the mailer in your application. If you'd like to learn more about how to use rx-mailer, take a look at [its repo](https://github.com/eropple/rx-mailer).

## Special Thanks ##
- `react-html-email` (MIT licensed, for the React email components)
  - [Max Goodman](https://github.com/chromakode)
- `@nest-modules/mailer` (MIT licensed, for guidance re: Nodemailer setup)
  - [Paweł Partyka](https://github.com/partyka95)
  - [Cristiam Diaz](https://github.com/cdiaz)
  - [Pat McGowan](https://github.com/p-mcgowan)
