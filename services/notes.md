# Kubernetes Services: An Overview

## Introduction
Services in Kubernetes are a way to expose different Pods (replicas) so that the application running inside them can be accessed. They provide a stable networking endpoint and handle load balancing for the Pods attached to the Service.

### Key Features of Services:
- **Exposes Pods:** Services make it possible to access Pods from inside or outside the Kubernetes cluster.
- **Load Balancing:** Services balance the load between the Pods they are attached to.
- **Label-Based Attachment:** Typically, labels and selectors are used to associate Pods with Services, though other methods are possible (refer to the Kubernetes documentation). Or please check the yaml files (deployment & service) in this folder.

---

## Types of Kubernetes Services

### 1. ClusterIP (Default)
- **Description:**
  - The Service is only accessible within the Kubernetes cluster.
  - Kubernetes assigns a virtual IP (ClusterIP) to the Service.
- **Use Case:**
  - Internal communication, such as a backend service communicating with a database within the cluster.
- **Example:**
  ```text
  Backend Service <-> ClusterIP <-> Database
  ```

---

### 2. NodePort
- **Description:**
  - Exposes the Service on a specific port (NodePort) on each Node's external IP.
  - The Service is accessible using:
    ```text
    <NodeIP>:<NodePort>
    ```
- **Limitations:**
  - Node IPs can change dynamically in some environments, making this type less reliable for production.
  - NodePorts are assigned from a fixed range (`30000-32767`), limiting flexibility.
- **Use Case:**
  - Primarily for local development and testing purposes.

---

### 3. LoadBalancer
- **Description:**
  - Creates an external load balancer, typically provided by a cloud provider, to distribute traffic to the Service.
  - Provides a static external IP for accessing the application.
  - Communicates with the **Cloud Controller Manager** component in the master node to provision and manage the load balancer.
- **Use Case:**
  - Production-level exposure of applications, especially in cloud environments.

---

# Kubernetes Commands Reference

## Deployment Commands

### Apply a Deployment Configuration
Use the following command to apply a Deployment YAML file:
```bash
kubectl apply -f deployment.yaml
```
- **Purpose:** Creates or updates the Deployment defined in `deployment.yaml`. This will manage the Pods and ensure the desired state.

---
## Service-Related Commands

### Apply a Service Configuration
Use the following command to apply a Service YAML file:
```bash
kubectl apply -f service.yml
```
- **Purpose:** Creates or updates the Service defined in `service.yml`.

---

### Get Services
To list all Services in the current namespace:
```bash
kubectl get services
```
- **Purpose:** Displays details about all Services, including their types, ClusterIPs, and external endpoints.

---

### Delete a Service
To delete a specific Service by name:
```bash
kubectl delete service <service-name>
```
- **Purpose:** Removes the Service from the cluster.

---

## Exposing Services in Minikube

### Access a Service in Minikube
Use the `minikube service` command to expose a Service's external endpoint:
```bash
minikube service <service-name>
```
- **Purpose:** Opens a web browser or displays the URL to access the Service.
- **Example:**
  ```bash
  minikube service k8s-service-demo-app-service
  ```
  This will expose the Service `k8s-service-demo-app-service` and provide its IP and port for access.

---

### Notes on Minikube
- The `minikube service` command automatically sets up and exposes the Service for local development.
- It provides a stable external IP for accessing the application running within the Kubernetes cluster on Minikube.

---

## Additional Tips
- Always verify the resources applied to the cluster using the `kubectl get` commands (e.g., `kubectl get pods`, `kubectl get services`).
- Use descriptive names in your YAML files to make resource management simpler.

For further reference, consult the [Kubernetes documentation](https://kubernetes.io/docs/).


---

## For In-Depth Understanding
Refer to the Kubernetes official documentation: [Services in Kubernetes](https://kubernetes.io/docs/concepts/services-networking/service/)
