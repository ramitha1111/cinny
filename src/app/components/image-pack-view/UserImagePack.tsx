/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import React, { useCallback, useMemo } from 'react';
import { ImagePackContent } from './ImagePackContent';
import { ImagePack, PackContent } from '../../plugins/custom-emoji';
import { useMatrixClient } from '../../hooks/useMatrixClient';
import { AccountDataEvent } from '../../../types/matrix/accountData';
import { useUserImagePack } from '../../hooks/useImagePacks';

export function UserImagePack() {
  const mx = useMatrixClient();

  const defaultPack = useMemo(() => new ImagePack(mx.getUserId() ?? '', {}, undefined), [mx]);
  const imagePack = useUserImagePack();

  const handleUpdate = useCallback(
    async (packContent: PackContent) => {
      await mx.setAccountData(AccountDataEvent.PoniesUserEmotes, packContent);
    },
    [mx]
  );

  return <ImagePackContent imagePack={imagePack ?? defaultPack} canEdit onUpdate={handleUpdate} />;
}
