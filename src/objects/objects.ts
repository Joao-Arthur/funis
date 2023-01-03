import { mapEntries } from './mapEntries/mapEntries.js';
import { mapKeys } from './mapKeys/mapKeys.js';
import { mapValues } from './mapValues/mapValues.js';
import { serialize } from './serialize/serialize.js';
import { serializesToSame } from './serializesToSame/serializesToSame.js';
import { fromMap } from './fromMap/fromMap.js';
import { pick } from './pick/pick.js';
import { omit } from './omit/omit.js';

export const objects = {
    mapEntries,
    mapKeys,
    mapValues,
    serialize,
    serializesToSame,
    fromMap,
    pick,
    omit,
} as const;
