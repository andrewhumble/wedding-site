/**
 * Feature flags configuration
 * 
 * Use this file to enable/disable features across the application.
 * Set a flag to `true` to enable the feature, or `false` to disable it.
 */

export const featureFlags = {
  /**
   * Show the RSVP button in the navigation bar
   */
  showRsvpButton: true,
} as const;

export type FeatureFlag = keyof typeof featureFlags;

/**
 * Check if a feature is enabled
 * @param flag - The feature flag to check
 * @returns true if the feature is enabled, false otherwise
 */
export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return featureFlags[flag];
}

