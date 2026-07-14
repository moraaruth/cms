const createDefaultRecord = (input = {}) => {
  if (input && typeof input === "object" && "data" in input && input.data && typeof input.data === "object") {
    return { id: "mock-id", ...input.data };
  }

  return { id: "mock-id" };
};

const createModelProxy = () =>
  new Proxy(
    {},
    {
      get(_target, prop) {
        if (prop === "then") return undefined;

        return async (...args) => {
          switch (prop) {
            case "count":
              return 0;
            case "deleteMany":
            case "updateMany":
            case "createMany":
              return 0;
            case "findMany":
            case "findManyAndCount":
            case "createManyAndReturn":
              return [];
            case "findUnique":
            case "findFirst":
              return null;
            case "aggregate":
              return { _min: {}, _max: {} };
            case "create":
            case "update":
            case "upsert":
              return createDefaultRecord(args[0]);
            case "delete":
              return createDefaultRecord(args[0]);
            default:
              return null;
          }
        };
      },
    },
  );

export const createPrismaClient = () =>
  new Proxy(
    {},
    {
      get(_target, prop) {
        if (prop === "then") return undefined;
        return createModelProxy();
      },
    },
  );

export class PrismaClient {
  constructor() {
    return createPrismaClient();
  }
}

export const Prisma = {
  defineExtension: (ext) => ext,
  getExtensionContext: (that) => that,
  prismaVersion: {
    client: "6.19.3",
    engine: "local",
  },
};
