import { Redis } from "@upstash/redis";

class InMemoryRedis {
	private store = new Map<string, unknown>();

	async get<T>(key: string): Promise<T | undefined> {
		return this.store.get(key) as T | undefined;
	}

	async set<T>(key: string, value: T): Promise<void> {
		this.store.set(key, value);
	}

	async del(key: string): Promise<void> {
		this.store.delete(key);
	}
}

let redis: Redis | InMemoryRedis;

const upstashUrl = process.env.UPSTASH_REDIS_REST_URL ?? "";
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN ?? "";
const shouldUseInMemory =
	!upstashUrl ||
	!upstashToken ||
	upstashUrl.includes("example") ||
	upstashToken.includes("example") ||
	upstashUrl.includes("localhost");

if (shouldUseInMemory) {
	redis = new InMemoryRedis();
} else {
	try {
		redis = Redis.fromEnv();
	} catch {
		redis = new InMemoryRedis();
	}
}

export { redis };
