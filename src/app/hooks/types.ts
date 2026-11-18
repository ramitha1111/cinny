/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

import { IRequestTokenResponse } from 'matrix-js-sdk';

export type RequestEmailTokenResponse = {
  email: string;
  clientSecret: string;
  result: IRequestTokenResponse;
};
export type RequestEmailTokenCallback = (
  email: string,
  clientSecret: string,
  nextLink?: string
) => Promise<RequestEmailTokenResponse>;
