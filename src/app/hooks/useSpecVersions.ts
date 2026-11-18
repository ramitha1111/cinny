/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { createContext, useContext } from 'react';
import { SpecVersions } from '../cs-api';

const SpecVersionsContext = createContext<SpecVersions | null>(null);

export const SpecVersionsProvider = SpecVersionsContext.Provider;

export function useSpecVersions(): SpecVersions {
  const versions = useContext(SpecVersionsContext);
  if (!versions) throw new Error('Server versions are not provided!');
  return versions;
}
