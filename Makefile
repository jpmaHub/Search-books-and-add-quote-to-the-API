.PHONY: build
build:
	docker-compose build

.PHONY: docker-down
docker-down:
	docker-compose down

.PHONY: serve
serve:
	docker-compose up

.PHONY: storybook
storybook:
	docker-compose run --rm --service-ports web npm run storybook

.PHONY: test
test:
	docker-compose run --rm web npm test

test-coverage:
	docker-compose run --rm web npm test -- --coverage
    

lint:
	docker-compose run --rm web npm run lint -p 'src/**/*.{ts,tsx}'
