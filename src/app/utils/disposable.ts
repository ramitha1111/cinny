/*
Cinny Project
Copyright 2021-present Ajay Bura
SPDX-License-Identifier: AGPL-3.0-only
https://cinny.in

Please see LICENSE file in root of repository for full details.
*/

export type DisposeCallback<DisposeArgs extends unknown[] = [], DisposeReturn = void> = (
  ...args: DisposeArgs
) => DisposeReturn;
export type DisposableContext<
  DisposableArgs extends unknown[] = [],
  DisposeArgs extends unknown[] = [],
  DisposeReturn = void
> = (...args: DisposableArgs) => DisposeCallback<DisposeArgs, DisposeReturn>;

export const disposable = <
  DisposableArgs extends unknown[],
  DisposeArgs extends unknown[] = [],
  DisposeReturn = void
>(
  context: DisposableContext<DisposableArgs, DisposeArgs, DisposeReturn>
) => context;
