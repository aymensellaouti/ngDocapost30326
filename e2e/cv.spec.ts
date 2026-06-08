import { test, expect } from '@playwright/test';
import { cvs } from './fixtures/cvs-fixtures';

test('has title', async ({ page }) => {
  await page.route('**/personnes/**', async route => {
  const json = cvs;
  await route.fulfill({
   json,
  }); // On renvoie notre faux JSON
 });

  await page.goto('/cv');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Docapost/);

  await page.locator("[data-testid=cvsList]");
  await expect(page.locator('[data-testid=cvsList]')).toBeDefined();
  const cvsList = await page.locator('[data-testid=cvsList]');
  const lis = await cvsList.locator('li');
  await expect(lis).toHaveCount(cvs.length);
  const firstLi = lis.nth(0);
  await expect(page.locator('[data-testid=card]')).not.toBeVisible();
  firstLi.click();
  await expect(page.locator('[data-testid=card]')).toBeVisible();
  await expect(page.locator('[data-testid=card]')).toContainText(cvs[0].firstname);
  // Avant d'ajouter la nouvelle route
  await page.unroute('**/personnes/**');
  await page.route('**/personnes/1', async (route) => {
    const json = cvs[0];
    await route.fulfill({
      json,
    }); // On renvoie notre faux JSON
  });
  await page.locator('[data-testid=cardBtn]').click({ force: true });


  await expect(page).toHaveURL('/cv/1');
});

