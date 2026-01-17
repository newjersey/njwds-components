import { E2EPage } from '@stencil/core/testing';

export const getByTestId = async (page: E2EPage, testIdValue: string) => await page.find(`[data-testid=${testIdValue}]`);
