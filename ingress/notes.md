### Why Ingress?

- One problem was without ingress kubernetes load balancer was not providing enterprise level features for load balancing like path base routing, ratio based routing, sticky sessions etc.
- And second problem was before ingress in kubernetes cluster for each service we needed external load balancer. which costs very much if we have 1000s of services.
- Because at that time kubernetes wasn't providing path based routing. If path based routing were there it would be able to handle 1000s of services with single load balancer.
