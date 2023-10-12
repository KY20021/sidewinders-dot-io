dev:
	npm run start 

build:
	npm run build

format:
	npm run format

pdf:
	npx docs-to-pdf --initialDocURLs="https://docusaurus.io/docs/" --contentSelector="article" --paginationSelector="a.pagination-nav__link.pagination-nav__link--next" --excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" --coverImage="https://sidewinders.io/img/afjrotc-crest.svg" --coverTitle="AFJROTC KY20021"