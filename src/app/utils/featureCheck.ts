/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

export const checkIndexedDBSupport = async (): Promise<boolean> => {
  const ts = new Date().getTime();
  const dbName = `checkIndexedDBSupport-${ts}`;
  return new Promise((resolve) => {
    let db;
    try {
      db = indexedDB.open(dbName);
    } catch {
      resolve(false);
      return;
    }
    db.onsuccess = () => {
      resolve(true);
      indexedDB.deleteDatabase(dbName);
    };
    db.onerror = () => {
      resolve(false);
      indexedDB.deleteDatabase(dbName);
    };
  });
};
