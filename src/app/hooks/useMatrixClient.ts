/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { createContext, useContext } from 'react';
import { MatrixClient } from 'matrix-js-sdk';

const MatrixClientContext = createContext<MatrixClient | null>(null);

export const MatrixClientProvider = MatrixClientContext.Provider;

export function useMatrixClient(): MatrixClient {
  const mx = useContext(MatrixClientContext);
  if (!mx) throw new Error('MatrixClient not initialized!');
  return mx;
}
