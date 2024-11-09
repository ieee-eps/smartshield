# SmartShield Setup

This repository contains a Docker Compose configuration to set up the following services:

- **Wazuh Manager**
- **Wazuh Kibana**
- **Elasticsearch**
- **TheHive**
- **Cortex**
- **Elasticsearch for Cortex**

## How to Use

1. Ensure Docker and Docker Compose are installed on your system.
2. Clone this repository or copy the `docker-compose.yml` file into a directory.
3. Run the Docker Compose command to start all services:

   ```bash
   docker-compose updoc
   ```

4. Access the services using the following URLs:
   - **Wazuh Kibana**: [http://localhost:5601](http://localhost:5601)
   - **TheHive**: [http://localhost:9000](http://localhost:9000)
   - **Cortex**: [http://localhost:9001](http://localhost:9001)

## Services and Ports

### Wazuh Manager
- **UDP Port 1514**: Receives logs from agents.
- **TCP Port 55001**: API port (mapped from container's 55000).

### Wazuh Kibana
- **TCP Port 5601**: Web interface for Wazuh.

### Elasticsearch
- **TCP Port 9200**: Data storage and search engine for Wazuh.

### TheHive
- **TCP Port 9000**: Security incident response platform interface.

### Cortex
- **TCP Port 9001**: Threat analysis and response platform.

### Elasticsearch for Cortex
- **TCP Port 9201**: Dedicated Elasticsearch instance for Cortex.

## Stopping the Services

To stop and remove all running containers, execute:

```bash
docker-compose down
```

## Notes

- **Port Conflicts**: Ensure the listed ports are not in use by other applications.
- **Credentials**: The `CORTEX_KEY` and `CORTEX_ADMIN_PASSWORD` have default values in the `docker-compose.yml` file. Change them for a production environment.
- **Dependencies**: Some services depend on others to be up and running. The `depends_on` directive in the `docker-compose.yml` file handles this.
