### Why Ingress?

- Before ingress in kubernetes cluster for each service we needed external load balancer. which costs very much if we have 1000s of services.
- Because at that time kubernetes wasn't providing features same as enterprise load balancers like path based routing or sticky sessions.
- Specifically for above problem the path based routing was needed feature. If path based routing were there it would be able to handle
  1000s of services with single load balancer.
