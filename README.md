# MongoDB Deployment on Kubernetes

This repository contains Kubernetes manifests to deploy a MongoDB database with the following features:
- Persistent data storage using PersistentVolume and PersistentVolumeClaim.
- Service exposed using NodePort for external access.
- StatefulSet for managing MongoDB pods with stable network identities.
- Custom initialization script for creating users and configuring MongoDB.

## File Structure

```plaintext
.
├── init-mongo.js                 # Initialization script for MongoDB
├── mongodb-pv-pvc.yaml           # PersistentVolume and PersistentVolumeClaim definitions
├── mongodb-service-nodeport.yaml # NodePort service to expose MongoDB externally
├── mongodb-statefulset.yaml      # StatefulSet definition for MongoDB pods

