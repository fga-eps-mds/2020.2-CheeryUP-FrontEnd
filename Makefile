dkc := "docker-compose.yml"

up: 
	docker-compose -f ${dkc} up -d --build

down:
	docker-compose -f ${dkc} down -v
