/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { useMemo } from 'react';
import { useAccountData } from './useAccountData';
import { AccountDataEvent } from '../../types/matrix/accountData';

export type IgnoredUserListContent = {
  ignored_users?: Record<string, object>;
};

export const useIgnoredUsers = (): string[] => {
  const ignoredUserListEvt = useAccountData(AccountDataEvent.IgnoredUserList);
  const ignoredUsers = useMemo(() => {
    const ignoredUsersRecord =
      ignoredUserListEvt?.getContent<IgnoredUserListContent>().ignored_users ?? {};
    return Object.keys(ignoredUsersRecord);
  }, [ignoredUserListEvt]);

  return ignoredUsers;
};
