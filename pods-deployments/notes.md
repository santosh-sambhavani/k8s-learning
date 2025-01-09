# Kubernetes Concepts Documentation

## Why Kubernetes (K8s)?

Kubernetes (K8s) was developed to address the challenges of managing containerized applications at scale. While containers simplify application deployment, managing multiple containers across different environments can become complex. Kubernetes provides a **Container Orchestration Environment (COE)** to automate deployment, scaling, and operations of application containers across clusters of hosts. 

Key features of Kubernetes include:
- **Portability:** Seamlessly run applications across on-premise, hybrid, and multi-cloud environments.
- **Flexibility:** Extend capabilities with custom resources and controllers to meet specific application needs.
- **Scalability:** Automatically scale applications up or down based on demand.
- **Resilience:** Ensure high availability through self-healing capabilities.

In comparison to platform-specific tools like AWS ECS:
- **Kubernetes provides freedom from vendor lock-in** by enabling smooth migration across cloud providers.
- **ECS**, on the other hand, is a good choice for simple container orchestration requirements when advanced features like custom resources or enhanced security aren’t needed.

---

## Kubernetes Architecture

### 1. Control Plane (Master Node)

The control plane manages the Kubernetes cluster and includes the following components:

- **API Server:** Determines which node should host a specific pod.
- **Scheduler:** Executes tasks from the API server, such as assigning pods to nodes.
- **etcd:** Stores the entire cluster’s backup in a key-value pair format.
- **Controller Manager:** Ensures that controllers like ReplicaSets are running as expected.
- **Cloud Controller Manager:** A utility that integrates with different clouds (e.g., AWS, GCP). It translates Kubernetes resource requests (e.g., creating a load balancer) into cloud-specific actions.

### 2. Data Plane (Worker Node)

The data plane executes workloads and includes:

- **Kube Proxy:** Manages load balancing within a node between different pods.
- **Kubelet:** Ensures that all assigned pods are running. It works with the ReplicaSet to restart failed pods.
- **Container Runtime:** Responsible for running containers within the node.

---

## Common kubectl Commands

Below are frequently used `kubectl` commands for managing a Kubernetes cluster:

1. Create a resource from a YAML file:
   ```bash
   kubectl create -f <file.yaml>
   ```
2. View nodes in the cluster:
   ```bash
   kubectl get nodes
   ```
3. View all pods:
   ```bash
   kubectl get pods
   ```
4. View pods with additional details:
   ```bash
   kubectl get pods -o wide
   ```
5. Check Minikube status:
   ```bash
   minikube status
   ```
6. SSH into Minikube:
   ```bash
   minikube ssh
   ```
7. Describe a pod:
   ```bash
   kubectl describe pod <pod-name>
   ```
8. View pod logs:
   ```bash
   kubectl logs <pod-name>
   ```
9. Delete a resource from a YAML file:
   ```bash
   kubectl delete -f <file.yaml>
   ```

**Tip:** Refer to [Kubernetes Cheat Sheets](https://kubernetes.io/docs/reference/kubectl/quick-reference/) for more commands.

---

## Best Practices

### Pods

- Pods **do not** have auto-scaling or auto-healing capabilities.
- **Do not create pods directly**; always use deployment resources.

### Deployments

- Deployments manage pods through the **ReplicaSet Controller**:
  - **ReplicaSet:** Ensures auto-healing by restarting failed pods.
  - **Deployment:** Abstracts the ReplicaSet Controller and manages rolling updates for pods.

By following these best practices, you ensure your Kubernetes cluster is scalable, fault-tolerant, and easier to manage.

---

