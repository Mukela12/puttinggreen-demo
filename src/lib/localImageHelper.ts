/**
 * Local Image Helper
 * Serves golf course images from local /public/images directory
 * No external API dependencies - 100% reliable
 */

/**
 * Get a local golf course image for installer profile
 * @param seed - Unique seed for consistent image per installer
 * @returns Path to local image in /public directory
 */
export function getInstallerImage(seed: string): string {
  // Use hash to consistently select same image (1-15) for same installer
  const imageNum = (Math.abs(hashCode(seed)) % 15) + 1;
  return `/images/golf/cards/golf-${imageNum}.jpg`;
}

/**
 * Get hero/background image for landing page
 * @param index - Optional index (0-2) to select specific hero image
 * @returns Path to local hero image
 */
export function getHeroImage(index: number = 0): string {
  const heroNum = (index % 3) + 1;
  return `/images/golf/hero/hero-${heroNum}.jpg`;
}

/**
 * Get all available installer images
 * @returns Array of all 15 installer image paths
 */
export function getAllInstallerImages(): string[] {
  return Array.from({ length: 15 }, (_, i) => `/images/golf/cards/golf-${i + 1}.jpg`);
}

/**
 * Get all available hero images
 * @returns Array of all 3 hero image paths
 */
export function getAllHeroImages(): string[] {
  return Array.from({ length: 3 }, (_, i) => `/images/golf/hero/hero-${i + 1}.jpg`);
}

/**
 * Simple hash function for consistent seeding
 * Same implementation as before to maintain consistency
 */
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}
