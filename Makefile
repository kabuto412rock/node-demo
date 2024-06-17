.PHONY: local, init

init:
	cd my-app && npm i -g @nestjs/cli && npm install
local:
	cd my-app && npm run start
dev:
	cd my-app && npm run start:dev
