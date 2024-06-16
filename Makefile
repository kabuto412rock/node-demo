.PHONY: local, init

init:
	cd my-app && npm install && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
local:
	cd my-app && npm run start:dev
