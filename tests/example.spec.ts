import { test, expect } from '@playwright/test';

test('Marketplace loads characters and displays cards', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Esperar explícitamente que las tarjetas de personajes sean visibles
  await page.waitForSelector('div.MuiCard-root', { timeout: 10000 });
  // Esperar que las tarjetas de personajes sean visibles
  const cards = await page.locator('div.MuiCard-root');
  await expect(cards.first()).toBeVisible();
  // Comprobar que hay 15 tarjetas visibles
  await expect(cards).toHaveCount(15);
});

test('Marketplace opens character detail on card click', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Hacer clic en la primera tarjeta de personaje
  const card = await page.locator('div.MuiCard-root').first();
  await card.click();
  
  // Esperar que el modal se abra
  const dialog = await page.locator('div.MuiDialogContent-root');
  await expect(dialog).toBeVisible();
  
  // Verificar que los detalles del personaje se muestran en el modal
  await expect(dialog).toContainText('Especie'); //texto del detalle
});

test('Marketplace closes character detail dialog', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // Hacer clic en la primera tarjeta de personaje para abrir el modal
  const card = await page.locator('div.MuiCard-root').first();
  await card.click();
  
  // Esperar que el modal esté visible
  const dialog = await page.locator('div.MuiDialogContent-root');
  await expect(dialog).toBeVisible();

  // Intentar cerrar el modal haciendo clic en el botón con el texto "Cerrar"
  const closeButton = await page.locator('button:has-text("Cerrar")');

  // Forzar el clic para evitar la intercepción de otros elementos
  await closeButton.click({ force: true });
  
  // Verificar que el modal se ha cerrado (eliminado del DOM)
  await expect(dialog).not.toBeVisible();  // Verifica que el modal ya no esté visible
});