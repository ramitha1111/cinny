/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { Room } from 'matrix-js-sdk';
import { useCallback, useMemo } from 'react';
import { useStateEventCallback } from './useStateEventCallback';
import { useForceUpdate } from './useForceUpdate';
import { getStateEvent } from '../utils/room';
import { StateEvent } from '../../types/matrix/room';

export const useStateEvent = (room: Room, eventType: StateEvent, stateKey = '') => {
  const [updateCount, forceUpdate] = useForceUpdate();

  useStateEventCallback(
    room.client,
    useCallback(
      (event) => {
        if (
          event.getRoomId() === room.roomId &&
          event.getType() === eventType &&
          event.getStateKey() === stateKey
        ) {
          forceUpdate();
        }
      },
      [room, eventType, stateKey, forceUpdate]
    )
  );

  return useMemo(
    () => getStateEvent(room, eventType, stateKey),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [room, eventType, stateKey, updateCount]
  );
};
