# 🔧 Low-Level Design Diagrams (Draw.io)

This directory contains Draw.io (.dio) diagrams for each core component of the **Floor & Decor Agent** system.  
Click any link below to open the diagram directly in [draw.io](https://app.diagrams.net/).

---

## 🧩 Components

| Component | Diagram Link | Description |
|------------|--------------|--------------|
| **Web / CLI Client** | [(link TBD)](./web-cli-client.drawio) | Shows request flow and credential handling between clients and the API Gateway. |
| **API Gateway / HTTP Layer** | [(link TBD)](./api-gateway-http-layer.drawio) | Defines ingress, authentication, rate limiting, routing, and error mapping. |
| **Rate Limiter** | [(link TBD)](./rate-limiter.drawio) | Token bucket algorithm and Redis key schema for enforcing limits. |
| **Auth Service** | [(link TBD)](./auth-service.drawio) | Validation pipeline for API Keys and JWT tokens. |
| **Inventory Service** | [(link TBD)](./inventory-service.drawio) | Fetches per-store quantity and SKU freshness. |
| **Catalog Service** | [(link TBD)](./catalog-service.drawio) | Handles product metadata and alternate recommendations. |
| **Observability Layer** | [(link TBD)](./observability.drawio) | Outlines logging, tracing, and metrics export flow. |
---