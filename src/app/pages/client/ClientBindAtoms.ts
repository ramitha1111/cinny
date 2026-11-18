/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { ReactNode } from 'react';

import { useMatrixClient } from '../../hooks/useMatrixClient';
import { useBindAtoms } from '../../state/hooks/useBindAtoms';

type ClientBindAtomsProps = {
  children: ReactNode;
};
export function ClientBindAtoms({ children }: ClientBindAtomsProps) {
  const mx = useMatrixClient();
  useBindAtoms(mx);

  return children;
}
