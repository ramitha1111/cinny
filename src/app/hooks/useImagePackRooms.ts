/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { Room } from 'matrix-js-sdk';
import { useMemo } from 'react';
import { getAllParents } from '../utils/room';
import { useMatrixClient } from './useMatrixClient';

export const useImagePackRooms = (
  roomId: string,
  roomToParents: Map<string, Set<string>>
): Room[] => {
  const mx = useMatrixClient();

  const imagePackRooms: Room[] = useMemo(() => {
    const allParentSpaces = [roomId].concat(Array.from(getAllParents(roomToParents, roomId)));
    return allParentSpaces.reduce<Room[]>((list, rId) => {
      const r = mx.getRoom(rId);
      if (r) list.push(r);
      return list;
    }, []);
  }, [mx, roomId, roomToParents]);

  return imagePackRooms;
};
