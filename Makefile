start-dev:
	@docker compose --env-file env-dev -f docker-compose-dev.yml up --force-recreate --remove-orphans

stop-dev:
	@docker compose --env-file env-dev -f docker-compose-dev.yml down

restart-dev: stop-dev start-dev
	@echo "restarting dev"

rebuild-dev:
	@docker compose --env-file env-dev -f docker-compose-dev.yml up --build --force-recreate --remove-orphans

