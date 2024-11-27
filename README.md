# PostgreSQL Deployment on Kubernetes

This repository contains Kubernetes manifests to deploy a PostgreSQL database with the following features:
- Persistent data storage using PersistentVolume and PersistentVolumeClaim.
- StatefulSet for stable network identities and pod management.
- Authentication with a username, password, and default database.
- Service exposed using NodePort for external access.

## File Structure

```plaintext
.
├── postgresql-all.yaml           # Combined YAML manifest for PostgreSQL deployment

