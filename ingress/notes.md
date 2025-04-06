### Why Ingress?

- One problem was without ingress kubernetes load balancer was not providing enterprise level features for load balancing like path base routing, ratio based routing, sticky sessions etc.
- And second problem was before ingress in kubernetes cluster for each service we needed external load balancer. which costs very much if we have 1000s of services.
- Because at that time kubernetes wasn't providing path based routing. If path based routing were there it would be able to handle 1000s of services with single load balancer.

### How to implement
- Initially, Kubernetes did not support advanced load balancing features like path-based routing, weighted/rate-based routing, or custom traffic rules.
- Instead of building all these features directly into Kubernetes, the Kubernetes team encouraged external service providers (like NGINX, HAProxy, Ambassador, F5, etc.) to create Ingress Controllers that could run inside Kubernetes clusters.
- Kubernetes introduced the concept of Ingress to define how external traffic should be routed to services within the cluster.
- To use Ingress, we need two things:
  - Ingress Controller – a running service/pod in the cluster that actually handles the routing logic (implemented by NGINX, Ambassador, etc.).
  - Ingress Resource – a Kubernetes object where you define rules like which path goes to which service.
- Each Ingress Controller may support different sets of features, so it’s recommended to follow the provider’s documentation (e.g., for NGINX Ingress Controller) to set it up properly and use its extended capabilities.
