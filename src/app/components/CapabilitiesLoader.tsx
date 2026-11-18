/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { ReactNode, useCallback, useEffect } from 'react';
import { Capabilities } from 'matrix-js-sdk';
import { AsyncStatus, useAsyncCallback } from '../hooks/useAsyncCallback';
import { useMatrixClient } from '../hooks/useMatrixClient';

type CapabilitiesLoaderProps = {
  children: (capabilities: Capabilities | undefined) => ReactNode;
};
export function CapabilitiesLoader({ children }: CapabilitiesLoaderProps) {
  const mx = useMatrixClient();

  const [state, load] = useAsyncCallback(useCallback(() => mx.getCapabilities(), [mx]));

  useEffect(() => {
    load();
  }, [load]);

  return children(state.status === AsyncStatus.Success ? state.data : undefined);
}
