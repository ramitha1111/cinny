/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { useCallback, useEffect } from 'react';
import { Visibility } from 'matrix-js-sdk';
import { useAsyncCallback } from './useAsyncCallback';
import { useMatrixClient } from './useMatrixClient';

export const useRoomDirectoryVisibility = (roomId: string) => {
  const mx = useMatrixClient();

  const [visibilityState, loadVisibility] = useAsyncCallback(
    useCallback(async () => {
      const v = await mx.getRoomDirectoryVisibility(roomId);
      return v.visibility === Visibility.Public;
    }, [mx, roomId])
  );

  useEffect(() => {
    loadVisibility();
  }, [loadVisibility]);

  const setVisibility = useCallback(
    async (visibility: boolean) => {
      await mx.setRoomDirectoryVisibility(
        roomId,
        visibility ? Visibility.Public : Visibility.Private
      );
      await loadVisibility();
    },
    [mx, roomId, loadVisibility]
  );

  return {
    visibilityState,
    setVisibility,
  };
};
