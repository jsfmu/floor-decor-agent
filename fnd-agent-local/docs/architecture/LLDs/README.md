# 🔧 Low-Level Design Diagrams (Draw.io)

This directory contains Draw.io (.dio) diagrams for each core component of the **Floor & Decor Agent** system.  
Click any link below to open the diagram directly in [draw.io](https://app.diagrams.net/).

---

## 🧩 Components

| Component | Diagram Link | Description |
|------------|--------------|--------------|
| **Web / CLI Client** | [Link](https://app.diagrams.net/#G1iKi80jygszFG-IKQzBxF1UbRyI_5kcd7#%7B%22pageId%22%3A%223CA9bHgRLclsXfoIiB65%22%7D) | Displays web content from the web server. Shows request flow and credential handling between clients and the API Gateway. |
| **API Gateway / HTTP Layer** | [(link TBD)](./api-gateway-http-layer.drawio) | The single entry point for all client requests. Acts as a reverse proxy and a centralized management point for API interactions. Defines ingress, authentication, rate limiting, routing, and error mapping. |
| **Rate Limiter** | [(link TBD)](./rate-limiter.drawio) | Token bucket algorithm and Redis key schema for enforcing limits. |
| **Auth Service** | [(link TBD)](./auth-service.drawio) | Validation pipeline for API Keys and JWT tokens. (This is only to demonstrate system design fullstack skills rather than practicality, this feature may be taken out in the future) |
| **Inventory Service** | [(link TBD)](./inventory-service.drawio) | Fetches per-store quantity and SKU freshness. |
| **Catalog Service** | [(link TBD)](./catalog-service.drawio) | Handles product metadata and alternate recommendations. |
| **Observability Layer** | [(link TBD)](./observability.drawio) | Outlines logging, tracing, and metrics export flow. |
---

