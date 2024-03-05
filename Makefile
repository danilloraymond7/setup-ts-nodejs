.PHONY: up
up:
	docker builder prune --all --force
	docker-compose up -d

.PHONY: down
down:
	docker-compose down -v

