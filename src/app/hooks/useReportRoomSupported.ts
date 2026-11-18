/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { useSpecVersions } from './useSpecVersions';

export const useReportRoomSupported = (): boolean => {
  const { versions, unstable_features: unstableFeatures } = useSpecVersions();

  // report room is introduced in spec version 1.13
  const supported = unstableFeatures?.['org.matrix.msc4151'] || versions.includes('v1.13');

  return supported;
};
