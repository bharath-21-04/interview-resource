/* search-data.js — Global search index for all pages */
const SEARCH_INDEX = [
  // ── Dashboard ──────────────────────────────────────────
  { title: "Dashboard", sub: "Overview & interview structure", page: "index.html", anchor: "", icon: "IP", group: "Pages" },

  // ── DSA ────────────────────────────────────────────────
  { title: "Arrays & Strings", sub: "Two Sum, 3Sum, Sliding Window, Kadane", page: "dsa.html", anchor: "#arrays", icon: "DS", group: "DSA" },
  { title: "Two Sum", sub: "Hash map pattern · O(n)", page: "dsa.html", anchor: "#arrays", icon: "DS", group: "DSA" },
  { title: "3Sum — Three Sum", sub: "Sort + Two Pointers · O(n²)", page: "dsa.html", anchor: "#arrays", icon: "DS", group: "DSA" },
  { title: "Sliding Window", sub: "Max subarray, longest substring", page: "dsa.html", anchor: "#arrays", icon: "DS", group: "DSA" },
  { title: "Kadane's Algorithm", sub: "Maximum subarray sum · O(n)", page: "dsa.html", anchor: "#arrays", icon: "DS", group: "DSA" },
  { title: "Binary Search", sub: "Sorted arrays, O(log n)", page: "dsa.html", anchor: "#binsearch", icon: "DS", group: "DSA" },
  { title: "Linked List", sub: "Reverse, cycle detection, merge", page: "dsa.html", anchor: "#linkedlist", icon: "DS", group: "DSA" },
  { title: "Stack & Queue", sub: "Monotonic stack, valid parentheses", page: "dsa.html", anchor: "#stackqueue", icon: "DS", group: "DSA" },
  { title: "Trees — BFS DFS", sub: "Binary tree traversal, LCA, height", page: "dsa.html", anchor: "#trees", icon: "DS", group: "DSA" },
  { title: "BST — Binary Search Tree", sub: "Insert, search, validate, kth smallest", page: "dsa.html", anchor: "#trees", icon: "DS", group: "DSA" },
  { title: "Graph — BFS DFS", sub: "Number of islands, clone graph", page: "dsa.html", anchor: "#graphs", icon: "DS", group: "DSA" },
  { title: "Dijkstra's Algorithm", sub: "Shortest path, min-heap · O((V+E) log V)", page: "dsa.html", anchor: "#graphs", icon: "DS", group: "DSA" },
  { title: "Topological Sort", sub: "Kahn's algorithm, course schedule", page: "dsa.html", anchor: "#graphs", icon: "DS", group: "DSA" },
  { title: "Union-Find", sub: "Disjoint sets, path compression, by rank", page: "dsa.html", anchor: "#graphs", icon: "DS", group: "DSA" },
  { title: "Matrix Problems", sub: "Spiral order, rotate 90°, word search", page: "dsa.html", anchor: "#matrix", icon: "DS", group: "DSA" },
  { title: "Dynamic Programming", sub: "Fibonacci, knapsack, LCS, coin change", page: "dsa.html", anchor: "#dp", icon: "DS", group: "DSA" },
  { title: "Heap & Priority Queue", sub: "Kth largest, merge k sorted lists", page: "dsa.html", anchor: "#heap", icon: "DS", group: "DSA" },

  // ── OOP / Java ─────────────────────────────────────────
  { title: "SOLID Principles", sub: "SRP, OCP, LSP, ISP, DIP explained", page: "oop-lld.html", anchor: "#solid", icon: "OO", group: "Java & OOP" },
  { title: "Design Patterns — Singleton", sub: "Thread-safe implementations", page: "oop-lld.html", anchor: "#singleton", icon: "OO", group: "Java & OOP" },
  { title: "Design Patterns — Factory", sub: "Factory Method, Abstract Factory", page: "oop-lld.html", anchor: "#factory-method", icon: "OO", group: "Java & OOP" },
  { title: "Design Patterns — Builder", sub: "Fluent builder, telescoping constructor problem", page: "oop-lld.html", anchor: "#builder", icon: "OO", group: "Java & OOP" },
  { title: "Design Patterns — Observer", sub: "Event system, publish-subscribe", page: "oop-lld.html", anchor: "#observer", icon: "OO", group: "Java & OOP" },
  { title: "Java Streams API", sub: "map, filter, reduce, collect, flatMap", page: "oop-lld.html", anchor: "#java8-streams", icon: "J8", group: "Java & OOP" },
  { title: "Java 8 Functional Interfaces", sub: "Function, BiFunction, Predicate, Consumer, Supplier", page: "oop-lld.html", anchor: "#java8-functional", icon: "J8", group: "Java & OOP" },
  { title: "BiFunction — Java 8", sub: "BiFunction<T,U,R>, andThen, compose", page: "oop-lld.html", anchor: "#java8-functional", icon: "J8", group: "Java & OOP" },
  { title: "Lambda Expressions", sub: "Syntax, method references, 4 types", page: "oop-lld.html", anchor: "#java8-functional", icon: "J8", group: "Java & OOP" },
  { title: "Optional — Java 8", sub: "orElse, map, flatMap, ifPresent", page: "oop-lld.html", anchor: "#java8-streams", icon: "J8", group: "Java & OOP" },

  // ── System Design ─────────────────────────────────────
  { title: "URL Shortener Design", sub: "Hashing, DB schema, scalability", page: "system-design.html", anchor: "", icon: "SD", group: "System Design" },
  { title: "Rate Limiting", sub: "Token bucket, sliding window, Redis", page: "os-concurrency.html", anchor: "#ratelimit", icon: "SD", group: "System Design" },
  { title: "Caching Strategies", sub: "Write-through, write-back, cache-aside, TTL", page: "system-design.html", anchor: "", icon: "SD", group: "System Design" },
  { title: "CAP Theorem", sub: "Consistency, Availability, Partition tolerance", page: "databases.html", anchor: "#cap", icon: "SD", group: "System Design" },

  // ── Kafka ─────────────────────────────────────────────
  { title: "Kafka Architecture", sub: "Broker, topic, partition, offset, consumer group", page: "kafka.html", anchor: "", icon: "KF", group: "Kafka" },
  { title: "Kafka Producer", sub: "Acks, retries, idempotent producer", page: "kafka.html", anchor: "", icon: "KF", group: "Kafka" },
  { title: "Kafka Consumer Groups", sub: "Partition assignment, rebalancing, lag", page: "kafka.html", anchor: "", icon: "KF", group: "Kafka" },

  // ── OS & Concurrency ──────────────────────────────────
  { title: "Process vs Thread", sub: "Memory layout, context switch, scheduling", page: "os-concurrency.html", anchor: "", icon: "OS", group: "OS & Concurrency" },
  { title: "Deadlock", sub: "Coffman conditions, prevention, detection", page: "os-concurrency.html", anchor: "", icon: "OS", group: "OS & Concurrency" },
  { title: "Java Concurrency", sub: "ReentrantLock, CompletableFuture, Virtual Threads", page: "os-concurrency.html", anchor: "", icon: "OS", group: "OS & Concurrency" },
  { title: "Python GIL", sub: "Threading vs multiprocessing vs asyncio", page: "os-concurrency.html", anchor: "", icon: "OS", group: "OS & Concurrency" },

  // ── Docker & AWS ──────────────────────────────────────
  { title: "Docker Architecture", sub: "Container vs VM, layers, OverlayFS", page: "docker-aws.html", anchor: "#docker", icon: "DO", group: "Docker & AWS" },
  { title: "Kubernetes", sub: "Control plane, Deployment, Service, HPA", page: "docker-aws.html", anchor: "#kubernetes", icon: "K8", group: "Docker & AWS" },
  { title: "AWS EC2 & ASG", sub: "Instance types, spot, reserved, auto-scaling", page: "docker-aws.html", anchor: "#aws-core", icon: "AW", group: "Docker & AWS" },
  { title: "AWS S3", sub: "Storage classes, lifecycle, presigned URLs", page: "docker-aws.html", anchor: "#aws-core", icon: "AW", group: "Docker & AWS" },
  { title: "AWS Lambda", sub: "Cold starts, concurrency, provisioned", page: "docker-aws.html", anchor: "#aws-serverless", icon: "AW", group: "Docker & AWS" },
  { title: "VPC Networking", sub: "Subnets, IGW, NAT, security groups", page: "docker-aws.html", anchor: "#aws-networking", icon: "AW", group: "Docker & AWS" },

  // ── Networking & Security ─────────────────────────────
  { title: "HTTP/1.1 vs HTTP/2 vs HTTP/3", sub: "Multiplexing, QUIC, head-of-line blocking", page: "networking-security.html", anchor: "#http", icon: "NW", group: "Networking & Security" },
  { title: "TCP vs UDP", sub: "3-way handshake, reliability, use cases", page: "networking-security.html", anchor: "#tcp-udp", icon: "NW", group: "Networking & Security" },
  { title: "DNS Resolution", sub: "Recursive vs iterative, TTL, record types", page: "networking-security.html", anchor: "#dns", icon: "NW", group: "Networking & Security" },
  { title: "OAuth 2.0", sub: "Authorization Code, PKCE, Client Credentials flows", page: "networking-security.html", anchor: "#oauth", icon: "AU", group: "Networking & Security" },
  { title: "SSO — Single Sign-On", sub: "SAML, OIDC, federation, session management", page: "networking-security.html", anchor: "#sso", icon: "AU", group: "Networking & Security" },
  { title: "JWT — JSON Web Token", sub: "Header.payload.signature, validation, expiry", page: "networking-security.html", anchor: "#jwt", icon: "AU", group: "Networking & Security" },
  { title: "TLS / HTTPS Handshake", sub: "Certificate chain, cipher suites, mTLS", page: "networking-security.html", anchor: "#tls", icon: "CR", group: "Networking & Security" },
  { title: "Cryptography — Symmetric vs Asymmetric", sub: "AES, RSA, ECDSA, key exchange", page: "networking-security.html", anchor: "#crypto", icon: "CR", group: "Networking & Security" },
  { title: "Hashing — bcrypt PBKDF2 SHA", sub: "Password hashing, salts, rainbow tables", page: "networking-security.html", anchor: "#hashing", icon: "CR", group: "Networking & Security" },
  { title: "WebSockets vs SSE vs Long Polling", sub: "Real-time patterns, trade-offs", page: "networking-security.html", anchor: "#realtime", icon: "NW", group: "Networking & Security" },
  { title: "CORS — Cross-Origin Resource Sharing", sub: "Preflight, headers, credentials", page: "networking-security.html", anchor: "#cors", icon: "NW", group: "Networking & Security" },

  // ── Databases ────────────────────────────────────────
  { title: "SQL Indexes", sub: "B-tree, hash, composite, covering index, EXPLAIN", page: "databases.html", anchor: "#indexes", icon: "DB", group: "Databases" },
  { title: "SQL Window Functions", sub: "ROW_NUMBER, RANK, LAG, LEAD, SUM OVER", page: "databases.html", anchor: "#window", icon: "DB", group: "Databases" },
  { title: "SQL JOINs", sub: "INNER, LEFT, RIGHT, FULL, CROSS, self join", page: "databases.html", anchor: "#joins", icon: "DB", group: "Databases" },
  { title: "ACID Properties", sub: "Atomicity, Consistency, Isolation, Durability", page: "databases.html", anchor: "#acid", icon: "DB", group: "Databases" },
  { title: "Transaction Isolation Levels", sub: "Read uncommitted, committed, repeatable, serializable", page: "databases.html", anchor: "#isolation", icon: "DB", group: "Databases" },
  { title: "Database Normalization", sub: "1NF, 2NF, 3NF, BCNF — when to denormalize", page: "databases.html", anchor: "#normalization", icon: "DB", group: "Databases" },
  { title: "CTEs and Recursive CTEs", sub: "WITH clause, hierarchical queries", page: "databases.html", anchor: "#cte", icon: "DB", group: "Databases" },
  { title: "NoSQL — MongoDB", sub: "Document model, aggregation pipeline, indexes", page: "databases.html", anchor: "#mongodb", icon: "DB", group: "Databases" },
  { title: "NoSQL — Cassandra", sub: "Wide-column, partition key, tunable consistency", page: "databases.html", anchor: "#cassandra", icon: "DB", group: "Databases" },
  { title: "NoSQL — Redis", sub: "Data types, TTL, pub/sub, cluster mode", page: "databases.html", anchor: "#redis-nosql", icon: "DB", group: "Databases" },
  { title: "CAP Theorem", sub: "CP vs AP, BASE, eventual consistency", page: "databases.html", anchor: "#cap", icon: "DB", group: "Databases" },
  { title: "Query Optimization", sub: "EXPLAIN ANALYZE, slow query log, N+1", page: "databases.html", anchor: "#query-opt", icon: "DB", group: "Databases" },

  // ── Alation Focus ────────────────────────────────────
  { title: "Alation — Key Focus Areas", sub: "Data catalog, metadata management, search", page: "alation.html", anchor: "", icon: "AL", group: "Alation" },
];
