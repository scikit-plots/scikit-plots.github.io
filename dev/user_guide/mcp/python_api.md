# Python API[#](#python-api "Link to this heading")

## Dependency-light core[#](#dependency-light-core "Link to this heading")

## Lazy server tier[#](#lazy-server-tier "Link to this heading")

`SearchService`, `SearchDocsOutput`, `CitationOutput` and `create_server`
are public but loaded lazily so a base installation can use retrieval without
pydantic/MCP SDK imports.