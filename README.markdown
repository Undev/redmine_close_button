# Redmine Close Issue button

## Introduction

Plugin that places "Close issue" button into contextual toolbar of shown issue.

This button acts as typical "Update" form submittion and shown when:

 * User allowed to close issue.

 * Issue is not already closed nor rejected.

## Screenshot

![Contextual toolbar of Redmine issue](https://github.com/Undev/redmine_close_button/raw/master/screenshot.png "Contextual toolbar of Redmine issue")

## Compatibility

Tested with Redmine 0.9.6, 1.0.2, 1.0.5, 1.1.0, 1.2.1 and with ChiliProject 2.3.0.

## To Do List

 * Support custom issue statuses.

## Installation

Download the sources and put them to your _vendor/plugins/redmine_close_button_ folder.

```bash
cd {REDMINE_ROOT}
git clone git://github.com/Undev/redmine_close_button.git vendor/plugins/redmine_close_button
```

Restart Redmine and have a fun!

## Translations

- en    by Akzhan Abdulin
- en-GB by Daniel Watkins (looks exactly as en, but somebody needs separated locale)
- ru    by Akzhan Abdulin
- fr    by Sylvain Lasnier
- pt    by José Trancas
- bg    by Ivan Cenov
- de    by aceman3000
- pl    by Piotrek Okoński
- sv    by Calle Wolff
- zh    by Anson Chen
- zh-TW by Anson Chen
- es    by Octavio Fuenzalida
- it    by Cipparello

Contributions are welcome!

## Changelog

### 0.0.6

- JavaScript error fixed when Redmine configured to automatically update "Done ratio" field. Thanks to [Ilya Pleshakov](https://github.com/da-eto-ya).

### 0.0.5

- New translations added.

### 0.0.4

- Closing of issue now set its progress up to 100% - [Alexey Kuleshov](https://github.com/kulesa).
- Simplified and traditional Chinese translations added.

### 0.0.3

- Plugin now hooks issue page instead of replacing of template to be compatible with upcoming versions of Redmine.
- New translations added.

### 0.0.2

- New translations added.
- Home has been moved to [Undev organization repository](https://github.com/Undev/redmine_close_button).

### 0.0.1

- First public release.

