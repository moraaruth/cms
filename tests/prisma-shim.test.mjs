import test from 'node:test';
import assert from 'node:assert/strict';
import { PrismaClient } from '../src/lib/prisma-client-shim.js';

test('Prisma shim provides safe default responses for common model calls', async () => {
  const prisma = new PrismaClient();

  assert.equal(await prisma.classified.count({}), 0);
  assert.deepEqual(await prisma.classified.findMany({}), []);
  assert.deepEqual(await prisma.classified.aggregate({}), { _min: {}, _max: {} });
  assert.equal(await prisma.user.findUnique({}), null);
  assert.deepEqual(await prisma.session.create({ data: {} }), { id: 'mock-id' });
});
