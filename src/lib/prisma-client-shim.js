export class PrismaClient {
  constructor() {
    // Prisma generation is unavailable in this environment.
    // The app uses this shim so runtime imports do not crash.
  }
}

export const Prisma = {
  defineExtension: (ext) => ext,
  getExtensionContext: (that) => that,
  prismaVersion: {
    client: '6.19.3',
    engine: 'local',
  },
};
